import React from 'react';
import "./home.css";
import { Link } from "react-router-dom";
import AppsIcon from "@material-ui/icons/Apps";
import {Avatar} from "@material-ui/core";
import Search from "./search";


function Home() {
    return (
        <div className = "home">
            {/* <h1> component in home page</h1> */}
            {/* header in home page */}
            <div className="home_header">
                <div className="home_headerLeft">
                    <Link to="/about"> About </Link>
                    <Link to="/store"> Store </Link>
                </div>
                <div className="home_headerRight">
                    <Link to="/gmail"> Gmail</Link>
                    <Link to="/images"> Images </Link>
                    <AppsIcon></AppsIcon>
                    <Avatar></Avatar>
                </div>
            </div>
            {/* body of home page */}
            <div className="home_body">
                <img src="https://www.google.it/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"  
                />
               
                <div className="home_inputContainer">
                     <Search/> 
                </div>
                
            </div>
        </div>
    )
};

export default Home;
