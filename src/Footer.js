import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="footer-container">
                        <div className="contact">
                            <h4>Interested in starting a project?<br/>
                            Let’s talk:</h4>
                            <input type="text" name="email" placeholder="Enter email"/>
                            <p>We'll never share your email with anyone else.</p>
                        </div>
                        <div className="locations">
                            <address>
                                <h4>New York</h4>
                                <p>123 Lane</p>
                                <p>Suite 100</p>
                                <p>Albany, NY 12345</p>
                                <p>202 555 0144</p>
                            </address>
                            <address>
                                <h4>Florida</h4>
                                <p>Ocean Drive</p>
                                <p>Suite 201</p>
                                <p>Orlando, FL 22345</p>
                                <p>502 555 0144</p>
                            </address>
                            <address>
                                <h4>California</h4>
                                <p>Mountain Street</p>
                                <p>Suite 105</p>
                                <p>San Diego, CA 22345</p>
                                <p>702 555 0144</p>
                            </address>
                        </div>
                    </div>
                    <p className="copyRight">Copyright © 2018 Smith and Jones</p>
                </footer>
            </React.Fragment>
        );
    }
}

export default Footer;