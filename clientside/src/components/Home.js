import React from "react";
import Button from "react-bootstrap/Button";
import "./Home.css";
import Resume from "../assets/docs/RResume.pdf";
/* eslint-disable jsx-a11y/alt-text */
import "../css/index.css";
import Contact from "../components/Contact";
import Techstack from "../components/techStack";
import Playlist from "./Playlist";
import Experience from "../components/Experience";
import down_arrow from '../images/ic_down_arrow.png';

class Home extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      showPopup: false,
    };
  }
  

  componentDidMount() {
  }
  setShowMore = (showMore) => {
    this.setState({ showMore });
  };
  setShowLess = () => {
    this.setState({ showMore: false });
  };
  showPopup = () => {
    this.setState((prevState) => ({
      showPopup: !prevState.showPopup,
    }));
  };
  

  render() {
    const { showMore, showPopup } = this.state;
    // const [showMore, setShowMore] = useState(false);

    return (
      <>
        <div className="container home_container">
          <div className="home_innerdiv">
            <div className="left_div">
              <h2 id="home">
                Welcome to{" "}
                <span style={{ color: "#6c63ff" }}>
                  Sah, Rohit Kumar's Portfolio
                </span>
              </h2>
              <p
                style={{
                  color: "#ffffff",
                  letterSpacing: ".5px",
                  marginTop: 2,
                }}
              >
                {showMore ? (
                  <>
                    Software developer with a strong background in information
                    technology and work experience in start-up ventures. My
                    expertise lies in MERN stack and Flutter application
                    development, where I have experience working with
                    technologies such as React, Node.js, Express.js, and MongoDB
                    to build robust and scalable web applications as well as
                    developed projects under the Flutter framework.
                    Additionally, I possess advanced skills in creating REST
                    APIs and microservices and utilize testing frameworks like
                    Cucumber and Mockito to ensure high-quality code. With a
                    Bachelor of Computer Science HONOURS in Computing, I am
                    well-equipped to tackle even the most complex software
                    development challenges and contribute significantly to
                    project success. To improve my skill sets in security I like
                    to participate in various Bug Bounty programs (Bugcrowd,
                    HackerOne & many others) In Bug Bounty programs, I found
                    many vulnerabilities that come under OWASP top 10. As a
                    hobby love to devloping applications using quantum computing
                    using IBM Qiskit and to share visit my linkedin{" "}
                    <a
                      href="https://www.linkedin.com/in/rohit-k-sah/"
                      className="profile-details-link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {" "}
                      profile{" "}
                    </a>{" "}
                    and for interactions direct contact through{" "}
                    <a href="/Contact" className="profile-details-link">
                      my email.
                    </a>
                  </>
                ) : (
                  <>
                    Software developer with a strong background in information
                    technology and work experience in start-up ventures. My
                    expertise lies in MERN stack and Flutter application
                    development, where I have experience working with
                    technologies such as React, Node.js, Express.js, and MongoDB
                    to build robust and scalable web applications as well as
                    developed projects under the Flutter framework.
                    <span
                      onClick={() => this.setShowMore(true)}
                      style={{ cursor: "pointer", textDecoration: "underline", marginRight: '1.5rem', opacity:'90%' }}
                    >
                      {" "}
                      See More
                    </span>
                  </>
                )}
                {showMore && (
                  <span onClick={() => this.setShowLess()} style={{ cursor: 'pointer', textDecoration: 'none',opacity:'80%', marginRight: '0.5rem' }}> Show Less</span>
                )}
              </p>
              <div className="btn_div mt-4">
                <Button
                  variant="danger"
                  style={{
                    letterSpacing: "1px",
                    border: "none",
                    borderRadius: 4,
                    background: "#2f2d69",
                    marginRight: 24,
                  }}
                  onClick={this.showPopup}
                >
                  View Blogs
                </Button>
                <Button className="hey_button">
                  <a
                    className="btn btn-cv "
                    href={Resume}
                    download="RohitsResume.pdf"
                  >
                    Download CV
                  </a>
                </Button>
              </div>
              {showPopup && <p className="popup-message">Blogs are coming soon</p>}
            </div>
            <div className="right_div">
              <img src="pp.png" alt="" />
            </div>
          </div>
        </div>
        <div className={'dashboard-down-arrow-container'}>
          <a href="#Footer" className={'menu-item-txt'}><img src={down_arrow} className={'dashboard-down-arrow'} alt=" Arrow" /></a>
        </div>
        <Experience />
        <Playlist />
        <Techstack />
        <div id="Footer">
        <Contact />
        
        </div>
        
        
      </>
    );
  }
}

export default Home;

