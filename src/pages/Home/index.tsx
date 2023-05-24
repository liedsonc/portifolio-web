import * as S from "./styles";
import { CSS } from "@stitches/react";
import "./scrollanimation.css";
import { Navbar } from '../../components/Navbar';
import { ReactNode, useState, useRef, useEffect } from 'react';
import * as data from "../../../lib/data"
import mainImg from "/assets/liedsoncT 1.svg"
import menu from "/assets/menu.png"
import grayeclipse from "/assets/Eclipse-gray.svg"
import Hamburger from 'hamburger-react'
import { MenuBar } from "../../components/Menu";




function Home() {


    const [text, setText] = useState("")
    const [fullText, setFullText] = useState("Hi!\nI'm Liedson Correia")
    const [index, setIndex] = useState(0)
    const [text1, setText1] = useState("")
    const [fullText1, setFullText1] = useState("Front-end Web and Mobile Developer")
    const [index1, setIndex1] = useState(0)
    const [isOpen, setOpen] = useState(false)





    console.log(fullText1)
    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 100)
        }



    }, [index])

    useEffect(() => {
        if (index1 < fullText1.length) {
            setTimeout(() => {
                setText1(text1 + fullText1[index1])
                setIndex1(index1 + 1)
            }, 100)
        }



    }, [index1])

    function handleClick() {
        setOpen(!isOpen)

    }

    function handleMenuOptionClick() {
        setOpen(false)
    }

    let technologies = data.Technologies.filter(tech => tech.id !== "8")


    return (
        <S.Home id='Home'>


            <S.HomeSection>

                <Navbar >
                    <S.LogoDiv href='/' >
                        <S.NavbarImg size={{ '@sm': 'd1' }} src={data.logo.img} />
                    </S.LogoDiv>
                    <S.Links size={{ '@xs': 'd1' }}>
                        <S.Link style={{ textDecoration: 'none', color: '$primary' }} href='/'>
                            <S.TextLink>Home</S.TextLink>
                        </S.Link>
                        <S.Link href="#About">
                            <S.TextLink>About</S.TextLink>
                        </S.Link>
                        <S.Link href='#Projects'>
                            <S.TextLink>Projects</S.TextLink>
                        </S.Link>

                    </S.Links>
                    <S.LogoDiv
                    >
                        <a href='mailto:liedsonpt@outlook.pt'>
                            <S.callToActionNav size={{ '@xs': 'xs' }}>
                                Contact
                            </S.callToActionNav>
                        </a>
                        <S.HamburgerDiv size={{ '@xs': 'xs' }}>
                            <Hamburger
                                size={25}
                                direction="right"
                                color={'#1DB954'}
                                rounded
                                toggled={isOpen}
                                toggle={handleClick}

                            />

                        </S.HamburgerDiv >
                    </S.LogoDiv>
                </Navbar>
                <S.MenuBarDiv>

                    {isOpen ? <MenuBar handleClick={handleMenuOptionClick} /> : <></>}
                </S.MenuBarDiv>
                <S.main size={{ '@sm': 'd1' }}>

                    <S.imgDiv size={{ '@sm': 'd1' }} >
                        <S.img size={{ '@sm': 'd1' }} src={mainImg} alt="" />




                    </S.imgDiv>


                    <S.greeterDiv size={{ '@sm': 'd1' }}>
                        <div>
                            <S.mainTitle size={{ '@xs': 'd1' }}>{text}</S.mainTitle>
                            <S.mainSubtitle size={{ '@xs': 'd1' }}>{text1}</S.mainSubtitle>
                            <S.Tecnologies size={{ '@xs': 'd1' }} >
                                {


                                    technologies.map(tech =>
                                        <S.Tech
                                            title={tech.title}
                                            size={{ '@xs': 'd1' }}
                                            key={tech.id}
                                            src={tech.img}
                                            alt={tech.title}

                                        />
                                    )
                                }


                            </S.Tecnologies >
                        </div>
                        <S.Buttons size={{ '@xs': 'd1' }}>
                            <a href='mailto:liedsonpt@outlook.pt'>
                                <S.callToAction size={{ '@xs': 'd1' }}>
                                    Contact Me!
                                </S.callToAction>
                            </a>
                            <a href='#About' >
                                <S.aboutButton size={{ '@xs': 'd1' }}>
                                    About Me!
                                </S.aboutButton>
                            </a>
                        </S.Buttons>

                    </S.greeterDiv>


                </S.main>
                <a href="#About">
                    <div className="mouse_scroll">

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
            </S.HomeSection>
        </S.Home >
    );
}

export default Home;