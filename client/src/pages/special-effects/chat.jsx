import React, { useEffect, useCallback, useRef } from 'react';
import { Widget } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

function Chat() {  
  return (
    <div className="App">
      <Widget />
    </div>
  );
}
export default Chat;