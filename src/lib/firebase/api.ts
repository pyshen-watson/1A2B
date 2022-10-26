import { functions } from "./app"

// Comment this if not testing
import { connectFunctionsEmulator, httpsCallable } from "firebase/functions"
// connectFunctionsEmulator(functions, "localhost", 5001)

export const newGame = httpsCallable(functions, "newGame")
export const verifyAnswer = httpsCallable(functions, 'verifyAnswer')

