import { initializeApp } from "firebase/app"
import { getFunctions } from "firebase/functions"
import firebaseConfig  from "./config"


export const app = initializeApp(firebaseConfig)
export const functions = getFunctions(app)