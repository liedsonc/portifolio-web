import { useState } from "react";
import * as S from "./styles";
import { CSS } from "@stitches/react";

interface MenuBarProps {
    handleClick: () => void;

}


export const MenuBar = ({ handleClick }: MenuBarProps) => {




    return (

        <S.Menu>

            <S.LinkDiv>
                <S.Button onClick={handleClick}>
                    <S.Link href="#Home"  >
                        <h2>Home</h2>
                    </S.Link>
                </S.Button>
            </S.LinkDiv>

            <S.LinkDiv>
                <S.Button onClick={handleClick}>
                    <S.Link href="#About"  >
                        <h2>About</h2>
                    </S.Link>
                </S.Button>
            </S.LinkDiv>
            <S.LinkDiv>
                <S.Button onClick={handleClick}>
                    <S.Link href="#Projects"  >
                        <h2>Projects</h2>
                    </S.Link>
                </S.Button>
            </S.LinkDiv>
            <S.LinkDiv>
                <S.Button onClick={handleClick}>
                    <S.Link className="Contacts" href="#Contacts"  >
                        <h2>Contacts</h2>
                    </S.Link>
                </S.Button>
            </S.LinkDiv>


        </S.Menu>

    )
}



