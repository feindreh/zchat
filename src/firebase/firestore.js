
import {getFirestore,collection, addDoc,getDocs } from "firebase/firestore";

import app from "./app";

const db = getFirestore(app);


export default async function saveText(text){
    try {
        console.log("save")
        await addDoc(collection(db, "text"), {
          message: text,
          time:Date.now()
        });
      } catch (e) {
        console.error("Error adding text: ", e);
      }
  }

  export async function getText(){
    console.log("read")
    const messages = await getDocs(collection(db, "text"));
    
    const messagesArray = []
    messages.forEach((mes) => {
        messagesArray.push(mes.data())
    })
    return messagesArray
  }


  
