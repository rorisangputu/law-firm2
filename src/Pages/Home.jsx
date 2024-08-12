import Hero from "../Components/Hero"
import HomeConsult from "../Components/HomeConsult"
import HomeServices from "../Components/HomeServices"
import Integrity from "../Components/Integrity"
import Standards from "../Components/Standards"

const Home = () => {
    return (
        <div className="">
            <Hero />
            <Integrity />
            <Standards />
            <HomeServices />
            <HomeConsult />
        </div>
    )
}

export default Home