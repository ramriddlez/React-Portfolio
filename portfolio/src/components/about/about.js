import "./about.css"
import Duke from '../../img/duke.jpeg'
import Award from '../../img/award.jpeg'

const About = () => {
    return (
        <div className='a'>
            <div className='a-left'>
                <div className='a-card bg'></div>
                <div className='a-card'>
                    <img src={Duke} alt='dukeyy' className='a-img'></img>
                </div>
            </div>

            <div className='a-right'>
                <h1 className='a-title'>About Me </h1>
                <p className='a-sub'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu
                </p>
                <p className='a-desc'>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='a-award'>
                    <img src={Award} alt='' className='a-award-img'></img>
                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>Best UX/UI Design 2022</h4>
                        <p className='a-award-desc'>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About