"use client";

import { useState } from "react";

export default function BasicEmail() {
  const [subject, setSubject] = useState();
  const [body, setBody] = useState();

  async function sendEmail () {
    return null;
  }

  return (
    <div>
      <div>
        <div>
          <h2>Send An Email</h2>
        </div>
        <div>
          <label>Subject</label>
          <input 
          type="text" 
          value={subject}
          onChange={(e) => setSubject (e.target.value)}
          />
          <div>
          <label>Body</label>
          <input 
          type="text" 
          value={body}
          onChange={(e) => setBody (e.target.value)}
          />
          </div>
        </div>
        <div>
            <button onClick={sendEmail}>Send Email </button>
        </div>
      </div>
    </div>
  );
}
