const SESSION_START = 'SESSION_START'
const SESSION_END = 'SESSION_END'
const SESSION_ANSWER = 'SESSION_ANSWER'

export const sessionStart = (deck) => dispatch => ({
    type: SESSION_START,
    deck
})

export const sessionEnd = () => dispatch => ({
    type: SESSION_START
})

export const sessionAnswer = isAnswerCorrect => dispatch => ({
    type: SESSION_ANSWER,
    isAnswerCorrect
})