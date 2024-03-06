import React from 'react'
import './Blog.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Blog = () => {
  return (
    <>
      <div id="Blog" className='blog'>
        <h2>Blogs</h2>
        <div className='blog-card-content'>
          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>Speaking SQL:</Card.Title>
              <Card.Text>
                Turning Natural Language into Database Dialogues
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data
                management, SQL databases have long stood as the backbone, housing vast quantities of
                invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to
                extract insights from these data repositories, the quest for more intuitive and accessible
                querying methods gains momentum. The emerging solution? Leveraging Large Language
                Models (LLMs) to interact with SQL databases using natural language.</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-di
      alogues.html"><img src='link.png' alt='attachemt-icon' /></Card.Link>
            </Card.Body>
          </Card>


          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>Beyond Basics:</Card.Title>
              <Card.Text>
                Elevating AI with Reinforcement Learning from Human
                Feedback
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the
                success of ChatGPT, marking a significant advancement in AI's ability to understand and
                engage in human language. This method, vital for fine-tuning language models, addresses
                the complexities and nuances of communication, ensuring AI interactions are natural and
                intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding
                models to avoid replicating inappropriate language or tones.</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-
      from-human-feedback.html"><img src='link.png' alt='attachemt-icon' /></Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>The Fine Art of Tuning: </Card.Title>
              <Card.Text>
                Parameter-Efficient Fine-Tuning
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Welcome to our exploration of the fascinating world of large language models! As many of
                you are aware, the scale of these models has skyrocketed recently. Take, for instance,
                GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these
                behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning
                requires adjusting countless parameters, which is time-consuming, and the GPU demands
                are nothing short of immense.</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.htm"><img src='link.png'  alt='attachemt-icon'/></Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: '30rem' }}>
            <Card.Body>
              <Card.Title>PrivAIcy Matters:</Card.Title>
              <Card.Text>
                Balancing Privacy, Price, and Performance
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial
                intelligence algorithms with the magic to conjure fresh content based on available data, this
                technology has unassumingly become the new frontier for a plethora of industries, including
                tech, banking, and media. And, no surprises here, the technological world has openly
                embraced it in myriad innovative ways.</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performan
      ce-in-in-house-llm-deployments.html"><img src='link.png' alt='attachemt-icon' /></Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Blog