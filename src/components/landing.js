import John from '../assets/20200715_112939.jpg'
import logo from '../logo.svg'
import './landing.css'
import { Link } from 'react-router-dom';


const Team = () => {
    return(
    <div className= "Team">
        <div className="Bio">
            <h1><strong>John Ratana</strong></h1>
            <img src={John} alt="That's ME!" height="200px"/>
            <div>Full-Stack Software Engineer</div>
            <p>Ruby, Rails, Javascript, React</p>
            <p id="bio">John keeps himself busy with rock climbing, coding, cooking, and raising two children (the 4C's).  Based out of Philadelphia, he is always
                looking for new opportunities to learn, grow, and work.  You can find him <a href="https://www.linkedin.com/in/john-ratana-7aa24063/">here (linkedIn)</a>.
                Check out his work <a href="https://www.linkedin.com/in/john-ratana-7aa24063/">here (Github)</a>
            </p>
        </div>
            <h1>Techs</h1>
            <div className= "Techs">
                <div className= "Techbox">
                    <img src={logo} alt="That's ME!" height="200px" width= "200px"/>
                    <p>React</p>
                </div>
                <div className= "Techbox">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/1200px-Ruby_On_Rails_Logo.svg.png' alt="That's ME!" height="200px" width= "200px"/>
                    <p>Ruby On Rails</p>
                </div>    
            </div>
    </div>
    )
}

const About = () => {
    return (
        <div className = "About">
            <p>
                Chat-N-Draw is a drawing game.  Join the room and log-in to chat.  Choose a drawer.  The drawer submits an answer on the top right input, then start drawing.
                Everyone in the room can see and guess the image in the chat.  First person to guess correctly wins (winner declared on the top right).
                Click <Link to="/play">Here</Link> to play.
            </p>
        </div>
    )
}

const Landing = () => {
    return(   
      <div className= "Landing"> 
            <About/>
            <Team/>
      </div>

    )
  }
  
  export default Landing