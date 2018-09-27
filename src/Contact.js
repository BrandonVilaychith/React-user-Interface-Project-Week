import React, { Component } from "react";
import contactJumbo from "./img/contact/contact-jumbotron.png";
import contactJumboMobile from "./img/contact/contact-mobile-jumbotron.png";
class Contact extends Component {
  render() {
    return (
      <React.Fragment>
      	<section className="home-intro">
          <h1>Contact Us</h1>
          <img src={contactJumbo} className="jumbotron" alt="services jumbo"/>
          <img src={contactJumboMobile} className="mobileImage" alt="services jumbo"/>
        </section>
        <div className="container contact-page">
        <form>
          <h2>Get In Touch</h2>
          <label for="email">Email Address</label>
          <input type="text" id="email" placeholder="Enter email" className="input"/>
          <p>We'll never share your email with anyone else.</p>
          <label for="buildings">How many buildings do you need planned?</label>
          <select id="buildings" class="input">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <label for="overview">Provide a brief overview of your project needs:</label>
          <textarea name="overview" id="overview" cols="30" rows="10"></textarea>
          <div class="radio">
            <div>
              <input type="radio" id="small-business" value="I am a small business"/>
              <label for="small-business">I am a small business</label>
            </div>
            <div>
              <input type="radio" id="residential" value="I am a residential owner"/>
              <label for="residential">I am a residential owner</label>
            </div>
            <div>
              <input type="radio" id="corporation" value="I am a corporation"/>
              <label for="corporation">I am a corporation</label>
            </div>
          </div>
          <div className="button">Submit</div>
        </form>
        <section class="locations">
          <h2>Where We Work</h2>
          <address>
              <h3>New York</h3>
              <p>123 Lane</p>
              <p>Suite 100</p>
              <p>Albany, NY 12345</p>
              <p>202 555 0144</p>
            </address>
            <address>
              <h3>Florida</h3>
              <p>Ocean Drive</p>
              <p>Suite 201</p>
              <p>Orlando, FL 22345</p>
              <p>502 555 0144</p>
            </address>
            <address>
              <h3>California</h3>
              <p>Mountain Street</p>
              <p>Suite 105</p>
              <p>San Diego, CA 22345</p>
              <p>702 555 0144</p>
            </address>
        </section>
        </div>
      </React.Fragment>
    );
  }
}
 
export default Contact;