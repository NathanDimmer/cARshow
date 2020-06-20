import { firebaseApp } from "./firebaseConfig";

export const updateCars = (name: string, cars: any) => {
  return firebaseApp
    .firestore()
    .collection("dealerships")
    .doc(encodeURI(name))
    .update({ cars })
    .then(() => true)
    .catch((err) => {
      console.log(err);
      return false;
    });
};
