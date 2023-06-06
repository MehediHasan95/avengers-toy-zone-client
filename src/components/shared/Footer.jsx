import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/logo.svg";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-russianViolet text-base-100">
      <footer className="footer max-w-8xl mx-auto p-10 ">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Who am I</a>
          <a className="link link-hover">Support</a>
          <a className="link link-hover">Pricing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <a className="link link-hover">+880 1745 09254</a>
          <a className="link link-hover">+880 1750 59552</a>
          <a className="link link-hover">info@avengerstoyzone</a>
          <a className="link link-hover">Dhaka, Bangladesh</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="footer  max-w-8xl mx-auto px-10 py-4 border-t text-base-100 border-base-300">
        <div className="items-center grid-flow-col">
          <img src={logo} alt="logo" className="w-16" />
          <div>
            <p className="text-xl font-lobster">
              <span className="text-white">Avengers</span>
              <span className="text-blueViolet">ToyZone</span>
            </p>
            Copyright © 2023 - All right reserved
          </div>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="text-2xl" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faYoutube} className="text-2xl" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
