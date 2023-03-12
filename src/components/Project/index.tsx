import * as S from "./styles";
import { CSS } from "@stitches/react";
import * as data from "../../../lib/data"
import { useEffect, useState } from "react";


interface Props extends React.HTMLAttributes<HTMLDivElement> {

    title: string,
    description: string,
    cover: string,
    techs: string[],



}

interface TechType {
    id: string,
    title: string,
    img: string,
}



type ProjectProps = Props & S.StyledProject




export const Project = ({
    title,
    description,
    cover,
    techs,
    ...restprops
}: ProjectProps): JSX.Element => {

    const [matchedTechs, setMatchedTechs] = useState<TechType[]>([])



    useEffect(() => {

        function matchTechs(techs: string[]) {
            let tech = []
            for (let i = 0; i < data.Technologies.length; i++) {
                for (let j = 0; j < techs.length; j++) {
                    if (data.Technologies[i].id == techs[j]) {
                        tech.push(data.Technologies[i])
                    }
                }
            }
            setMatchedTechs(tech)
        }
        matchTechs(techs)

    }, [])
    return (

        <S.Project   >
            <S.Wrapper size={{ '@xs': 'd1' }} >


                <S.ProjectImg src={cover} size={{ '@xs': 'd1' }} />
                <S.TechnologiesDiv>
                    <S.Tecnologies size={{ '@xs': 'd1' }} >
                        {
                            matchedTechs.map(tech =>
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

                </S.TechnologiesDiv>
                <S.Details>
                    <S.Title >{title}</S.Title>
                    <S.Description >{description}</S.Description>
                </S.Details>
            </S.Wrapper>

        </S.Project >
    )
}