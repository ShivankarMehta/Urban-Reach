import img1 from "./pic/ur.jpg";
import img4 from "./pic/sanjeet.jpg";
import img5 from "./pic/bhusan.jpeg";
import img6 from "./pic/av.jpeg";
import ContactUs from "./Contactus";
import { Problem, Solution, Paragraph } from "./Object";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <div>
      <div className="container-fluid">
        <h2 className="text-center mx-5">
          We are pioneers in the tech-driven supply chain space for fresh
          produce
        </h2>
        <img src={img1} className="mx-auto d-block my-4 w-25" />
        <div className="bg-secondary border">
          <h2 className="mt-5 mx-2">Supply Chain and Tech</h2>
          <Paragraph />
        </div>
        <div className="mt-4 row  text-white">
          <div class="card col mx-2 bg-secondary">
            <Problem />
          </div>
          <div class="card col bg-secondary">
            <Solution />
          </div>
        </div>
        <div className=" mt-4 text-center text-white">
          <h3 className="text-dark text-center">Meet our Team</h3>
          <div className="row ">
            <div className="col border border-dark text-center bg-success">
              <img src={img4} className="img-fluid imgc my-2" />
              <h6>IIT Dhanbad</h6>
              <h6>Sanjeet Kumar (CEO & CTO)</h6>
            </div>
            <div className="col mx-2 border border-dark text-center bg-success">
              <img src={img5} className="img-fluid imgc my-2" />
              <h6>3 yrs of corporate experience at IQVIA</h6>
              <h6>Bhushan Chandra Singh (COO)</h6>
            </div>
            <div className="col border border-dark text-center bg-success">
              <img src={img6} className="img-fluid imgc my-2" />
              <h6>BSc at VKSU Bihar</h6>
              <h6>Avinash Kumar (CMO)</h6>
            </div>
          </div>
        </div>
        <ContactUs />
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default About;
