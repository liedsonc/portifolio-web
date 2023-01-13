import * as S from "./styles"
import * as data from "../../../lib/data"
import React, { useState, useEffect } from 'react'

export default function About() {

    // const [text, setText] = useState("")
    // const [fullText, setFullText] = useState(data.WhoAmI.title)
    // const [index, setIndex] = useState(0)
    // const [text1, setText1] = useState("")
    // const [fullText1, setFullText1] = useState(data.WhoAmI.content)
    // const [index1, setIndex1] = useState(0)

    // console.log(text)
    // useEffect(() => {
    //     if (index < fullText.length) {
    //         setTimeout(() => {
    //             setText(text + fullText[index])
    //             setIndex(index + 1)
    //         }, 40)
    //     }


    // }, [index])
    // useEffect(() => {
    //     if (index1 < fullText1.length) {
    //         setTimeout(() => {
    //             setText1(text1 + fullText1[index1])
    //             setIndex1(index1 + 1)
    //         }, 40)
    //     }
    // }, [index1])



    return (
        <S.About id='About'>

            <S.main size={{ '@xs': 'd1' }}>
                <S.AboutSection size={{ '@xs': 'd1' }}>
                    <S.textWrapper size={{ '@xs': 'd1' }}>
                        <S.titleWrapper size={{ '@xs': 'd1' }}>
                            <S.title size={{ '@xs': 'd1' }}>
                                {data.WhoAmI.title}
                            </S.title>
                        </S.titleWrapper>
                        <S.content size={{ '@xs': 'd1' }}>
                            {data.WhoAmI.content}
                        </S.content>
                    </S.textWrapper>


                </S.AboutSection>
                <S.BannerWrapper size={{ '@xs': 'd1' }}>
                    <S.Banner >
                        <S.Bannerimg src={data.WhoAmI.img} />

                    </S.Banner>
                </S.BannerWrapper>
            </S.main>

        </S.About >


    )
}
