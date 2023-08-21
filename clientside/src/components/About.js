import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>
      <div className="container mb-3 about_container" style={{ minHeight: "100%" }}>
        <div className="container main_container d-flex justify-content-around flex-wrap">
          <div className="left_container mt-5" style={{ width: 640 }}>
            <h2>Meet Rohit Sah</h2>
            <p style={{ color: "#ffffff", letterSpacing: ".5px", marginTop: 2, }} >
                Software developer with a strong background in information
                technology and work experience in start-up ventures. My
                expertise lies in MERN stack and Flutter application
                development, where I have experience working with technologies
                such as React, Node.js, Express.js, and MongoDB to build robust
                and scalable web applications as well as developed projects
                under the Flutter framework. Additionally, I possess advanced
                skills in creating REST APIs and microservices and utilize
                testing frameworks like Cucumber and Mockito to ensure
                high-quality code. With a Bachelor of Computer Science HONOURS
                in Computing, I am well-equipped to tackle even the most complex
                software development challenges and contribute significantly to
                project success. To improve my skill sets in security I like to
                participate in various Bug Bounty programs (Bugcrowd, HackerOne
                & many others) In Bug Bounty programs, I found many
                vulnerabilities that come under OWASP top 10. As a hobby love to
                devloping applications using quantum computing using IBM Qiskit
                and to share visit my linkedin{" "}
                <a href="https://www.linkedin.com/in/rohit-k-sah/" className={"profile-details-link"} target="_blank" rel="noreferrer"> profile </a>{" "}
                and for interactions direct contact through{" "}
                <a href="/Contact" className={"profile-details-link"} >my email.</a>
              </p>
            {/* <p style={{ color: "#666", letterSpacing: ".5px", marginTop: 2, lineHeight: 2 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reiciendis tenetur ex laudantium nam molestiae eius totam assumenda? Ipsa distinctio eum fugit cum adipisci error? Maiores dignissimos amet eaque culpa, recusandae cumque in qui praesentium autem, vero fuga! Doloremque, deserunt.</p> */}
          </div>
          <div className="right_container m-4">
            <img src="meetrohit.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default About