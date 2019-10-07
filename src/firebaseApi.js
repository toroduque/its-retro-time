import { firestore, auth } from './firebase'
import { collectIdsAndDocs } from './utilities'
import { SESSION } from 'constants/firebase'

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

export const updateReactions = async (id, userId, userName, newReaction) => {
    try {
        const doc = await firestore.collection('messages').doc(id).get()
        const { reactions } = { ...collectIdsAndDocs(doc)}

        const isUserFound = reactions[newReaction].some(reaction => reaction.userId === userId)

        if (isUserFound) {
            // Remove reaction if userId exists
            reactions[newReaction] = reactions[newReaction].filter(reaction => reaction.userId !== userId)
        } else {
            // Add reaction if userId is new
            reactions[newReaction].push({ userId, userName })
        }

        await firestore.collection('messages').doc(id).update({reactions})
    } catch(error) {
        console.error(`Error updating messages reactions: ${error}`)
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
        if (doc.exists === false ) throw new Error(`Room with id ${id} does not exist`)

        const room = collectIdsAndDocs(doc)
        return room
        
    } catch (error) {
        console.error(`Error retrieving data of a room: ${error}`)
    }
}

export const subscribeRoom = async (roomId, setRoomInfo) => {
    try {
        const unsubscribeFn = await firestore.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => {
            const roomData = collectIdsAndDocs(snapshot)
            setRoomInfo(roomData)
        })

    return unsubscribeFn

    } catch (error) {
        console.error(`Error subscribing to Room updates: ${error}`)
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

export const updateColumnName = async (roomId, columnOrder, newName) => {
    try {
        const roomUpdate = {};
        roomUpdate[`columnsName.${columnOrder}`] = newName;

        await firestore.collection('rooms').doc(roomId).update(roomUpdate)
    } catch (error) {
        console.error(`Error updating ${columnOrder}'s name: ${error}`)
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
        await auth.setPersistence(SESSION)
        const newUser = await auth.signInAnonymously()
        await auth.currentUser.updateProfile({ displayName })

        return newUser
    } catch (error) {
        console.error(`Error signing up a new user: ${error}`)
    }
}