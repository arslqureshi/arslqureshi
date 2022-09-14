import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";
export default function Nav() {
  return (
    <div className="flex flex-row items-center justify-center w-screen py-10 navbar gap-5">
      <NavLink
        to="/"
        className="font-extrabold border-b-2 border-black pb-1 text-black text-bold cursor-pointer"
      >
        Home
      </NavLink>
      <NavLink
        to="/projects"
        className="font-extrabold border-b-2 border-black pb-1 text-black text-bold cursor-pointer"
      >
        Projects
      </NavLink>
      <h1 className="font-extrabold	border-b-2 border-black pb-1 text-black text-bold cursor-pointer">
        About
      </h1>
      <h1 className="font-extrabold	border-b-2 border-black pb-1 text-black text-bold cursor-pointer">
        Contact
      </h1>
    </div>
  );
}
