// library for "resources" firestore collection

// import firebase lib, returns firestore db in firebase var
import firebase from "./firebase";

// returns all valid IDs for getStaticPaths()
export async function getResourceIds() {
  let output = [];

  // wrap try around out code to catch any errors that could happen
  try {

  // retrieve ALL docs from firestore collection named "resources"
  const snapshot = await firebase.collection("resources").get();

  //loop thru and build out an array of all data from firestore collect
  snapshot.forEach(
    (doc) => {
      output.push(
        {
          params: {
            id:doc.id
          }
        }
      );
    }
  );

    } catch(error){
      console.error(error);
    }

  return output;
}

export async function getSortedList() {
  let output = [];
   try {
    const snapshot = await firebase.collection("resources").get();
    snapshot.forEach(
      (doc) => {
        output.push(
          {
            id: doc.id.toString(),
            name: doc.data().name.toString()
          }
        );
      }
    );
  } catch(error) {
  console.error(error);
  }
console.log("----");
console.log(output);
return output;
}

// returns one document's data for matching ID for getStaticProps()
export async function getResourceData(idRequested) {
  // retrieve ONE doc from our firestore collec matched by unique id
  const doc = await firebase.collection("resources").doc(idRequested).get();

  // return all data from firestore doc as json
  let output;
  if (!doc.empty) {
    output = { id:doc.id, data:doc.data() };
  } else {
    output = null;
  }
  return output;
}

