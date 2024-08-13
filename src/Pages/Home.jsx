import Form from "../Components/Form"
import Hero from "../Components/Hero"
import HomeConsult from "../Components/HomeConsult"
import HomeServices from "../Components/HomeServices"
import Integrity from "../Components/Integrity"
import Laywers from "../Components/Laywers"
import Standards from "../Components/Standards"
import Trust from "../Components/Trust"

const Home = () => {
    return (
        <div className="">
            <Hero />
            <Integrity />
            <Standards />
            <HomeServices />
            <HomeConsult />
            <Trust />
            <Laywers />
            <Form />
        </div>
    )
}

export default Home