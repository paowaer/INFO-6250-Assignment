import { MESSAGES } from "./constants";
import "./Status.css";

function Status({ message }) {
  return message && <div className="status">{MESSAGES[message]}</div>;
}

export default Status;
