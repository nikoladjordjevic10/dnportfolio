import React from "react";
import { useSelector } from "react-redux";
import ContactPageStyle from "./style";
import HeaderSmallLogo from "../../layout/HeaderSmallLogo";
import BackToTopButton from "../../components/BackToTopButton/BackToTopButton";

const ContactPage = () => {
  const translation = useSelector((state) => state.translation.messages);

  return (
    <ContactPageStyle>
      <HeaderSmallLogo />
      <div className="contactPageWrapper">
        <div className="contactPageTitle">{translation.contact[1]}</div>
        <div className="contactPageInfo">
          {/* Location */}
          <div className="contactPageLocation">
            <span>
              <img src="images/contact/location.png" alt="location" />
            </span>
            {translation.contactPageLocation[1]}
          </div>

          {/* Phone */}
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

          {/* Skype */}
          <div className="contactPageSkype">
            <span>
              <img src="images/contact/skype.png" alt="skype" />
            </span>
            dusan-neskovic
          </div>

          {/* Email */}
          <div className="contactPageMail">
            <span>
              <img src="images/contact/mail.png" alt="mail" />
            </span>
            design@dusanneskovic.com
          </div>

          {/* Social Networks */}
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
      <BackToTopButton />
    </ContactPageStyle>
  );
};

export default ContactPage;
