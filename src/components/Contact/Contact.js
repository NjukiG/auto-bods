import React from "react"
import "./Contact.css"

export default function Contact(){
    return (
        <div class="container">
        <div class="form">
          <div class="contact-info">
            <h3 class="title">CONTACT US</h3>
            <p class="text">Let's get in touch</p>
            <div class="info">
              <div class="information">
              
                <a href="//#">
                  <i class="fab fa-street"></i>
                </a>
                <p>Roysambu, Lumumba Drive</p>
              </div>
              <div class="information">
                
                <p>autobods_gym@gmail.com</p>
              </div>
              <div class="information">
              
                <p>+254 729694227</p>
              </div>
            </div>
            <div class="social-media">
              <p>Connect with us :
                autobods_gym.com
              </p>
            </div>
          </div>
          </div>
        </div>
    )
}