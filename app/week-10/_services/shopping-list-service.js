import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function getItems(userId) {
  const itemRef = collection(db, "users", userId, "items");
  const data = await getDocs(itemRef);
  return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}
export async function addItem(userId, item) {
  const itemRef = collection(db, "users", userId, "items");
  return await addDoc(itemRef, item);
}