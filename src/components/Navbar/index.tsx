import * as S from "./styles";
import { CSS } from "@stitches/react";
import * as data from "../../../lib/data"
import { ReactNode } from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode,
    css?: CSS
}


type Bar = Props & S.StyledNavbar

export const Navbar = ({ children, ...restprops }: Bar): JSX.Element => {
    return (
        <S.Navbar size={{ '@sm': 'd1' }} {...restprops}>

            {children}

        </S.Navbar>
    );
}

