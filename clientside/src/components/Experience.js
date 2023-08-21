import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import experienceData from '../components/expData';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {

  const [spin, setSpin] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setSpin(false)
    }, 1500)
  },[]);
  
  const handleToggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {spin ? (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '90vh' }}>
          <Spinner animation='border' variant='danger' /> &nbsp;&nbsp; Loading .....
        </div>
      ) : (
        <div className={`container ${isExpanded ? 'expanded' : ''}`}>
          <div className='boxdesign text-center' onClick={handleToggleExpand}>
            <h2 className='text-center mt-2' onClick={handleToggleExpand} style={{ cursor: 'pointer' }}>
              Education & Work  
              <FontAwesomeIcon icon={isExpanded ? faChevronUp : faChevronDown} className={`arrow-icon ${isExpanded ? 'expanded' : ''}`} style={{ marginLeft: '1.0rem', transition: 'transform 0.3s ease-in-out' }}/>
            </h2>
          </div>
          {isExpanded && (
            <div className='card_div'>
              <div className='row d-flex justify-content-around align-items-center'>
                {experienceData.map((el, index) => {
                  return (
                    <Card
                      key={index}
                      style={{ width: '40rem', height: '25rem', cursor: 'pointer'}}
                      className={`mt-4 mb-4 card ${isExpanded ? 'expanded' : ''}`}
                    >
                      <Card.Title className='text-right'style={{ fontWeight: 'bold', marginTop: '20px' }}>{el.projectName}</Card.Title>
                      <Card.Text className='text-right'style={{ fontWeight: 'bold', marginBottom:'1px' }}>{el.exText}</Card.Text>
                      <Card.Text className='text-right'>{el.exText1}</Card.Text>
                      <Card.Text className='text-right'style={{ fontWeight: 'bold', marginBottom:'1px' }}>{el.expText}</Card.Text>
                      <Card.Text className='text-right'>{el.expText1}</Card.Text>
                      <div className="d-flex justify-content-center">
                      <Card.Img
                        variant='top'
                        style={{ width: '33%', height: '105px', marginTop: 13, borderRadius: '5px',marginRight: 50 }}
                        src={el.imgsrc}
                      />
                      <Card.Img
                        variant='top'
                        style={{ width: '35%', height: '100px', marginTop: 13, }}
                        src={el.imgsrc1}
                      />
                      </div>
                      <Card.Body className='d-flex justify-content-center flex-column'></Card.Body>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Experience;



//   return (
//     <>
//       {
//         spin ? <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
//           <Spinner animation="border" variant="danger" /> &nbsp;&nbsp; Loading .....
//         </div> : <div className="container">
//           <div className="boxdesign text-center">
//             <h2 className='text-center mt-2'>Education & Work</h2>
//           </div> 
//           <div className="card_div">
//             <div className="row d-flex justify-content-around align-items-center">
//               {
//                 experienceData.map((el, index) => {
//                   return (
//                     <>
//                       <Card style={{ width: '40rem', height: "29rem" }} className="mt-4 mb-4 card">
//                         <Card.Title className='text-right'>{el.projectName}</Card.Title>
//                         <Card.Text className='text-right'>{el.exText}</Card.Text>
//                         <Card.Img variant="top" style={{ width: '100%', height: 'auto', marginTop: 13 }} src={el.imgsrc} />
//                         <Card.Body className='d-flex justify-content-center flex-column'>
//                         </Card.Body>
//                       </Card>
//                     </>
//                   )
//                 })
//               }

//             </div>
//           </div>
//         </div>
//       }


//     </>
//   )
// }

// export default Experience