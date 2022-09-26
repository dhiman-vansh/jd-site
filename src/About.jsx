import ceo from "./Assests/ceo.jpg"
import ceof from "./Assests/ceof.jpg"
import Head from "./Comp/Head"
import Foot from "./Comp/Foot"


export default function About() {
  return (
    <>
    <Head />
    <h1 style={{padding:"1% 10%"}}>About Us</h1>
      <div className="about">
        <section>
          <txt>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum debitis adipisci, nemo voluptas fugit possimus accusantium, dignissimos placeat quos eaque odio. Quam reprehenderit quia deleniti illo corrupti expedita? Libero, eius!
          </txt>
        </section>
        <section>
          <fig> <img src={ceo} width="60%"  /></fig>
          <fig><img src={ceof} width="60%"  /></fig>
        </section>
      </div>
      <Foot />
    </>
  )
}