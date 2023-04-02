import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col bg-gray-500 h-[24rem] items-center justify-center gap-5 px-4">
      <p className="text-white mt-[3rem]">CONTACT US</p>
      <p className="text-white text-sm">
        ducimus adipisci distinctio quam necessitatibus? Deleniti at amet
        repellat enim quos distinctio autem corporis ducimus, esse magnam qui
        eius?
      </p>
      <div className="flex gap-4">
        <p>
          <HiOutlineMail className="text-white hover:text-gray-400" size={40} />
        </p>
        <p>
          <FaFacebookF className="text-white hover:text-gray-400" size={40} />
        </p>
        <p>
          <FaTwitter className="text-white hover:text-gray-400" size={40} />
        </p>
        <p>
          <FaYoutube className="text-white hover:text-gray-400" size={40} />
        </p>
      </div>
      <p className="text-sm text-gray-300">
        © Lorem ipsum dolor sit amet consectetur{" "}
      </p>
    </div>
  );
}

export default Footer;
