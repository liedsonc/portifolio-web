import React from 'react';
import * as S from "./styles"
import { Project } from '../../components/Project';
import * as data from "../../../lib/data"
// import { Container } from './styles';

function Projects() {
    let Projects = data.Projects

    return (
        <S.MainSection id='Projects'>
            <S.Heading size={{ '@iphoneSE': 'd1' }}>
                <S.Title>Projects</S.Title>
            </S.Heading>
            {/* put this on his own section */}
            {/* Add a hover effect to the 'Projec't component and a padding to de details div */}
            <div style={{ alignItems: "center" }}>
                <S.Projects size={{ '@xs': 'd1', '@sm': 'd2' }}>
                    {
                        Projects.map(p =>
                            <Project
                                key={p.id}
                                title={p.title}
                                description={p.descrition}
                                cover={p.url}

                            />
                        )
                    }
                </S.Projects>
            </div>

        </S.MainSection >
    );
}

export default Projects;