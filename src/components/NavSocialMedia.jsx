import { IconContext } from "react-icons";
import { socialMedias } from "../constants";

const NavSocialMediaCard = ({ icon, url }) => {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      className="bg-black rounded-full flex justify-center items-center cursor-pointer"
    >
      <div className="social-media-nav-container">
        <div className="social-media-nav-icon-container">{icon}</div>
      </div>
    </div>
  );
};

const NavSocialMedia = () => {
  return (
    <div className="social-media-nav z-20">
      <IconContext.Provider
        value={{
          size: 40,
          className: "fill-senary",
        }}
      >
        {socialMedias.map((socialMedia, idx) => (
          <NavSocialMediaCard key={`socialMedia-${idx}`} {...socialMedia} />
        ))}
      </IconContext.Provider>
    </div>
  );
};

export default NavSocialMedia;
