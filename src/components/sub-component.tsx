/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useState } from 'react';
import GenericTemplate from "./GenericTemplate";



function SubComponent() {

  const wsUrl = 'wss://' + window.location.host + '/ws';
  let ws: WebSocket;

  const [message, setmessage] = useState<string[]> ([]);
  const handleClick = () => {
    console.log('クリックされました');
    ws.send('data sent.');
  }
  useEffect(() => {
    ws = new WebSocket(wsUrl);
    ws.onmessage = (ev: MessageEvent) => {
      setmessage(message.concat(ev.data))
    }
  });
    return (
      <GenericTemplate>
      <div>
        <h2>{window.location.host}</h2>
        <div>{message}</div>
        <button onClick={handleClick}>Add +1</button>
      </div>
      </GenericTemplate>
    );
}

export default SubComponent;