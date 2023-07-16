import React from 'react'
import { Link } from 'react-router-dom'
import aboutImg from "../Assest/Images/Hero/about.jpg"
import "../Style/about.css"
import MainHeading from './MainHeading'
export const AboutUs = () => {
  return (
    <>
        <section className="about" id='about'>
            <div className="container">
                <MainHeading haeding={"about us"}/>
              <div className="content">
              <div className="left">
                    <img src={aboutImg} alt="" />
                </div>
                <div className="right">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem mollitia in reiciendis enim nam earum delectus aut sit! Ab iusto neque quasi molestias natus assumenda, tenetur facilis temporibus aliquid laborum.</p>
                    <Link className='btn about-btn' to={"/team"}>our team</Link>
                </div>
              </div>
            </div>
        </section>
    </>
  )
}
