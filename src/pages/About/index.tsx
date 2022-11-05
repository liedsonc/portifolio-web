import * as S from "./styles"
import * as data from "../../../lib/data"


export default function About() {





    return (
        <S.About>

            <S.main>
                <S.AboutSection>
                    <S.textWrapper>
                        <S.title>
                            {data.WhoAmI.title}
                        </S.title>
                        <S.content>
                            {data.WhoAmI.content}
                        </S.content>
                    </S.textWrapper>


                </S.AboutSection>
                <S.Banner>
                    <S.Bannerimg src={data.WhoAmI.img} />

                </S.Banner>
            </S.main>

        </S.About >


    )
}
