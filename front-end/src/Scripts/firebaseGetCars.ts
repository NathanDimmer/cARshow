import { firebaseApp } from "./firebaseConfig";

export const getCars = (name: string) => {
  return firebaseApp
    .firestore()
    .collection("dealerships")
    .doc(encodeURI(name))
    .get()
    .then((value) => {
      const data = value.data();
      if (data) {
        return data;
      } else {
        console.log("No data.");
        return null;
      }
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
};
