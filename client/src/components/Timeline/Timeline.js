import React from "react"
import "./Timeline.css"

const Timeline = () => {
    return (
        <section className="timeline">
            <ul>
              <li>
                <div className="timeline-content">
                <h2 className="date">17<sup>th  </sup>&nbsp;February 2023</h2>
                    <div className="time-box">
                        <h5>Welcome to MES 2023</h5>
                        <p>Launch ~ Director, MIT</p>
                    </div>
                    <div className="time-box">
                        <h5>Design Thinking</h5>
                        <p>Workshop by Vikas Gupta</p>
                        <h7>16:00 - 18:00</h7>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                <h2 className="date">18<sup>th  </sup>&nbsp;February 2023</h2>
                    <div className="time-box">
                        <h5>Entrepreneurial Modelling</h5>
                        <p>Workshop by Sudhinder Parvatikar</p>
                        <h7>14:00 - 16:00</h7>
                    </div>
                    <div className="time-box">
                        <h5>Entrepreneurship Journey</h5>
                        <p>by Arvind Sasikumar</p>
                        <h7>16:30 - 18:00</h7>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                <h2 className="date">19<sup>th  </sup>&nbsp;February 2023</h2>
                    <div className="time-box">
                        <h5>Amplifying Innovation for Growth</h5>
                        <p>Lokesh Venkataswamy</p>
                        <p>Dr. Tojin T. Eapen</p>
                        <h7>17:00 - 19:00</h7>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                <h2 className="date">20<sup>th  </sup>&nbsp;February 2023</h2>
                    <div className="time-box">
                        <h5>EdTech Entrepreneurship</h5>
                        <p>Vinod Aravindakshan</p>
                        <p></p>
                        <h7>16:30 - 18:00</h7>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                <h2 className="date">21<sup>st  </sup>&nbsp;February 2023</h2>
                    <div className="time-box">
                        <h5>Start Ups- building a niche</h5>
                        <p>Jyoti Bharadwaj</p>
                        <h7>15:30 - 17:30</h7>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                <h2 className="date">22<sup>nd  </sup>&nbsp;February 2023</h2>
                    <div className="time-box">
                        <h5>Product Management Bootcamp</h5>
                        <p>Akshay Johri</p>
                        <p>Riya Jain</p>
                        <p>Shobit Saxena</p>
                        <h7>18:00 - 21:00</h7>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                <h2 className="date">23<sup>rd  </sup>&nbsp;February 2023</h2>
                    <div className="time-box">
                        <h5>Keynote Session</h5>
                        <p>Abhinav Arora</p>
                        <h7>16:30 - 18:30</h7>
                    </div>
                    <div className="time-box">
                        <h5>Youth Panel Interaction</h5>
                        <p>Dhruva Goyal</p>
                        <p>Anirudh Arun</p>
                        <p>Rishabh Gupta</p>
                        <h7>18:00 - 19:30</h7>
                    </div>
                    <div className="time-box">
                        <h5>Case Maze</h5>
                        <p></p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">24<sup>th  </sup>&nbsp;February 2023</h2>
                    <div className="time-box">
                        <h5>PitchTank</h5>
                        <p></p>
                    </div>
                    <div className="time-box">
                        <h5>MoneyQuest</h5>
                        <p></p>
                    </div>
                    <div className="time-box">
                        <h5>Panel Discussion</h5>
                        <p>Manish D'Souza</p>
                        <p>Anuj Batra</p>
                        <p>Leenesh Singh</p>
                        <p>Rohan Choukkar</p>
                        <p>Deepak Pareek</p>
                        <p>Smitha Rao</p>
                        <h7>18:00 - 19:30</h7>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                <h2 className="date">25<sup>th  </sup>&nbsp;February 2023</h2>
                    <div className="time-box">
                        <h5>InnnovationMela</h5>
                        <p></p>
                    </div>
                    <div className="time-box">
                        <h5>Fallout</h5>
                        <p></p>
                    </div>
                    <div className="time-box">
                        <h5>MoneyBall</h5>
                        <p></p>
                    </div>
                    <div className="time-box">
                        <h5>Entertainment Night</h5>
                    </div>
                </div>
              </li>
              {/* <li>
                <div className="timeline-content">
                    <h2 className="date">30th March 2022</h2>
                    <div className="time-box">
                        <h5>Presentation</h5>
                        <p>Case Maze Top 5 presentations</p>
                    </div>
                    {/* <div className="time-box">
                        <h5>Movie Night</h5>
                        <p>Movie Night at FC2 Amphitheatre</p>
                    </div> 
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">1st April 2022</h2>
                    <div className="time-box">
                        <h5>2.30pm to 5.45 pm</h5>
                        <p>Panel Discussion on Entrepreneurship Essentials, finance and business</p>
                    </div>
                    <div className="time-box">
                        <h5>5.45pm to 7pm</h5>
                        <p>Pitch Tank</p>
                    </div>
                    <div className="time-box">
                        <h5>7pm to 8.30pm</h5>
                        <p>Networking Arena</p>
                    </div>
                    <div className="time-box">
                        <h5>4.45pm to 8pm</h5>
                        <p>Money Quest</p>
                    </div>
                </div>
              </li>
              <li>
                <div className="timeline-content">
                    <h2 className="date">2nd April 2022</h2>
                    <div className="time-box">
                        <h5>11am</h5>
                        <p>Keynote session</p>
                    </div>
                    <div className="time-box">
                        <h5>10am to 4pm</h5>
                        <p>Startup Fair</p>
                    </div>
                    <div className="time-box">
                        <h5>2.30pm to 4.30pm</h5>
                        <p>Visit to Manipal Incubators</p>
                    </div>
                    <div className="time-box">
                        <h5>7pm</h5>
                        <p>Standup Comedy Show</p>
                    </div>
                </div>
              </li> */}
            </ul>
        </section>
    )
}

export default Timeline