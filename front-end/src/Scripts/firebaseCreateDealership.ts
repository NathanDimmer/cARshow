import { firebaseApp } from "./firebaseConfig";

export const createDealership = (
  name: string,
  address: string,
  email: string,
  phone: string,
  password: string
) => {
  return firebaseApp
    .firestore()
    .collection("dealerships")
    .doc(encodeURI(name))
    .set({ name, address, email, phone, password, cars: [] })
    .then(() => true)
    .catch((err) => {
      console.log(err);
      return false;
    });
};
