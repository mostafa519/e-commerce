import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaDownload, 
} from "react-icons/fa";
import "./Fotter.css";
import Footer from "./Footer";
export default function FooterComponent() {
  return (
    <MDBFooter className="text-center text-lg-start text-muted FootEditting mt-3">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Here is your free sample essay on Shopping?</span>
        </div>

        <div>
          <a 
            target="_blank"
            className="me-4 text-reset"
          >
            <FaFacebook style={{ fontSize: "30px" }} />
          </a>
          <a 
            target="_blank"
            className="me-4 text-reset"
          >
            <FaGithub style={{ fontSize: "30px" }} />
          </a>
          <a 
            className="me-4 text-reset"
          >
            <FaGoogle style={{ fontSize: "30px" }} />
          </a>
          <a 
            target="_blank"
            className="me-4 text-reset"
          >
            <FaLinkedin style={{ fontSize: "30px" }} />
          </a>
          <a
            className="me-4 text-reset"
            target="_blank"
            // onClick={() => {
            //   window.print();
            // }}
          >
            <FaDownload style={{ fontSize: "30px" }} />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase  mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Shopping add to beauty
              </h6>
              <p>
              e-commerce, in full electronic commerce, maintaining relationships and conducting business transactions that include selling information, services, and goods by means of computer telecommunications networks.</p>            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase  mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Adds variety to life
              </h6>
              <p>
              E-commerce originated in a standard for the exchange of business documents, such as orders or invoices, between suppliers and their business customers.</p>            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase  mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Mental development
              </h6>
              <p>
              E-commerce has deeply affected everyday life and how business and governments operate. Commerce is conducted in electronic marketplaces (or marketspaces) and in the supply chains working on the Internet-Web. </p>            </MDBCol>
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase  mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Social development
              </h6>
              <p>
              The Web is also an interactive medium of human communication that supplements, and often replaces, traditional media. The hypermedia nature of the Web, with the interlinking of multimedia content available on globally distributed sites, enables creation of new types of media products, often offered free of charge.</p>
</MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <Footer></Footer>
    </MDBFooter>
  );
}
