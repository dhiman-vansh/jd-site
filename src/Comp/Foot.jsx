import React from 'react';
import "./Comp.css"
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <div className='footdiv'>
    <MDBFooter className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block' style={{color:"black"}}>
          <span>Get connected with us on social networks:</span>
        </div>

        <div style={{color:"black"}}>
          <a href='https://www.facebook.com/jdelegantinteriors/' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a> */}
          <a href='https://www.google.com/search?client=opera-gx&q=jd%20interiors&sourceid=opera&ie=UTF-8&oe=UTF-8&hs=GYd&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsZqduR3MdOKucZqSy4BcHVnzXChBg:1662553848119&rflfq=1&num=10&rldimm=17897028522918420754&lqi=CgxqZCBpbnRlcmlvcnNI1PLqwdm4gIAIWhYQABABGAAYASIMamQgaW50ZXJpb3JzkgERaW50ZXJpb3JfZGVzaWduZXI&ved=2ahUKEwiwxKXc14L6AhULSmwGHS-sAaoQvS56BAgXEAE&sa=X&rlst=f#rlfi=hd:;si:17897028522918420754,l,CgxqZCBpbnRlcmlvcnNI1PLqwdm4gIAIWhYQABABGAAYASIMamQgaW50ZXJpb3JzkgERaW50ZXJpb3JfZGVzaWduZXI;mv:[[32.6711021,89.3895221],[8.4432678,72.2562176]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='https://www.instagram.com/jdelegantinteriors/' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          {/* <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a> */}
        </div>
      </section>

      <section className='' style={{color:"black"}}>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>JD Interiors
              </h6>
              <p>
                We provide all kinds of home decoration services to make your
                home look elegant.
              </p>
            </div>

            {/* <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Angular
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Vue
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Laravel
                </a>
              </p>
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </div> */}

            <div className='col-md-4 col-lg-3 col-xl-4 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> 1/14 Sahranpur Road, Dehradun, Uttarakhand
              </p>
              <p>
                <i className='fas fa-envelope me-4'></i>
                joytidabral.elegantinteriors@gmail.com
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +91 9557007770
              </p>
              <p>
                <i className='fas fa-phone me-3'></i> +91 8191970012
              </p>
              {/* <p>
                <i className='fas fa-print me-3'></i> + 01 234 567 89
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://zebrians.in'>
          Zebrians.com
        </a>
      </div>
    </MDBFooter>
    </div>

  );
}