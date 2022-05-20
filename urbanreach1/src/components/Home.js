import React from 'react'
import Footer from './Footer'
import { Container, Row, Col, Alert,Card,CardGroup,Carousel} from 'react-bootstrap'
const Home = () => {
  const style3={
    backgroundColor:"lightgreen",
    height:"600px",
    margin:"10px",
    marginTop:"80px",
    paddingTop:100,

  }
  const style4={
    backgroundColor:"lightgreen",
    height:"600px",
    margin:"10px",
    marginTop:"80px",
    paddingTop:200,
    padding:"40px",
    textAlign:"left",
    color:"green",
   
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
    <Col style={style4}><h1 style={{fontSize:"40px"}}>Revolutionizing the Fresh Produce Supply Chain</h1>
    <h3 style={{fontSize:"20px"}}>Driven by cutting edge technology, we source fresh produce from farmers and sell to businesses, across India <br></br></h3>
   <br></br><br></br><button type="button" class="btn btn-success btn-lg">Learn More</button>
    </Col>
    <Col style={style3}><img src="download1.png" alt="logo" width="400px" /></Col>
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
  <h1 style={{fontSize:'40px',marginBottom:'10px'}}>Creating New Opportunities For Everyone</h1>
  <p>We are the first platform enabling increased benefits for farmers, retailers, and consumers.</p>
  <CardGroup style={{marginBottom:'40px'}}>
  <Card style={{alignItems:'center', paddingTop:'30px', height:'500px',margin:'10px', backgroundColor:'lightgreen',}} >
    <Card.Img style={{width:'100px'}} variant="top" src="creatingopportunities_img1_hover.png" />
    <Card.Body>
      <Card.Title><h1>Benefits For Farmers</h1></Card.Title>
      <Card.Text>
       <ul style={{listStyleType:'dot', textAlign:'left', fontSize:'20px'}}>
         <li> 20% more Revenue</li>
         <li> 20% more Revenue</li>
         <li> 20% more Revenue</li>
         <li> 20% more Revenue</li>
       </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{alignItems:'center', paddingTop:'30px', height:'500px',margin:'10px' , backgroundColor:'lightgreen'}}>
    <Card.Img style={{width:'100px'}} variant="top" src="creatingopportunities_img1_hover.png" />
    <Card.Body>
      <Card.Title><h1>Benefits For Farmers</h1></Card.Title>
      <Card.Text>
       <ul style={{listStyleType:'dot', textAlign:'left', fontSize:'20px',}}>
         <li> 20% more Revenue</li>
         <li> 20% more Revenue</li>
         <li> 20% more Revenue</li>
         <li> 20% more Revenue</li>
       </ul>
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{alignItems:'center', paddingTop:'30px', height:'500px',margin:'10px', backgroundColor:'lightgreen'}}>
    <Card.Img style={{width:'100px'}} variant="top" src="creatingopportunities_img1_hover.png" />
    <Card.Body>
      <Card.Title><h1>Benefits For Farmers</h1></Card.Title>
      <Card.Text>
       <ul style={{listStyleType:'dot', textAlign:'left', fontSize:'20px'}}>
         <li> 20% more Revenue</li>
         <li> 20% more Revenue</li>
         <li> 20% more Revenue</li>
         <li> 20% more Revenue</li>
       </ul>
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
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
  <Carousel style={{backgroundColor:'#d9d9d9', height:'400px', margin:'0 100px', padding:'50px 100px', border:'2px solid green'}}>
  <Carousel.Item interval={1000}>
    <h1>Shivankar Mehta</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quasi doloribus corporis dignissimos, reiciendis fugiat, voluptatem voluptate culpa iure vel, saepe id exercitationem tempore. Nesciunt officia cumque est doloribus saepe.</p>
  </Carousel.Item>
  <Carousel.Item interval={500}>
  <h1>Shivankar Mehta</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quasi doloribus corporis dignissimos, reiciendis fugiat, voluptatem voluptate culpa iure vel, saepe id exercitationem tempore. Nesciunt officia cumque est doloribus saepe.</p>
  </Carousel.Item>
  <Carousel.Item>
  <h1>Shivankar Mehta</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quasi doloribus corporis dignissimos, reiciendis fugiat, voluptatem voluptate culpa iure vel, saepe id exercitationem tempore. Nesciunt officia cumque est doloribus saepe.</p>
  </Carousel.Item>
</Carousel>
</div>
<Container style={{marginBottom:'20px', textAlign:'center'}}>
  <Row>
    <Col style={{backgroundColor:' #009900', margin:'10px', height:'150px',paddingTop:'30px', borderRadius:'5px'}}><h3>Trust Us With Your Harvest</h3><p>Get fair prices for your produce from Urban Reach</p></Col>
    <Col style={{backgroundColor:' #009900', margin:'10px', height:'150px',paddingTop:'30px', borderRadius:'5px'}}><h3>Direct From Farms to Your Business</h3><p>Get fair prices for your produce from Urban Reach</p></Col>
  </Row>
</Container>
<Footer/>
    </div>
  )
}
export default Home