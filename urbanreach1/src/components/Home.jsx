import React from 'react'
import Footer from './Footer'
import { Container, Row, Col, Alert,Card,CardGroup,Carousel} from 'react-bootstrap'
import './Home.css'
const Home = () => {
  const style3={
    height:"600px",
    margin:"10px",
    paddingTop:100,

  }
  const style6={
    marginTop:"20px",
    textAlign:"left",
    padding:"30px"
  }
  const style7={
    padding:"40px",
    width:"100%",
    paddingLeft:"150px"
  }
  return (
    <div clasName="divcon" >
    <Container >
  <Row>
    <Col className='top'><h2 >Revolutionizing the Fresh <br/> Produce Supply Chain<br></br></h2>
    
    <h6>Driven by cutting edge technology, <br></br>we source fresh produce from farmers and sell to businesses, across India <br></br></h6>
    <button type="button" class=" ajay btn btn-success btn-lg">Learn More</button>
    </Col>
    <Col style={style3}><img src="download1.png" alt="logo"/></Col>

  </Row>
</Container>


<Alert variant="light">
  <Alert.Heading></Alert.Heading>
  <div style={style7}>
  <Row >
    <Col style={style6}><h1 style={{fontSize:"40px"}}>About Us</h1>
    <h3 style={{fontSize:"20px"}}>Urban Reach is India's largest Fresh Produce Supply Chain Company. We are pioneers in solving one of the toughest supply chain problems of the world by leveraging innovative technology. We source fresh produce from farmers and deliver them to businesses within 12 hours.</h3>
    <br></br><button type="button" class="btn btn-success btn-lg">Know More</button>
    </Col >
    <Col style={style6} >
    <h1 style={{textAlign:'left', color:'yellowgreen', fontSize:'60px'}}>Urban Reach</h1>
    <img src="download1.png" alt="logo" width="200px" /></Col>
  </Row>
  </div>
</Alert>
<Alert variant="success" style={{height:'400px', paddingTop:'120px', marginBottom:'40px'}}>
  <Alert.Heading style={{fontSize:'40px',marginBottom:'40px'}}>The Future of <span style={{color:'#13bf80'}}>Fresh Produce</span> supply chain is Urban Reach</Alert.Heading>
  <button  style={{padding:'10px 20px'}} type="button" class="btn btn-success btn-lg">Join The Revolution</button>
</Alert>
 

  <div class="farmersay">
  <h1 >Creating New Opportunities For Everyone</h1>
  <p style={{marginBottom:'20px'}}>We are the first platform enabling increased benefits for farmers, retailers, and consumers.</p>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <h3>customer</h3>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>

              </Card.Body>
            </Card>
          </div>

          <div class="col-lg-4 col-md-6">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <h3>customer</h3>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <div class="col-lg-4 col-md-6">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <h3>customer</h3>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>

      </div>


<Alert variant="success" style={{textAlign:'left', marginBottom:'40px', padding:'40px'}}>
  <Alert.Heading style={{paddingLeft:'120px', paddingRight:'40px', fontSize:'40px'}}>Life at Urban Reach</Alert.Heading>
  <p style={{paddingLeft:'120px', paddingRight:'40px', fontSize:'20px'}}>
  Be a part of an organisation of brilliant thinkers who work towards something new, every day.
  </p>
  <Container>
  <Row >
    <Col style={{margin:'10px'}}><img src="img3.jpg" alt="img3" width="200px"/></Col>
    <Col style={{margin:'10px'}}><img src="img4.jpg" alt="img4" width="200px"/></Col>
  </Row>
</Container>
</Alert>
<Alert style={{textAlign:'Center', marginBottom:'40px', padding:'40px', backgroundColor:'#e6e6e6'}}>
  <Alert.Heading style={{fontSize:'40px', color:'black'}}>Investors who put their faith in us</Alert.Heading>
</Alert>



  <div style={{textAlign:'left',marginBottom:'20px'}}>
  <h1 style={{fontSize:'30px', color:'black', paddingLeft:'100px', paddingRight:'100px'}}>What are People <br/> Saying about Urban Reach</h1>
  </div>


  {/* <!-- Testimonials --> */}
<div className='testimonials'>
  <Carousel fade>
  <Carousel.Item>
  <h5>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h5>
          <img class="testimonial-image" src="Ajay.png" alt="dog-profile"/>
          <em>Ajay,Piro(Bhojpur)</em>
  </Carousel.Item>
  <Carousel.Item>
  <h5>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h5>
          <img class="testimonial-image" src="Ajay.png" alt="dog-profile"/>
          <em>Ajay,Piro(Bhojpur)</em>
  </Carousel.Item>
  <Carousel.Item>
  <h5>I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof.</h5>
          <img class="testimonial-image" src="Ajay.png" alt="dog-profile"/>
          <em>Ajay,Piro(Bhojpur)</em>
  </Carousel.Item>
</Carousel>
</div>


<Container style={{marginBottom:'20px', marginTop:'20px',textAlign:'center'}}>
  <Row>
    <Col className='bottom'><h3>Trust Us With Your Harvest</h3><p>Get fair prices for your produce from Urban Reach</p></Col>
    <Col className='bottom'><h3>Direct From Farms to Your Business</h3><p>Get fair prices for your produce from Urban Reach</p></Col>
  </Row>
</Container>

<Footer/>
    </div>
  )
}
export default Home