import * as functions from "firebase-functions"
import * as admin from 'firebase-admin'
admin.initializeApp()

import { v4 as uuidv4 } from "uuid"
import randomNumberGenerator from "./lib/random-number-generator"
import verifySubmission from "./lib/verify-submission"

export const newGame = functions.https.onCall( async (data, context) => {

    const gameID = uuidv4()
    const answer = randomNumberGenerator(data.length, data.shuffle_n)

    try {
        await admin.firestore().doc(`/Game/${gameID}`).create({answer:answer})
        console.log(`NewGame: gameID=${gameID}, answer=${answer}`)
        return gameID
    }
    catch (error) {
        console.error(error)
        return null
    }
})

export const verifyAnswer = functions.https.onCall( async (data, context) => {

    const gameID = data.id
    const submit = data.submit

    try {
        const snapshot = await admin.firestore().doc(`/Game/${gameID}`).get()
        const db_data = snapshot.data()
        const answer = db_data && db_data.answer
        const result = verifySubmission(submit, answer)
        return result
    }
    catch (error) {
        console.error(error)
        return error
    }
})