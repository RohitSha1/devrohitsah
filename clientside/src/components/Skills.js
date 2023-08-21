
import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner } from 'react-bootstrap';
import "./Skills.css";

const Skills = () => {
  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false);
    }, 1500);
  }, []);

  const projectData = [
    // Add your project data here
    {
      imgsrc: 'project1.jpg',
      projectName: 'Project 1',
      demo: 'https://www.example.com/project1'
    },
    {
      imgsrc: 'project2.jpg',
      projectName: 'Project 2',
      demo: 'https://www.example.com/project2'
    },
    {
        imgsrc: 'project2.jpg',
        projectName: 'Project 2',
        demo: 'https://www.example.com/project2'
      },
      {
        imgsrc: 'project2.jpg',
        projectName: 'Project 2',
        demo: 'https://www.example.com/project2'
      },
      {
        imgsrc: 'project2.jpg',
        projectName: 'Project 2',
        demo: 'https://www.example.com/project2'
      },
      {
        imgsrc: 'project2.jpg',
        projectName: 'Project 2',
        demo: 'https://www.example.com/project2'
      },
    // ...more project data
  ];

  return (
    <div className="container">
      {spin ? (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: '90vh' }}
        >
          <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading .....
        </div>
      ) : (
        <div className="boxdesign text-center">
          <h2 className="text-center mt-2">Projects</h2>
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-center">
              {projectData.map((el, index) => (
                <Card className="project-card"
                  key={index} style={{ width: '20rem', height: '100%', margin: '10px' }}
                >
                  <div className="card-image">
                    <Card.Img variant="top" src={el.imgsrc} />
                  </div>
                  <Card.Body className="d-flex flex-column justify-content-between">
                    <div>
                      <Card.Title className="text-center">
                        {el.projectName}
                      </Card.Title>
                    </div>
                    <Button variant="primary">
                      <a
                        href={el.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-decoration-none text-light"
                      >
                        Live Demo
                      </a>
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Skills;
