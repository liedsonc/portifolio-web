import * as S from "./styles"
import * as data from "../../../lib/data"


export default function About() {





    return (
        <S.About>

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
