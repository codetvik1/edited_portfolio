// import logo from "../assets/kevinRushLogo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { DiCssdeck } from "react-icons/di";
// import { Link } from "react-scroll";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className = "flex flex-shrink-0 items-center">
          <DiCssdeck size ="2.5rem"/><span className = "m-0.5 flex item-center  text-2xl">Portfolio</span>
          {/* <h2 className = "m-8 flex item-center justify-center gap-4 text-2xl">Portfolio</h2> */}
            {/* <img className="mx-2 w-10" src = {logo} alt = "logo" /> */}
        </div>

        <div className="m-8 flex item-center justify-center gap-8 text-xl">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>


        <div className = "m-8 flex item-center justify-center gap-4 text-2xl">
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
            <FaInstagram />
        </div>
    </nav>
  );
};

export default Navbar;