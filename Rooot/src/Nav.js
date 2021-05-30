import React, { useEffect, useState } from 'react';
import "./Nav.css";
import {useHistory} from "react-router-dom";
function Nav() {
    const [show, handleShow] =useState(false);
    const history = useHistory();
    // navbar transparent  when on top of the page turns black when scrolling  
    const transitionNavBar =  () =>{
        if( window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false); 
        }
    };
    // runs on every render of the component => renders to the dom
    useEffect(() =>{
        //as we scroll it's gonna trigger the navbar
    window.addEventListener("scroll",transitionNavBar);
    return()=> window.addEventListener("scroll",transitionNavBar);
    },[]);
    return ( 
        //only add the nav black if the show variable is true
    <div className={`nav ${show && 'nav_black'}`}>
           <div className="nav_contents">
             <img 
             // I can click on the netflix icon to go to the main page
             onClick={()=> history.push("/")}
             className='nav_logo'
             src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
             alt=""
             />
             <img  
             onClick={()=> history.push("/profile")}
             className='nav_avatar'
             src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
             alt="" 
             />
            
            </div>
    </div>
    );
}

export default Nav;

