import { useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  function handleClick() {
    setNav(!nav);
  }

  const socialLinks = [
    {
      id: 1,
      title: "LinkedIn",
      color: "bg-blue-600",
      child: <FaLinkedin size={30} />,
      href: "https://www.linkedin.com/in/yash-r-mehta/",
      download: false,
    },
    {
      id: 2,
      title: "Github",
      color: "bg-[#333333]",
      child: <FaGithub size={30} />,
      href: "https://github.com/yashmehta001",
      download: false,
    },
    {
      id: 3,
      title: "Email",
      color: "bg-[#6fc2b0]",
      child: <HiOutlineMail size={30} />,
      href: "mailto:yashmehta766@gmail.com",
      download: false,
    },
    {
      id: 4,
      title: "Resume",
      color: "bg-[#565f69]",
      child: <BsFillPersonLinesFill size={30} />,
      href: "/resume.pdf",
      download: false,
    },
  ];

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <Link to="home" smooth={true} duration={500}>
          <h2 className="text-5xl font-bold font-signature cursor-pointer ">
            {" "}
            Yash{" "}
          </h2>
        </Link>
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
      {/* Hamburger */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      {nav && (
        <ul
          className={
            "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
      {/* social Icons */}
      <div className="hidden lg:fixed lg:flex flex-col top-[35%] left-0">
        <ul>
          {socialLinks.map(({ id, title, child, color, href, download }) => (
            <li
              key={id}
              className={`w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 ${color}`}
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-gray-300"
                target="_blank"
                rel="noreferrer"
                download={download}
              >
                {title}
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
