import * as S from "./styles";
import { CSS } from "@stitches/react";
import { Navbar } from '../../components/Navbar';
import { ReactNode, useState } from 'react';
import * as data from "../../../lib/data"
import mainImg from "/assets/liedsoncT 1.svg"
import menu from "/assets/menu.png"
import grayeclipse from "/assets/Eclipse-gray.svg"

function Home() {

    let technologies = data.Technologies

    return (
        <S.Home>


            <S.HomeSection>
                <Navbar >
                    <S.NavbarImg size={{ '@sm': 'd1' }} src={data.logo.img} />

                </Navbar>
                <S.main size={{ '@sm': 'd1' }}>

                    <S.imgDiv size={{ '@sm': 'd1' }} >
                        <S.img size={{ '@sm': 'd1' }} src={mainImg} alt="" />




                    </S.imgDiv>


                    <S.greeterDiv size={{ '@sm': 'd1' }}>
                        <div>
                            <S.mainTitle size={{ '@xs': 'd1' }}>Hi!<br />I'm Liedson Correia</S.mainTitle>
                            <S.mainSubtitle size={{ '@xs': 'd1' }}>Front-end Developer</S.mainSubtitle>
                            <S.Tecnologies size={{ '@xs': 'd1' }} >
                                {
                                    technologies.map(tech =>
                                        <S.Tech
                                            size={{ '@xs': 'd1' }}
                                            key={tech.id}
                                            src={tech.img}
                                            alt={tech.title} />
                                    )
                                }


                            </S.Tecnologies >
                        </div>
                        <S.Buttons size={{ '@xs': 'd1' }}>
                            <S.callToAction size={{ '@xs': 'd1' }}>
                                Contact Me!
                            </S.callToAction>
                            <S.aboutButton size={{ '@xs': 'd1' }}>
                                About Me!
                            </S.aboutButton>
                        </S.Buttons>

                    </S.greeterDiv>


                </S.main>

            </S.HomeSection>
        </S.Home >
    );
}

export default Home;