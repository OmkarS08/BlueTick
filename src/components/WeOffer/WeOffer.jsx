import React from 'react'
import './WeOffer.css'
import Card from 'react-bootstrap/Card';
const WeOffer = () => {
  return (
    <>
      <div id='WhatweOffer' className='What-we-offer'>
        <h2>What We Offer</h2>
        <div className='card-content'>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Explore AI Opportunities for Your Enterprise</Card.Title>
              <Card.Text>
                Unlock the potential of generative AI by identifying tailored opportunities for integration within
                your organization, ensuring a strategic and efficient approach to AI implementation.   Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Design AI Trust Layer</Card.Title>
              <Card.Text>
                Prioritize data security and build trust in generative AI applications with a dedicated trust
                layer, emphasizing privacy-focused solutions that safeguard both organizational and
                customer data.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Scalability-Focused Solutions</Card.Title>
              <Card.Text>
                Streamline and optimize business processes with comprehensive workflow automation,
                ensuring seamless integration of AI technologies from inception to execution for increased
                efficiency and productivity.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>End to end Workflow automation</Card.Title>
              <Card.Text>
                Implement cutting-edge, scalable generative AI solutions that not only meet current
                organizational needs but also adapt and grow with the evolving demands of your enterprise,
                providing a future-proof approach to AI integration.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default WeOffer