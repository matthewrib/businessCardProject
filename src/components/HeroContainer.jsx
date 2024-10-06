import selfie from "../assets/me.jpg"
import '../App.css'

export default function HeroContainer () {
    return (
        <div className="heroContainer">
            <img id="selfie" src={selfie} />
            <div className="heroInfo">
                <h1>Matthew Bersalona</h1>
                <h3>Frontend Developer</h3>
                <p><a href="https://github.com/matthewrib" target="_blank">github.com/matthewrib</a></p>
                <div className="contactContainer">
                    <button className="contactEmail">Email</button>
                    <a href='https://linkedin.com/in/matthewrib' target='_blank'><button className="contactEmail" id="linkedInBtn">LinkedIn</button></a>
                </div>
            </div>
        </div>
    )
}