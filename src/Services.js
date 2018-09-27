import React, { Component } from "react";
import servicesJumbo from "./img/services/services-jumbotron.png";
import servicesJumboMobile from "./img/services/services-mobile-jumbotron.png";
import preConstruction from "./img/services/services-tab-pre-construction-img.png";
import preConstructionMobile from "./img/services/services-tab-mobile-pre-construction-img.png";
import construction from "./img/services/services-tab-construction-img.png";
import constructionMobile from "./img/services/services-tab-mobile-construction-img.png";
import design from "./img/services/services-tab-design-build-img.png";
import designMobile from "./img/services/services-tab-mobile-design-build-img.png";
import sustainability from "./img/services/services-tab-sustainability-img.png";
import sustainabilityMobile from "./img/services/services-tab-mobile-sustainability-img.png";
class Services extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <React.Fragment>
        <section className="home-intro">
          <h1>Services</h1>
          <img src={servicesJumbo} className="jumbotron" alt=""/>
          <img src={servicesJumboMobile} className="mobileImage" alt=""/>
        </section>
        <div className="container services-page">
		      <section className="services-intro">
			      <p>Services include: completely synergize resource taxing relationships via premier niche markets. Professionally
				    cultivate one-to-one customer service with robust ideas. Dynamically innovate resource-leveling customer service
				    for state of the art customer service.</p>
		    </section>
		      <div className="tabs">
            <div className="tab active-tab" data-tab="1">Pre-Construction</div>
            <div className="tab" data-tab="2">Construction</div>
            <div className="tab" data-tab="3">Design Build</div>
            <div className="tab" data-tab="4">Sustainability</div>
		      </div>
		      <div className="tab-items">
            <div className="tab-item active-item" data-tab="1">
              <div className="tab-item-title">Pre-Construction</div>
              <div className="tab-item-content">
                <div className="tab-item-description">
                  <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one
                  customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art
                  customer service.</p>
                  <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively
                  coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer
                  service through sustainable potentialities.</p>
                </div>
                <img src={preConstruction} alt="pre-construction"/>
                <img src={preConstructionMobile} className="mobileImage" alt="pre-construction"/>
              </div>
            </div>
            <div className="tab-item" data-tab="2">
                <div className="tab-item-title">Construction</div>
                <div className="tab-item-content">
                  <div className="tab-item-description">
                    <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one
                    customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art
                    customer service.</p>
                    <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively
                    coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer
                    service through sustainable potentialities.</p>
                  </div>
                  <img src={construction} alt="construction"/>
                  <img src={constructionMobile} className="mobileImage" alt="construction"/>
                </div>
            </div>
            <div className="tab-item" data-tab="3">
              <div className="tab-item-title">Design Build</div>
              <div className="tab-item-content">
                <div className="tab-item-description">
                  <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one
                  customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art
                  customer service.</p>
                  <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively
                  coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer
                  service through sustainable potentialities.</p>
                </div>
                <img src={design} alt="design"/>
                <img src={designMobile} className="mobileImage" alt="design"/>
              </div>
            </div>
            <div className="tab-item" data-tab="4">
              <div className="tab-item-title">Sustainability</div>
              <div className="tab-item-content">
                <div className="tab-item-description">
                  <p>Completely synergize resource taxing relationships via premier niche markets. Professionally cultivate one-to-one
                  customer service with robust ideas. Dynamically innovate resource-leveling customer service for state of the art
                  customer service.</p>
                  <p>Phosfluorescently engage worldwide methodologies with web-enabled technology. Interactively
                  coordinate proactive e-commerce via process-centric "outside the box" thinking. Completely pursue scalable customer
                  service through sustainable potentialities.</p>
                </div>
                <img src={sustainability} alt="Sustainability"/>
                <img src={sustainabilityMobile} className="mobileImage" alt="Sustainability"/>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Services;