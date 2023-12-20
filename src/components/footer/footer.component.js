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
    ColumnSection5,
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

                {/* Column 2 */}
                <ColumnSection2>
                    <ColumnHeading>CUSTOMER SERVICES</ColumnHeading>
                    <ColumnEntry onClick={onNavigateHandler}>
                        <ul>
                            <li>Checkout FAQ </li>
                            <li>Returns & Cancellations </li>
                        </ul>
                    </ColumnEntry>
                </ColumnSection2>

                {/* Column 3 */}
                <ColumnSection3>
                    <ColumnHeading>CONTACT US</ColumnHeading>
                    <ColumnEntry>
                        <p><strong>Phone Number:</strong><br/>228-556-445 </p>
                        <br/>
                    </ColumnEntry>

                </ColumnSection3>

                {/* Column 4 */}
                <ColumnSection4>
                {/* <ColumnSectionBig> */}
                    <ColumnHeading>CONNECT WITH ME </ColumnHeading>

                    <p>Malcolm Mutare</p>

                    {/* <br /> */}
                {/* </ColumnSectionBig> */}
                </ColumnSection4>
                <ColumnSection5>
                {/* <ColumnSectionBig> */}
                    <ColumnHeading><br/> SOCIAL MEDIA</ColumnHeading>
                    <ImageSection>
                        <a 
                            href="https://github.com/mutaremalcolm" 
                            target='_blank'
                            >
                            <ImageContainer>
                                <SiGithub />
                            </ImageContainer>
                        </a>
                        <a href="https://linkedin.com/in/malcolm-mutare-a234a61aa" target='_blank'>
                            <ImageContainer>
                                <BsLinkedin />
                            </ImageContainer>
                        </a>
                        <a href="https://www.instagram.com/malcolmfullstack/" target='_blank'>
                            <ImageContainer>
                                <TiSocialInstagram />
                            </ImageContainer>                
                        </a>
                        <a href="https://twitter.com/MalcolmTech" target='_blank'>
                            <ImageContainer>
                                <TiSocialTwitter />
                            </ImageContainer>
                        </a>
                    </ImageSection>
                    {/* </ColumnSectionBig> */}
                    </ColumnSection5>
            </BigFooter>     
        </FooterContainer>
    </Fragment>
  )
}

export default Footer