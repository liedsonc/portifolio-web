import './styles'
import { Navbar } from '../../components/Navbar';
import { ReactNode } from 'react';
import * as data from "../../../lib/data"
interface Props {
    children: ReactNode;
}
type Home = Props
function Home({ children, ...restprops }: Home) {
    return (
        <div>
            <Navbar >

            </Navbar>

        </div >
    );
}

export default Home;