import Carousel from 'react-bootstrap/Carousel';
import wide from "../Assests/wide-dine.jpg"
import wide2 from "../Assests/wide2.jpg"
import wide3 from "../Assests/wide3.jpg"
import cover from "../Assests/cover.jpg"

function IndividualIntervalsExample() {
  return (
    <>
    <img src= {cover} data-aos="fade-up" 
    data-aos-delay="500"
    data-aos-duration="50000"
    width="100%" />
    <h1 style={{textAlign:"center", margin:"20px", color:"#cc9c74"}}>Our Collection</h1>
    <Carousel fade>
      <Carousel.Item interval={1000}>
        <img00
          className="d-block w-100"
          src={wide}
          style={{maxHeight:"845px"}}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>JD Elegant Interiors</h3>
          <p>JD Elegant brings 12+ years of experience right to your home or office</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={wide2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>We Give Life To Your Home</h3>
          <p>JD Elegant brings 12+ years of experience right to your home or office</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={wide3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Solution For Joy Living</h3>
          <p>JD Elegant brings 12+ years of experience right to your home or office</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>

  );
}

export default IndividualIntervalsExample;