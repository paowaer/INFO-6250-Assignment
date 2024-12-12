import { useEffect } from "react";
import "./Message.css";

function Message({ message, setMessage }) {
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 2000);
  }, [message]);
  return message && <div className="message-tip">{message}</div>;
}

export default Message;
