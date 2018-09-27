import React, { Component } from "react";
import jumbo from "./img/home/home-jumbotron.png";
import mobileJumbo from "./img/home/home-mobile-jumbotron.png";
import homeImg1 from "./img/home/home-img-1.png";
import homeImg1Mobile from "./img/home/home-mobile-img-1.png";
import homeImg2 from "./img/home/home-img-2.png";
import homeImg2Mobile from "./img/home/home-mobile-img-2.png";
import bannerImg1 from "./img/home/home-villas-img.png";
import bannerImg1Mobile from "./img/home/home-mobile-villas-img.png";
import bannerImg2 from "./img/home/home-outskirts-img.png";
import bannerImg2Mobile from "./img/home/home-mobile-outskirts-img.png";
import bannerImg3 from "./img/home/home-the-blocks-img.png";
import bannerImg3Mobile from "./img/home/home-mobile-the-blocks-img.png";
class Home extends Component {
    render() {
        return (
            <React.Fragment>
            <section className="home-intro home-jumbo">
                <h1 className="home-jumbo-h1">
                    Integrity,<br/>
                    Excellence,<br/>
                    Progress.
                </h1>
                <img src={jumbo} className="jumbotron" alt=""/>
                <img src={mobileJumbo} className="mobileImage" alt=""/>
            </section>
            <section className="company-info">
                <div className="information">
                    <div className="text-info">
                        <h2>Smith & Jones Architects</h2>
                        <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer
                            sed. Duo etiam laboramus dissentiet in, nec no errem</p>
                        <div className="button">Learn More</div>
                    </div>
                    <img src={homeImg1} alt="Blueprint draft"/>
                    <img src={homeImg1Mobile} className="mobileImage" alt=""/>
                </div>
                <div className="information inverse">
                    <div className="text-info">
                        <h2>Futuristic Designs</h2>
                        <p>Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer
                            sed. Duo etiam laboramus dissentiet in, nec no errem </p>
                        <div className="button">View Designs</div>
                    </div>
                    <img src={homeImg2} alt="Buildings"/>
                    <img src={homeImg2Mobile} className="mobileImage" alt=""/>
                </div>
            </section>
            <section className="projects">
                <h2>Recent Projects</h2>
                <div className="project-image">
                    <img src={bannerImg1} alt="villas"/>
                    <img src={bannerImg1Mobile} className="mobileImage" alt="villas"/>
                    <h3 className="right-squares">THE VILLAS</h3>
                </div>
                <div className="project-text">
                    <p>The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day,
                    going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud
                    solution.</p>
                    <p className="bottom-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                    Override the digital
                    divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close
                    the loop on focusing solely on the bottom line.</p>
		        </div>  
                {/* ------------------------- */}
                <div className="project-image">
                    <img src={bannerImg2} alt="outskirts"/>
                    <img src={bannerImg2Mobile} className="mobileImage" alt="outskirts"/>
                    <h3 className="left-squares middle">OUTSKIRTS</h3>
                </div>
                <div className="project-text">
                    <p>The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of
                        the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a
                        streamlined cloud solution.</p>
                    <p className="bottom-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                        Override the digital
                        divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close
                        the loop on focusing solely on the bottom line.</p>
                </div>
                {/* -------------------------------------------------- */}
                <div className="project-image">
                    <img src={bannerImg3} alt="blocks"/>
                    <img src={bannerImg3Mobile} className="mobileImage" alt="blocks"/>
                    <h3 className="left-squares middle">OUTSKIRTS</h3>
                </div>
                <div className="project-text">
                    <p>The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of
                        the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a
                        streamlined cloud solution.</p>
                    <p className="bottom-text">Capitalize on low hanging fruit to identify a ballpark value added activity to beta test.
                        Override the digital
                        divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close
                        the loop on focusing solely on the bottom line.</p>
                </div>
            </section>
            </React.Fragment>
        );
    }
}

export default Home;