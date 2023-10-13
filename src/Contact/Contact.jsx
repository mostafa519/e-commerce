import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import {
  FaGoogle,
  FaPhoneAlt,
  FaHouseUser,
  FaWhatsapp
} from "react-icons/fa";
import "./Contant.css";  
export default function Contact() {
  
  return (
    <MDBFooter className="text-center text-lg-start AboutEditting mt-3">
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <p className="animate-charcter">  Electronic Commerce (E-commerce)
        </p>
        <p>refers to companies and individuals that buy and sell goods and services over the internet. E-commerce operates in different types of market segments and can be conducted over computers, tablets, smartphones, and other smart devices. Nearly every imaginable product and service is available through e-commerce transactions, including books, music, plane tickets, and financial services such as stock investing and online banking. As such, it is considered a very disruptive technology.</p>
      </div> 
       
      <section className="">

        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
          <MDBCol md="6" lg="4" xl="4" className="  mb-4 AboutEdtting2 text-center ">
            <h1 className="animate-charcter  ">       

            History of E-commerce              </h1>
            <p>
            Most of us have shopped online for something at some point, which means we've taken part in e-commerce. So it goes without saying that e-commerce is everywhere. But very few people may know that e-commerce has a history that goes back to before the internet began.
            </p>
              </MDBCol>
            <MDBCol md="6" lg="4" xl="4" className="  mb-4 AboutEdtting1 text-center">
            <h1 className="animate-charcter ">       

            Special Considerations
              </h1>
              <p>E-commerce has changed the way people shop and consume products and services. More people are turning to their computers and smart devices to order goods, which can easily be delivered to their homes.</p>
            </MDBCol>
      
            
            
            <MDBCol md="6" lg="4" xl="4" className="  mb-4 AboutEdtting2 text-center">
            <h1 className="animate-charcter text-center">       

               Contact Us
              </h1>
              <p>
                <p>   <a href="" className="linkEditting2 ">
                <FaHouseUser className="me-2"/> E-Commerce
               
                </a>
                </p>
                <p>
                  <a href="" className="linkEditting2">
                  <FaGoogle className="me-3"/> E-Commerce.com 
                  </a>
                </p>
                <p>
                  <a href="tel:011-580-790-51" target="_blank" className="linkEditting2">
                  <FaPhoneAlt className="me-3"/> 01158079051
                  </a>
                </p>
                <p>
                <a href="https://wa.me/01158079051" target="_blank" className="linkEditting2">
                <FaWhatsapp className="me-3"/> 01158079051 
                </a>
                </p>              </p>
            </MDBCol>
         
 




          </MDBRow>
        </MDBContainer>
      </section> 
    </MDBFooter>
  );
}

