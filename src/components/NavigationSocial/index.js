import "./index.css";
import { IconContext } from "react-icons";
import { AiFillHome, AiFillInfoCircle } from "react-icons/ai";

const NavigationSocial = () => {
  return (
    <div className="navbar-social">
      <IconContext.Provider
        value={{
          color: "#00A388",
          size: 30,
          className: "round-background",
        }}
      >
        <div className="nav-soc-container">
          <div className="nav-soc-icon-container">
            <AiFillHome />
          </div>
          <div className="nav-soc-text-container">
            <span>Home</span>
          </div>
        </div>
        <div className="nav-soc-container">
          <div className="nav-soc-icon-container">
            <AiFillInfoCircle />
          </div>
          <div className="nav-soc-text-container">
            <span>Home</span>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default NavigationSocial;
