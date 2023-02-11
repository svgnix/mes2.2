import React from "react";
import "./Landing.css";
import mes from "./../../assets/LogoFinal.png";
import { Helmet } from 'react-helmet';
import Timeline from "../../components/Timeline/Timeline";
import Navbar from "../../components/Navbar/Navbar";

const Landing = () => {
    return (
        <div className="page-wrapper">
            <Helmet>
                <title>MES 2022 | E-Cell MIT</title>
                <meta name='description' content='Manipal Entrepreneurship Summit 2022 organised by E-Cell MIT' />
                <meta name='theme-color' content='#EFEFEF' />
                <meta
                  name='keywords'
                  content='mes, entrepreneurship, summit, ecell, manipal institute of technology, startup, pitch tank, shark tank'
                />
                <meta name='url' content='http://mes.ecellmit.com/' />
                <meta name='coverage' content='Worldwide' />
                <meta name='target' content='all' />
                <meta name='HandheldFriendly' content='True' />
                <link rel="canonical" href="http://mes.ecellmit.com/" />
                {/* OG meta tags */}
                <meta property="og:type" content="webpage" />
                <meta
                  property="og:title"
                  content="MES 2022 | E-Cell MIT"
                />
                <meta
                  property="og:description"
                  content="Manipal Entrepreneurship Summit 2022 organised by E-Cell MIT"
                />
                <meta property="og:image" content='' />
                <meta property="og:url" content='http://mes.ecellmit.com/' />
                <meta
                  property="og:site_name"
                  content="MES 2022 | E-Cell MIT"
                />
                <meta
                  name='twitter:title'
                  content='Manipal Entrepreneurship Summit 2022 organised by E-Cell MIT'
                />
                <meta
                  name="twitter:description"
                  content="Manipal Entrepreneurship Summit 2022 organised by E-Cell MIT"
                />
            </Helmet>
            <div className="gradient-wrapper">
            <div className="content-wrapper">
                <Navbar />
                <div className="description">
                    <div className="mes-logo">
                        <img src={mes} alt="MES Logo"/>
                    </div>
                    <p>
                        MAHE's flagship entrepreneurship event, Manipal Entrepreneurship Summit, is a landmark two-week event from 17th to 25th February. In this 
                        6th edition, we plan on bringing ideas, zeal and passion like never seen before. Here, a mere thought to solve a problem delivers solutions 
                        that will not just revolutionise the world but encourage others to put their thinking caps on and work outside their comfort zones. 
                        Creativity, innovation, and thriving for excellence are the primary carriers of this year's summit. Through MES, E-Cell MIT plans to 
                        instill a culture of economic innovation at MAHE and establish industry relations.
                    </p>
                </div>
            </div>
            </div>
            <h3 className="timeline-head">MES Timeline</h3>
            <Timeline />
        </div>
    )
}

export default Landing