import "./about.css"
import Duke from '../../img/Duke.jpeg'
import Award from '../../img/award.jpeg'
import Award1 from '../../img/award1.png'

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
                <h1 className='a-title'>About Me 🧑‍💻 </h1>
                <p className='a-sub'>
                    I come from an INTENSIVE data analytical financial background. I have spent the better part of my twenties in capital markets, hedge funds, and entrepreneurship.
                </p>
                <p className='a-desc'>
                    Now I wish to use my analytical, solutions-oriented decision making skills within Software Development. Diving deep into the University of Toronto's coding bootcamp, I am well equipped with the skills needed to bring quality-code to your company.
                </p>
                <p>
                    I enjoy self-improvement via reading, learning and weight training! I love mental growth done by EQ training and meditation! This allows for me to be the captain of my ship and lead my people! I am the father to two dogs; a purebred Golden Retriever named Duke, and Niko, a purebred maltese! &#128062; &#128062; &#128151;
                </p>
                <div className='a-award'>
                    <img src={Award} alt='' className='a-award-img'></img>
                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>Most Appealing Front-End</h4>
                        <p className='a-award-desc'>
                           The University of Toronto had given this award to my team for our Marvel Wiki project. The complete front end was my responsibility and it was the most appealing!
                        </p>
                    </div>
                </div>
                <div className='a-award'>
                    <img src={Award1} alt='' className='a-award-img'></img>
                    <div className='a-award-texts'>
                        <h4 className='a-award-title'>Best Agile Development Award</h4>
                        <p className='a-award-desc'>
                           The University of Toronto had given this award to my team for our amazing agile development team work collaboration. We outperformed several development teams despite having team members across time zones! This led the University to award us for our ability to maintain high level collaboration.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About