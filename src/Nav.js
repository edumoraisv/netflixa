import React, { useEffect, useState } from 'react'
import "./Nav.css"
import {BrowserRouter,Route,Link} from "react-router-dom"
import Home from './components/Home'
import FAQ from './components/FAQ'
function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
       window.addEventListener("scroll",()=>{
           if(window.scrollY > 100){
               handleShow(true)
           }
           else
            handleShow(false);

            return ()=>{
                window.removeEventListener("scroll")
            }
       }) 
    }, [])
    


    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
                alt="netflix-logo"
                >
            </img>
            
            <BrowserRouter>
            <div className="nav_links">
                <Link className="nav_link" to="/home">HOME</Link>
                <Link className="nav_link" to="/faq">ABOUT</Link>
                <Link className="nav_link" to="/faq">CONTACT</Link>
                <Link className="nav_link" to="/faq">FAQ</Link>
            </div>
            <div className="nav_links_right">
                <Link className="nav_link" to="/faq">PROFILE</Link>
            </div>
                <Route path="/home" component={Home}/>
                <Route path="/faq" component={FAQ}/>
                <Route />
                <Route />
            
            </BrowserRouter>
            
        </div>
    )
}

export default Nav
