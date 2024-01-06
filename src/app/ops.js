import { addDoc, collection, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

const CollectionRef = collection(db, "UserDetails");

class ops {
    addUser = (newUser) =>{
        return addDoc(CollectionRef, newUser);
    }

    updateUser = (userUID, updateUser) =>{
        const userDoc = doc(db, "UserDetails", id);
        return updateDoc(userDoc, updateUser)
    };

    deleteUser = (id) =>{
        const userDoc = doc(db, "UserDetails", id);
        return deleteDoc(userDoc);
    }

    getAlluser = () =>{
        return getDoc(CollectionRef);
    }

    getUser = (id) =>{
        const userDoc = doc(db, "UserDetails", id);
        return getDoc(userDoc)
    }
};

export default new ops();