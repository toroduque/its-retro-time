import { firestore } from './firebase'
import { collectIdsAndDocs } from './utilities'

export const getMessages = async () => {
    const messages = await firestore.collection('messages').get()
    return messages
}

export const getMessage = async (id) => {
    const message = await firestore.collection('messages').doc(id).get()
    return message
}

export const subscribeMessages = async (setMessages) => {
    const unsubscribeFn = await firestore.collection('messages').onSnapshot(snapshot => {
        const messages = snapshot.docs.map(collectIdsAndDocs)
        setMessages(messages)
    })

    return unsubscribeFn
}

export const postMessage = async (message) => {
    await firestore.collection('messages').add(message)
}

export const updateMessage = async (id, message) => {
    await firestore.collection('messages').doc(id).update({message})
}