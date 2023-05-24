import React from 'react';
import "./scrollanimationfooter.css";
import { FiPhone, FiMail, FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import * as S from "./styles";
import { CSS } from "@stitches/react";
const Footer = () => {
    return (
        <S.Wrapper id="Contacts" size={{ '@xs': 'd1' }}>
            <S.Footer
                size={{ '@xs': 'd1' }}>
                <S.Main
                    size={{ '@xs': 'd1' }}
                >
                    <div>
                        <S.Title>Contact</S.Title>

                        <S.Ul>

                            <S.Li>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginTop: '3px'
                                    }}
                                    href="mailto:liedsonpt@outlook.pt"
                                    target='_blank'
                                >
                                    <FiMail size={28} />
                                </a>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginLeft: '20px'
                                    }}
                                    href="mailto:liedsonpt@outlook.pt"
                                    target='_blank'
                                >
                                    liedsonpt@outlook.pt
                                </a>
                            </S.Li>

                            <S.Li style={{ marginTop: '15px' }}>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginTop: '3px'
                                    }}
                                    href="tel:+2389586427"
                                    target='_blank'
                                >
                                    <FiPhone size={28} />
                                </a>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginLeft: '20px'
                                    }}
                                    href="tel:+2389586427"
                                >
                                    +238 958 64 27
                                </a>
                            </S.Li>

                        </S.Ul>

                    </div>

                    <div>
                        <S.Title>Social Media</S.Title>

                        <S.Ul>

                            <S.Li>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginTop: '3px'
                                    }}
                                    href="https://www.linkedin.com/in/liedsoncorreia/"
                                    target='_blank'
                                >
                                    <FiLinkedin size={28} />
                                </a>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginLeft: '20px'
                                    }}
                                    href="https://www.linkedin.com/in/liedsoncorreia/"
                                    target='_blank'
                                >
                                    Liedson Correia
                                </a>
                            </S.Li>

                            <S.Li style={{ marginTop: '15px' }}>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginTop: '3px'
                                    }}
                                    href="https://www.linkedin.com/in/liedsoncorreia/"
                                    target='_blank'
                                >
                                    <FiInstagram size={28} />
                                </a>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginLeft: '20px'
                                    }}
                                    href="https://www.instagram.com/correia_miles/"
                                    target='_blank'
                                >
                                    @correia_miles
                                </a>
                            </S.Li>

                            <S.Li style={{ marginTop: '15px' }}>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginTop: '3px'
                                    }}
                                    href="https://www.github.com/liedsonc"
                                    target='_blank'
                                >
                                    <FiGithub size={28} />
                                </a>
                                <a
                                    style={{
                                        textDecoration: 'none',
                                        color: '#fff',
                                        marginLeft: '20px'
                                    }}
                                    href="https://www.github.com/liedsonc"
                                    target='_blank'
                                >
                                    liedsonc
                                </a>
                            </S.Li>

                        </S.Ul>

                    </div>
                </S.Main>
                <S.Scroll>
                    <S.ScrollWrapper size={{ "@xs": "d1" }}>
                        <a href="#Home">
                            <div className="mouse_scroll1">

                                <div className="mouse">
                                    <div className="wheel"></div>
                                </div>
                                <div>
                                    <span className="m_scroll_arrows unu"></span>
                                    <span className="m_scroll_arrows doi"></span>
                                    <span className="m_scroll_arrows trei"></span>
                                </div>
                            </div>
                        </a>
                    </S.ScrollWrapper>
                </S.Scroll>
            </S.Footer>

        </S.Wrapper >
    );
}

export default Footer;