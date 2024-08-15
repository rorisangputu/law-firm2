import AboutHero from "../Components/About/AboutHero"
import AccordionAbout from "../Components/About/AccordionAbout"
import CoreValues from "../Components/About/CoreValues"
import MeetTheTeam from "../Components/About/MeetTheTeam"
import Philosophy from "../Components/About/Philosophy"


const TheFirm = () => {
    return (
        <div className="w-full">
            <AboutHero />
            <Philosophy />
            <CoreValues />
            <MeetTheTeam />
        </div>
    )
}

export default TheFirm