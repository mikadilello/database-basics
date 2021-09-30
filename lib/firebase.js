// we have to load the firebase-admin in order to interact with our firebase proj
import admin from "firebase-admin";

// to get ready to send a auth req to firebase, we load the json
// we load the json string and conv to an actual json obj instead of load file
// why? more secure than saving our creds in a json file in our proj
const serviceAccount = JSON.parse(
  process.env.NEXT_PUBLIC_FIREBASE_DATABASE_PRIVATEKEY
);

// let's wrap all of our code that tries to talk to firebase in a try{}
try{
  admin.initializeApp(
    {
      credential: admin.credential.cert(serviceAccount),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL
    }
  );
  } catch(err){
    // if error happens...
    console.log("firebase err", err.stack);
  }

export default admin.firestore();