import app from "./firebase"

export const ref = app.database().ref("goldnederland/")
export const firebaseAuth = app.auth()