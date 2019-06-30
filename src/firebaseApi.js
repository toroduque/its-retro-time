import { firestore, auth } from './firebase'
import { collectIdsAndDocs } from './utilities'

// ---   MESSAGES   ---

export const getMessage = async (id) => {
    try {
        const doc = await firestore.collection('messages').doc(id).get()
        const message = collectIdsAndDocs(doc)
        return message
    } catch (error) {
        console.error(`Error retriving a message: ${error}`)
    }
} 

export const subscribeMessages = async (roomId, setMessages) => {
    try {
        const roomRef = await firestore.collection('rooms').doc(roomId)
        const unsubscribeFn = await firestore.collection('messages')
            .where('roomRef', '==', roomRef)
            .onSnapshot(snapshot => {
                const messages = snapshot.docs.map(collectIdsAndDocs)
                setMessages(messages)
            })
    
        return unsubscribeFn
    } catch (error) {
        console.error(`Error subscribing to Messages updates: ${error}`)
    }
}

export const postMessage = async (message) => {
    try {
        await firestore.collection('messages').add(message)
    } catch(error) {
        console.error(`Error posting a new message: ${error}`)
    }
}

export const updateMessage = async (id, message) => {
    try {
        await firestore.collection('messages').doc(id).update({message})
    } catch(error) {
        console.error(`Error updating a message: ${error}`)
    }
}

export const deleteMessage = async (id) => {
    try {
        await firestore.collection('messages').doc(id).delete()
    } catch(error) {
        console.error(`Error delating a message: ${error}`)
    }
}

// ---   ROOMS   ---

export const createRoom = async (room) => {
    try {
        return await firestore.collection('rooms').add(room)
    } catch (error) {
        console.error(`Error creating a room: ${error}`)
    }
}

export const getRoom = async (id) => {
    try {
        const doc = await firestore.collection('rooms').doc(id).get()
        const room = collectIdsAndDocs(doc)
        return room
    } catch (error) {
        console.error(`Error retrieving data of a room: ${error}`)
    }
}

export const subscribeUsers = async (roomId, setUsers) => {
    try {
        const unsubscribeFn = await firestore.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => {
            const roomData = collectIdsAndDocs(snapshot)
            setUsers(roomData.users)
        })

    return unsubscribeFn

    } catch (error) {
        console.error(`Error subscribing to Users updates: ${error}`)
    }
}

export const addUserToRoom = async (roomId, user) => {
    try {
        const room = await getRoom(roomId)
        const { users } = room
        const newUsers = [ ...users, user ]

        await firestore.collection('rooms').doc(roomId).update({users: newUsers})
    } catch (error) {
        console.error(`Error adding a new user to existing room: ${error}`)
    }
}

// ---   AUTH   ---
export const subscribeAuth = async(setCurrentUser) => {
    try {
        const unsubscribeFn = await auth.onAuthStateChanged(user => setCurrentUser(user))
        return unsubscribeFn

    } catch (error) {
        console.error(`Error subscribing to Auth updates: ${error}`)
    }
}

export const signUp = async (displayName) => {
    try {
        await auth.signInAnonymously()
        await auth.currentUser.updateProfile({ displayName })
    } catch (error) {
        console.error(`Error signing up a new user: ${error}`)
    }
}