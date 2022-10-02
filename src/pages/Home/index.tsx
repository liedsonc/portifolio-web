import * as S from "./styles";
import { CSS } from "@stitches/react";
import { Navbar } from '../../components/Navbar';
import { ReactNode } from 'react';
import * as data from "../../../lib/data"

interface Props {
    children: ReactNode;
}
type Home = Props
function Home({ children, ...restprops }: Home) {
    return (
        <S.Home>
            <Navbar >
                <img src={data.logo.img} />
                <h1>Fim</h1>
            </Navbar>



        </S.Home >
    );
}

export default Home;