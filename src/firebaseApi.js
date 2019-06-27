import { firestore } from './firebase'
import { collectIdsAndDocs } from './utilities'

export const getMessages = async (roomId) => {
    const roomRef = await firestore.collection('rooms').doc(roomId)
    const messages = await firestore.collection('messages').where('roomRef', '==', roomRef).get()

    return messages
}

export const getMessage = async (id) => {
    const doc = await firestore.collection('messages').doc(id).get()
    const message = collectIdsAndDocs(doc)
    return message
}

export const subscribeMessages = async (roomId, setMessages) => {
    const roomRef = await firestore.collection('rooms').doc(roomId)
    const unsubscribeFn = await firestore.collection('messages')
        .where('roomRef', '==', roomRef)
        .onSnapshot(snapshot => {
            const messages = snapshot.docs.map(collectIdsAndDocs)
            setMessages(messages)
        })

    return unsubscribeFn
}

export const subscribeUsers = async (roomId, setUsers) => {
    const unsubscribeFn = await firestore.collection('rooms')
        .doc(roomId)
        .onSnapshot(snapshot => {
            const roomData = collectIdsAndDocs(snapshot)
            setUsers(roomData)
        })

    return unsubscribeFn
}

export const postMessage = async (message) => {
    await firestore.collection('messages').add(message)
}

export const updateMessage = async (id, message) => {
    await firestore.collection('messages').doc(id).update({message})
}

export const deleteMessage = async (id) => {
    await firestore.collection('messages').doc(id).delete()
}

export const createRoom = async (room) => {
    return await firestore.collection('rooms').add(room)
}

export const getRoom = async (id) => {
    const doc = await firestore.collection('rooms').doc(id).get()
    const room = collectIdsAndDocs(doc)
    return room
}