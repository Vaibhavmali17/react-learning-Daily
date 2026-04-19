
import React from "react";

const Navbar = ({ setPage }) => {
   let  nav = {
      backgroundColor: "gray",
      padding: "20px",
    }

   let  btn = {
      color: "white",
      backgroundColor: "red",
      fontSize: "16px",
    }

  return (
    <nav style={nav}>
      <button style={btn} onClick={() => setPage("Home")}>Home</button>
      <button style={btn} onClick={() => setPage("About")}>about</button>
      <button style={btn} onClick={() => setPage("Services")}>services</button>
      <button style={btn} onClick={() => setPage("Contact")}>contact</button>

    </nav>
  );
};

export default Navbar;