import React from "react";
import "../components/Techstack.css";
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";
import { TechstackList } from "../utils/TechstackList"
const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <RubberBand>
        <div className="boxdesign text-center">
            <h2 className='text-center mt-2'>Technologies Stack</h2>
          </div> 
          {/* <h2 className="col-12 mt-1 mb-1 text-center text-uppercase">
            Technologies Stack
          </h2> */}
          <hr />
          <p className="pb-2 text-center text-white">
            👉 including programming Languages, frameworks, databses, front-end
            and back-end tools, and APIs
          </p>
        </RubberBand>
        <div className="row">
          {TechstackList.map((tech) => (
            <Fade left>
              <div key={tech._id} className="col-md-3">
                <div className="card m-2 hello">
                  <div className="card-content">
                    <div className="card-body">
                      <div className="media d-flex justify-content-center">
                        <div className="alig-self-center">
                          <tech.icon className="tech-icon" />
                        </div>
                        <div className="media-body">
                          <h5>{tech.name}</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
