import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../assets/notfound.jfif"; 
import Navbarr from './Navbarr'

const NotFound = () => {
                                  
  return (
                      <>
                      <Navbarr/>
                    
                     
    <div style={styles.container}>
    </div>
    </>
  );

};

const styles = {
  container: {
    width: "100vw",
    height: "100vh",
    backgroundImage: `url(${notFoundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "relative",
  },

};

export default NotFound;
