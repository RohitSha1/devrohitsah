/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./footer.css"

// import down_arrow from '../images/ic_down_arrow.png';

import facebook from "../images/ic_black_facebook.png";
import twitter from "../images/ic_black_twitter.png";
import linkedin from "../images/ic_black_linkedin.png";
import github from "../images/ic_black_github.png";
import youtube from "../images/ic_black_youtube.png";

import up_arrow from '../images/ic_up_arrow.png';

const Footer = () => {

  const year = new Date().getFullYear()

  return (
    <>
    
      <div className="footer">
      
        <div className="container footer_container d-flex justify-content-around flex-wrap">
          
         
          <div className="first mt-5">
            <h4>Rohit Kumar Sah</h4>
            <p>© {year} Rohit Kumar Sah All rights reserved</p>
            <p className="d-flex">
              <i className="fa-brands fa-instagram" style={{ textDecoration: "none", fontSize: "20px", color: "white" }}></i>
              <i className="fa-brands fa-facebook mx-3"style={{ textDecoration: "none", fontSize: "20px", color: "white" }}></i>
            </p>
          </div>
          
          <div className="second mt-5">
            <h4>Get In Touch</h4>
            <p>
              Get in touch using contact links with you for further information and more.
            </p>
            <p>rohit909sah@gmail.com</p>
            <p>+9779804743591</p>
          </div>
          
          <div className="third mt-5">
            <h4>About
            <a href="#home" className={'up-menu-item-txt'}><img src={up_arrow} className={'dashboard-up-arrow'} /></a>

            </h4>
            <p><a href="/about" style={{ textDecoration: "none", cursor:"pointer", color: "white" }}>Get more details</a></p>
          </div>
          
          {/* <div className="fourth mt-5"> */}
            {/* <h4>Rohit Kumar Sah</h4> */}
            {/* <p>© {year} Rohit Kumar Sah All rights reserved</p> */}
            {/* <p className="d-flex">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook mx-3"></i>
            </p>
          </div> */}
          <div className={"contacts-contents-container"}>
            <div className={"contacts-social-container"}>
              <a
                href="https://www.facebook.com/sahrohitQ/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} className={"contact-social-img"} />
              </a>
              <a
                href="https://www.facebook.com/sahrohitQ/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={twitter} className={"contact-social-img"} />
              </a>
              <a
                href="https://www.facebook.com/sahrohitQ/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} className={"contact-social-img"} />
              </a>
              <a
                href="https://www.facebook.com/sahrohitQ/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} className={"contact-social-img"} />
              </a>
              <a
                href="https://www.facebook.com/sahrohitQ/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={youtube} className={"contact-social-img"} />
              </a>

              {/* <div className={'dashboard-down-arrow-container'}></div> */}
            </div>
            
            <div className={"contacts-footer-div"}>
              
            </div>
            <p className={"text-white text-bold contacts-footer-text"}>
              © 2023 erohitsah. ALL RIGHTS RESERVED.
            </p>
            
          </div>
          
        </div>
        
      </div>
    </>
  );
}

export default Footer