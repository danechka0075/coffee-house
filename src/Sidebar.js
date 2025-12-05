import "./sidebar.css";
import { toggleFlagSide } from './App.js'


export default function Sidebar({ open, setFlagSiteBar}) {
  return (
    <div className={`sidebar ${open ? "open" : ""}`}>
      <button className="" onClick={() => toggleFlagSide(setFlagSiteBar)}>Назад</button>
    </div>
  );
}
