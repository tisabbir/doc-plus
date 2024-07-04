import logoAlt from "../../../assets/logo-footer.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="mt-40 bg-[#020043] p-12">
      <footer className=" max-w-6xl mx-auto text-[#FFFFF5] p-10">
        <img src={logoAlt} />
        <div className="footer mt-6">
        <aside>
          <div>
            <div className="">
              <p>123 Main Street Anytown, USA </p>
              <p>Postal Code: 12345</p>
            </div>

            <div className="mt-6">
              <p>Support: support@oyolloo.com</p>
              <p>(Available : 10:00am to 07:00pm)</p>
            </div>
          </div>
        </aside>
        <nav className="space-y-3">
          <a className="link link-hover">Home</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Success Page</a>
          <a className="link link-hover">Terms And Condition</a>
        </nav>
        <nav className="space-y-3">
          <a className="link link-hover">Services</a>
          <a className="link link-hover">Scheduling</a>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Patient Portal</a>
        </nav>
        <nav className="space-y-4" >

          <a className="link link-hover">Follow Us</a>
         <div className="flex gap-6 mb-12">
            <FaFacebook className="h-7 w-7" /> 
            <FaInstagram className="h-7 w-7" />
            <FaLinkedin className="h-7 w-7" />
            <FaYoutube className="h-7 w-7" />
         </div>
          <a className="link link-hover ">@Docplus 2024</a>
        </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
