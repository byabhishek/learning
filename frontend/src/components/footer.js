import React from 'react';
import '../css/style.css'
import kartikeyOne from "../img/kartikeyLogo1.png"

const Footer = () => {
  return (
    <footer className="mainfooter mt-3">
      <div className="container">
        <div className="row mapSection py-3">
          <div className="col-sm-4">
            <img src={kartikeyOne} alt="" style={{ height: '30vh', width: '15vw' }} className="footerLogo" />
          </div>
          <div className="col-sm-8 px-0">
            <div style={{ width: '100%' }}>
              <iframe className="iFrame"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3592.338824506239!2d83.32228617426436!3d25.792393707338338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDQ3JzMyLjYiTiA4M8KwMTknMjkuNSJF!5e0!3m2!1sen!2sin!4v1691510836886!5m2!1sen!2sin"
                width="100%" height="150px" style={{ border: '1', borderColor: 'black' }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="footerhead mt-3 text-start">
              <h5 className="text-white">Kartikey Welfare Trust</h5>
              <p className="text-white">
                Primary School, Junior High School, Intermediate College, College, PG College, B.Ed., B.P.Ed., BTC,
                C.B.S.E.I.S., S.C.N.C.E. Arrangement and operation of schools and colleges run by RT and 1. Establishment
                of libraries, reading rooms, laboratories, hospitals, orphanages, old age homes, research centers,
                hostels, computer centers, destitute centers, survey centers, community development centers, environment,
                AIDS upliftment centers, literacy and environmental water resources, nomenclature development, associated,
                management operations Can do etc. and when required, can get registered, approved, approved, associated
                with various councils, departments, establishments, institutions, government, etc.
              </p>
            </div>
          </div>
          <div className="quick col-sm-3 d-flex justify-content-center">
            <div className="links text-start">
              <h5 className="mb-3 text-white">Quick Links</h5>
              <ul className="p-0">
                <li><a href="./assets/trustPdf/KartikeyWelfareTrust.pdf" download="kartikeywelfaretrust" className="text-white"><i className="fas fa-arrow-right pe-2 text-white"></i>Download PDF</a></li>
                <li><a href="/#" className="text-white"><i className="fas fa-arrow-right pe-2 text-white"></i>Copyright</a></li>
              </ul>
            </div>
          </div>
          <div className="social col-sm-3 d-flex justify-content-center">
            <div className="links text-start">
              <h5 className="mb-3 text-white">Social Connection</h5>
              <ul className="p-0">
                <li><a href="/#" className="text-white"><i className="fab fa-facebook pe-2 text-white"></i>Facebook</a></li>
                <li><a href="/#" className="text-white"><i className="fab fa-instagram pe-2 text-white"></i>Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright mt-3 py-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 d-flex justify-content-center">
              <p className="m-0 text-black copyText">© KartikeyWelfareTrust 2023 All Right Reserved.</p>
            </div>
            <div className="col-sm-6 d-flex justify-content-center">
              <p className="m-0 text-black copyText">Developed by - <a href="https://fewtech.in/">Fewtech Solutions</a> </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
