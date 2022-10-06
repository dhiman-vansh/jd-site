import Head from "./Comp/Head";
import Foot from "./Comp/Foot";

export default function Contact() {
	return (
		<>
			<Head />
			<div className="contact">
				<h2>Location</h2>
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.6416836713092!2d78.05160135126664!3d30.33270828168907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929cbe6ca5d89%3A0xf85f049e7b962112!2sJD%20Elegant%20Interiors!5e0!3m2!1sen!2sin!4v1665040051112!5m2!1sen!2sin"
					width="100%" height="450" ></iframe>
				<div>
					<section style={{width:"30%"}}>
						<h4>Address</h4>
						<li>138 Atlantis Ln Kingsport Illinois 121164</li>
						<h4>Call us</h4>
						<li>800-2345-6789</li>
						<li>800-2345-6789</li>
						<h4>Mail</h4>
						<li>mail@demolink.org</li>
					</section>
					<section style={{width:"70%"}}>
						<h4>Let us Reach You</h4>
						<input placeholder="Name" name="name" ></input>
						<input placeholder="Mail" name="mail"></input>
						<input placeholder="Phone" name="phone"></input>
						<br></br>
						<input id="big" placeholder="Message" name="message"></input>
						<br></br>
						<button>Send</button>
					</section>
				</div>
			</div>
			<Foot />

		</>
	)
}