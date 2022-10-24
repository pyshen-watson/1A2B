import * as functions from "firebase-functions";
import randomNumberGenerator from "./lib/random-number-generator";

export const RNG = functions.https.onCall((data, context) => {

    const randomNumberString = randomNumberGenerator(data.length, data.shuffle_n)

    return randomNumberString
})