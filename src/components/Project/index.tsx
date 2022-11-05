import * as S from "./styles";
import { CSS } from "@stitches/react";
import * as data from "../../../lib/data"
import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {

    title: string,
    description: string,
    cover: string

}

type ProjectProps = Props & S.StyledProject

export const Project = ({
    title,
    description,
    cover,
    ...restprops
}: ProjectProps): JSX.Element => {
    return (
        <S.Project>



            <S.ProjectImg src={cover} />

            <S.Details >
                <S.Title>{title}</S.Title>
                <S.Description>{description}</S.Description>
            </S.Details>



        </S.Project >
    )
}