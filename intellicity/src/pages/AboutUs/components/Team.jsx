import React from 'react'
import member from"../../../Assest/Images/profile.jpg"
import "../style/team.css"
import {Link} from "react-router-dom"
import {AiFillLinkedin} from "react-icons/ai"
import {FaSquareGithub} from "react-icons/fa6"
function Team() {
  return (
    <section className="team-section">
        <div className="container">
            <div className="cards">
                <div className="member-card">
                    <div className="member-img">
                        <img src={member} alt="" />
                    </div>
                    <div className="content">
                        <h3>Ali muhammed</h3>
                        <span className='role'>Front-end</span>
                        <div className="links">
                            <Link to={"#"}><AiFillLinkedin/></Link>
                            <Link to={"#"}><FaSquareGithub/></Link>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <div className="member-img">
                        <img src={member} alt="" />
                    </div>
                    <div className="content">
                        <h3>Ali muhammed</h3>
                        <span className='role'>Front-end</span>
                        <div className="links">
                            <Link to={"#"}><AiFillLinkedin/></Link>
                            <Link to={"#"}><FaSquareGithub/></Link>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <div className="member-img">
                        <img src={member} alt="" />
                    </div>
                    <div className="content">
                        <h3>Ali muhammed</h3>
                        <span className='role'>Front-end</span>
                        <div className="links">
                            <Link to={"#"}><AiFillLinkedin/></Link>
                            <Link to={"#"}><FaSquareGithub/></Link>
                        </div>
                    </div>
                </div>
                <div className="member-card">
                    <div className="member-img">
                        <img src={member} alt="" />
                    </div>
                    <div className="content">
                        <h3>Ali muhammed</h3>
                        <span className='role'>Front-end</span>
                        <div className="links">
                            <Link to={"#"}><AiFillLinkedin/></Link>
                            <Link to={"#"}><FaSquareGithub/></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team