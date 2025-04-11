import React, { useState, useEffect } from "react";

import {databases, DATABASE_ID,COLLECTION_ID_MASSAGES} from "../appwriteConfig.js";


function Room() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMassages();
  }, []);
  const getMassages = async () => {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_MASSAGES);
    console.log(response);
    setMessages(response.documents);
  }
  return(
    <div>
      <h1>
        Room
      </h1>
      <div>
        {messages.map((message) => (
          <div key={message.$id}>
            <h2>{message.body}</h2>
            
          </div>
        ))}
      </div>
    </div>
  )
}
export default Room;