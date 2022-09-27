import ceo from "./Assests/ceo.jpg"
import ceof from "./Assests/ceof.jpg"
import Head from "./Comp/Head"
import Foot from "./Comp/Foot"


export default function About() {
  return (
    <>
      <Head />
      {/* <h1 style={{ padding: "1% 10%" }}>About Us</h1> */}
      <div className="about">
        <section>
          <txt>
      <h1 style={{ padding: "1% 10%" }}>Founders</h1>

            At Elegant Interiors, we believe that it’s all that and much more. Truly phenomenal spaces are meant to not only appease one’s senses in every way possible, but also allow one to truly be at ease. It goes without saying that every individual has their own set of needs and wants, which is why, we strive to minutely cater to each of these aspects and provide you with fully personalised interior solutions.
            Whether you are looking to design your home, office, commercial space, banquets, resorts, restaurants or any place where you wish to thrive, our creative excellence, design expertise and thoughtful solutions are your best bet. We aren’t the only ones saying it, but also our numerous satisfied customers as well as organisations like The Times of India who recognised our founder, Jyoti Dabral, as one of the Top Leaders of Uttrakhand - 2022.
            Jyoti Dabral and Akhil Dabral co-founded Elegant Interiors in 2009 and have since then touched and enhanced lives through their impeccable work spanning over 4.75 Lakh sqft. across 1350 homes. We strongly believe that living spaces are an extension of their owners and must reflect aspects of their personality so they can truly feel comfortable and thrive in it.
            We operate out of the beautiful and picturesque Doon Valley and have undertaken projects across the length and breadth of the country. You can come witness our unique work and craftsmanship at our Studio & Experience Center in Crossroads Mall, where you can truly feel what it’s like to be amidst gorgeous living spaces that are designed to let you thrive in.
          </txt>
        </section>
        <section>
          <div> <img src={ceof} width="100%" />
            <text>
              <h2>Jyoti Dabral</h2>
              <h5>Founder of JD Interior</h5>
            </text></div>
          <div><img src={ceo} width="100%" />
            <text>
              <h2>Akhil Dabral</h2>
              <h5>Co-Founder of JD Interior</h5>
            </text></div>
        </section>
      </div>
      <Foot />
    </>
  )
}