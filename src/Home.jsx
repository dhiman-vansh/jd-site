import Head from "./Comp/Head"
import Slide from "./Comp/Slide"
import Service from "./Comp/Service"
import Foot from "./Comp/Foot"
import Utube from "./Comp/Utube"

export default function Home() {
    return(
        <div style={{overflow:"hidden", backgroundImage:"linear-gradient(to bottom,peachpuff,white)"}}>
        <Head />
        <Slide />
        <Service />
        <Utube />
        <Foot />
        </div>
    )
}