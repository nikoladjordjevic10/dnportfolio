import React from "react";
import ContactPageStyle from "./style";
import HeaderSmallLogo from "../../layout/HeaderSmallLogo";

const ContactPage = () => {
  return (
    <ContactPageStyle>
      <HeaderSmallLogo />
      <div className="contactPageWrapper">
        <div className="contactPageTitle">contact</div>
        <div className="contactPageInfo">
          <div className="contactPageLocation">
            <span>
              <img src="images/contact/location.png" alt="location" />
            </span>
            Budva, Crna Gora
          </div>
          <div className="contactPagePhone">
            <span>
              <img src="images/contact/phone.png" alt="phone" />
            </span>
            +382 69 225 776
            <span>
              <img src="images/contact/viber.png" alt="viber" />
            </span>
            <span>
              <img src="images/contact/whatsapp.png" alt="whatsapp" />
            </span>
          </div>
          <div className="contactPageSkype">
            <span>
              <img src="images/contact/skype.png" alt="skype" />
            </span>
            dusan-neskovic
          </div>
          <div className="contactPageMail">
            <span>
              <img src="images/contact/mail.png" alt="mail" />
            </span>
            design@dusanneskovic.com
          </div>
          <div className="contactPageSocials">
            <li>
              <a target="_blank" href="https://linkedin.com/in/dusanneskovic">
                <span>
                  <img src="images/contact/social.png" alt="social" />
                </span>
                linkedin.com/in/dusanneskovic
              </a>
            </li>
            <li>
              <a target="_blank" href="https://behance.net/neskovic">
                <span>
                  <img src="images/contact/social.png" alt="social" />
                </span>
                behance.net/neskovic
              </a>
            </li>
            <li>
              <a target="_blank" href="https://99designs.ca/profiles/dushmanin">
                <span>
                  <img src="images/contact/social.png" alt="social" />
                </span>
                99designs.ca/profiles/dushmanin
              </a>
            </li>
            <li>
              <a target="_blank" href="https://shutterstock.com/dusan.neskovic">
                <span>
                  <img src="images/contact/social.png" alt="social" />
                </span>
                shutterstock.com/dusan.neskovic
              </a>
            </li>
          </div>
          <div className="hlturquoise">
            <img src="images/HLturquoise.png" alt="HLturquoise" />
          </div>
        </div>
      </div>
    </ContactPageStyle>
  );
};

export default ContactPage;
