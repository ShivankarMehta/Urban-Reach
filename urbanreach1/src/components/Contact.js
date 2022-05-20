import React from 'react'
import Footer from './Footer'
import { Container, Row, Col,Alert, Form,Button} from 'react-bootstrap'
const Contact = () => {
  return (
    <div>
    <Container style={{marginTop:'20px', marginBottom:'20px'}}>
    <h1 style={{fontSize:'60px'}}>Get In Touch</h1>
  <Row>
    <Col style={{backgroundColor:'#ffdf80', height:'300px',paddingTop:'30px', border:'1px solid green'}}><img src="phone (2).png"></img>
    <h3>Get Free Farming Advisory</h3>
    <h1>8271681154</h1></Col>
    <Col style={{ height:'300px',paddingTop:'30px',border:'1px solid black'}}><img src="email (2).png"></img>
    <h3>Feel Free to Contact Us</h3>
    <h1>shivankarmehta60@gmail.com</h1></Col>
  </Row>
  </Container>
  <Alert variant="success">
  <Container style={{marginTop:'20px', marginBottom:'20px'}}>
  <Row>
    <Col style={{border:'1px solid black'}}><img width='200px' style={{marginTop:'20px'}} src="img3.jpg" alt="" srcset="" />
    </Col>
    <Col style={{ height:'200px',paddingTop:'30px',border:'1px solid black'}}><h3>Head Office</h3><p>Urban Reach MIG-33, Lohiyanagar, Kankarbagh, Ara, Bihar-802301</p>
   </Col>
   <Col style={{border:'1px solid black'}}><img  style={{marginTop:'20px'}} width='200px' src="img3.jpg" alt="" srcset="" />
    </Col>
    <Col style={{ height:'200px',paddingTop:'30px',border:'1px solid black'}}><h3>Regional Office</h3><p>Urban Reach MIG-33, Lohiyanagar, Kankarbagh, Ara, Bihar-802301</p>
   </Col>
  </Row>
  </Container>
</Alert>
<Alert style={{backgroundColor:'black', padding:'20px'}}>
<h1 style={{color:'whitesmoke'}}>Drop An Enquiry</h1>
<Container >
      <Form  style={{textAlign:'left', color:'white'}}>
        <Form.Group controlId="form.Name">
            <Form.Label >Name</Form.Label>
            <Form.Control style={{width:"40vw"}} type="text" placeholder="Enter name" />
        </Form.Group>
        <Form.Group controlId="form.Email">
            <Form.Label>Email address</Form.Label>
            <Form.Control style={{width:"40vw"}} type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="form.Textarea">
            <Form.Label>Comment</Form.Label>
            <Form.Control style={{width:"40vw"}} as="textarea" rows={3} />
        </Form.Group>
        <Button style={{marginTop:'10px'}} variant="primary" type="submit">
    Submit
  </Button>
      </Form>
    </Container>
    </Alert>
<Footer/>
    </div>
    
  )
}

export default Contact