import { useState,useEffect } from "react";
import saveText,{getText} from "./firebase/firestore";

function App() {

  const [text,setText] = useState("")
  const [messages,setMessages] = useState([])

  
  async function newMessages(){
    const New = await getText();
    setMessages(New)
  }

  async function fireIt(){
    await saveText(text)
    setText("")
    newMessages()
  }

  useEffect(()=>{
    newMessages()
  },[])


  return (
    <div className="App">
      <input value={text} type="text" onChange={(e)=>{setText(e.target.value)}}></input>
      <button type="button" onClick={fireIt}>send</button>
      {messages.map((message)=>{return(<div>{message.message}</div>)})}
    </div>
  );
}

export default App;
