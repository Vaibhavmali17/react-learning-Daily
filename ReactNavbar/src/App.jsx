import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";

const App = () => {
  let [page, setPage] = useState("home");

  let changePage = () => {
    if (page === "Home") 
      return <Home/>
    else if (page === "About") 
      return <About/>
    else if (page === "Contact") 
      return <Contact/>
    else if (page === "Services")
       return <Services/>
  }

  return (
    <div>
      <Navbar setPage={setPage} />
      {changePage()}
    </div>
  );
};
export default App;