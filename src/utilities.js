import { FIRST, SECOND, THIRD } from 'constants/column'

export const collectIdsAndDocs = doc => ({id: doc.id, ...doc.data()})

export const countMessagesByType = messages => {
    const count = {
        firstColumn: 0,
        secondColumn: 0,
        thirdColumn: 0
    }

    messages && messages.forEach(message => {
        switch (message.columnNumber) {
            case FIRST:
                count.firstColumn++
                break;
            
            case SECOND:
                count.secondColumn++
                break;
            
            case THIRD:
                count.thirdColumn++
            default:
                break;
        }
    })

    return count
}

export const filterMessagesByColumnNumber = (messages, columnNumber) => {
    return messages && messages.filter(message => message.columnNumber === columnNumber)
}
