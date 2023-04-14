import "./index.css";
import { IconContext } from "react-icons";
import {
  AiFillHome,
  AiFillInfoCircle,
  AiFillProject,
  AiOutlineMail,
} from "react-icons/ai";

const Navigation = () => {
  return (
    <div className="navbar">
      <IconContext.Provider
        value={{
          color: "#00A388",
          size: 30,
          className: "round-background",
        }}
      >
        <div className="nav-container">
          <div className="nav-icon-container">
            <AiFillHome />
          </div>
          <div className="nav-text-container">
            <span>Home</span>
          </div>
        </div>
        <div className="nav-container">
          <div className="nav-icon-container">
            <AiFillInfoCircle />
          </div>
          <div className="nav-text-container">
            <span>Home</span>
          </div>
        </div>
        <div className="nav-container">
          <div className="nav-icon-container">
            <AiFillProject />
          </div>
          <div className="nav-text-container">
            <span>Home</span>
          </div>
        </div>
        <div className="nav-container">
          <div className="nav-icon-container">
            <AiOutlineMail />
          </div>
          <div className="nav-text-container">
            <span>Home</span>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Navigation;
