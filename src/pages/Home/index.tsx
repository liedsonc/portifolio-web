import * as S from "./styles";
import { CSS } from "@stitches/react";
import { Navbar } from '../../components/Navbar';
import { ReactNode, useState } from 'react';
import * as data from "../../../lib/data"
import mainImg from "../../../public/assets/liedsoncT 1.svg"


function Home() {
    let i = 0;
    let technologies = data.Technologies
    console.log("Technologies")


    return (
        <S.Home>
            <Navbar >
                <img src={data.logo.img} />
                <h1>Fim</h1>
            </Navbar>

            <section>
                <S.main>

                    <S.imgDiv >
                        <S.img src={mainImg} alt="" />
                    </S.imgDiv>


                    <S.greeterDiv>
                        <S.mainTitle>Hi!<br />I'm Liedson Correia</S.mainTitle>
                        <S.mainSubtitle>Front-end Developer</S.mainSubtitle>
                        <S.Tecnologies>
                            {
                                data.Technologies.map(tech =>
                                    <img src={tech.img} alt={tech.title} />
                                )
                            }

                        </S.Tecnologies>
                        <S.Buttons>
                            <S.callToAction>
                                Contact Me!
                            </S.callToAction>
                            <S.aboutButton>
                                About Me!
                            </S.aboutButton>
                        </S.Buttons>
                    </S.greeterDiv>
                </S.main>
            </section>


        </S.Home >
    );
}

export default Home;