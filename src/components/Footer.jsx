import '../App.css'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'

export default function Footer () {
    return (
        <footer>
            <a href='https://facebook.com' target='_blank'><img className="socials" src={facebook}></img></a>
            <a href='https://x.com' target='_blank'><img className='socials' src={twitter}></img></a>
        </footer>
    )
}