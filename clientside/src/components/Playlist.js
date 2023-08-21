import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import projectData from '../components/data';
import Spinner from 'react-bootstrap/Spinner';

const Playlist = () => {

  const [spin, setSpin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false)
    }, 1500)
  },[])

  return (
    <>
      {
        spin ? <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
          <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading .....
        </div> : <div className="container">
          <div className="boxdesign text-center">
            <h2 className='text-center mt-2'>Projects</h2>
          </div> 
          <div className="card_div">
            <div className="row d-flex justify-content-around align-items-center">
              {
                projectData.map((el, index) => {
                  return (
                    <>
                      <Card key={index} style={{ width: '22rem', height: "19rem" }} className="mt-4 mb-4 card">
                        <Card.Img variant="top" style={{ width: '100%', height: 'auto', marginTop: 13 }} src={el.imgsrc} />
                        <Card.Body className='d-flex justify-content-center flex-column'>
                          <Card.Title className='text-center'>{el.projectName}</Card.Title>
                          <Button variant="primary" className="hey_button">
                            <a href={el.demo} target="_blank" rel="noreferrer noopener" className='text-decoration-none text-light'>See More</a>
                          </Button>
                        </Card.Body>
                      </Card>
                    </>
                  )
                })
              }

            </div>
          </div>
        </div>
      }


    </>
  )
}

export default Playlist