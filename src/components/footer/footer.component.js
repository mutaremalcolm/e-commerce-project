import { Fragment } from "react";

import { useNavigate } from "react-router-dom";

import { SiGithub } from "react-icons/si";
import {  BsLinkedin } from "react-icons/bs";
import { TiSocialTwitter, TiSocialInstagram } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { TbWorldWww } from "react-icons/tb";

import { 
    FooterContainer, 
    BigFooter,
    ColumnSection1,
    ColumnSection2,
    ColumnSection3,
    ColumnSection4,
    ColumnSectionBig,
    ColumnHeading,
    ColumnEntry, 
    ImageSection, 
    ImageContainer,
    SmallFooter,
} from "./footer.styles";

const Footer = () => {
    const navigate = useNavigate();
    const onNavigateHandler = () => navigate('/about');

  return (
    <Fragment>
        
        <FooterContainer>

            <BigFooter> 

                {/* Column 1  */}
                <ColumnSection1>
                    {/* ABOUT US */}
                    <ColumnHeading>ABOUT US</ColumnHeading>
                    <ColumnEntry onClick={onNavigateHandler}>
                        <ul>
                            <li>Our Story </li>
                        </ul>
                    </ColumnEntry>
                </ColumnSection1>


                {/* Column 2  */}
                <ColumnSection2>
                    {/* CUSTOMER SERVICES */}
                    <ColumnHeading>CUSTOMER SERVICES</ColumnHeading>
                    <ColumnEntry onClick={onNavigateHandler}>
                        <ul>
                            <li>Checkout FAQ </li>
                            <li>Track Your Order </li>
                            <li>Returns & Cancellations </li>
                            <li>Shopping </li>
                            <li>Product Policies </li>
                            <li>Warranty Information </li>
                        </ul>
                    </ColumnEntry>

                </ColumnSection2>

                {/* Column 4  */}
                <ColumnSection4>

                    {/* CONTACT US */}
                    <ColumnHeading>CONTACT US</ColumnHeading>
                    <ColumnEntry>
                        <p><strong>Customer Care:</strong><br/>228-556-445 </p>
                        <br/>
                        <p><strong>Business Number:</strong><br/>555-222-333 </p>
                        <br/>
                        <p><strong>Fax:</strong><br/>555-444-333 </p>
                        <br/>
                        <p><strong>Mango Store HQ</strong></p>
                        <p>888 66th Ave.</p>
                        <p>Earth, 1111</p>
                    </ColumnEntry>

                </ColumnSection4>


                {/* Column 5 BIG */}
                <ColumnSectionBig>
                    {/* CONNECT WITH US */}
                    <ColumnHeading>CONNECT WITH ME </ColumnHeading>

                    <p>Malcoolm Mutare</p>


                    {/* SOCIAL MEDIA */}
                    <ColumnHeading><br/> SOCIAL MEDIA</ColumnHeading>
                    <ImageSection>

                        {/* Github Icon */}
                        <a 
                            href="https://github.com/mutaremalcolm" 
                            target='_blank'
                            >
                            <ImageContainer>
                                <SiGithub />
                            </ImageContainer>
                        </a>
                        
                        {/* LinkedIn Icon */}
                        <a href="https://linkedin.com/in/malcolm-mutare-a234a61aa" target='_blank'>
                            <ImageContainer>
                                <BsLinkedin />
                            </ImageContainer>
                        </a>
                        

                        {/* Instagram Icon */}
                        <a href="https://www.instagram.com/princedevon_za/" target='_blank'>
                            <ImageContainer>
                                <TiSocialInstagram />
                            </ImageContainer>                
                        </a>

                        {/* Twitter Icon */}
                        <a href="https://twitter.com/MalcolmTech" target='_blank'>
                            <ImageContainer>
                                <TiSocialTwitter />
                            </ImageContainer>
                        </a>

                    </ImageSection>


                    <ColumnHeading>PORTFOLIO WEBSITE</ColumnHeading>
                    <ImageSection>

                        {/* Email */}
                        <a 
                            href="" 
                            target='_blank'
                            >
                            <ImageContainer>
                                <TbWorldWww />
                            </ImageContainer>

                        </a>
                    </ImageSection>

                    
                    <ColumnHeading>GET IN TOUCH</ColumnHeading>
                    <ImageSection>

                        {/* Email */}
                        <a 
                            href="mailto:mutarem@gmail.com" 
                            target='_blank'
                            >
                            <ImageContainer>
                                <FiMail />
                            </ImageContainer>

                        </a>

                    </ImageSection>
                </ColumnSectionBig>
            </BigFooter>
            <SmallFooter>
                <h5>2023 Make with Love  Malcolm Mutare.</h5>
            </SmallFooter>

        </FooterContainer>

    </Fragment>
  )
}

export default Footer