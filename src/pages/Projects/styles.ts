import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';

export const MainSection = styled('div', {
    height: '100vh',
    alignItems: 'center',
    boxSizing: 'border-box',
    marginBottom: 100,
    variants: {
        size: {
            d1: {

                paddingTop: "$7",
                marginBottom: "$8"

            }


        },

    }

})

export const Projects = styled("div", {
    // display: "flex",
    // alignItems: "center",
    // flexDirection: "row",
    justifyContent: "space-evenly",
    display: "grid",
    // gridAutoRows: "auto",
    gridTemplateColumns: "auto auto auto",
    // grid: "auto / ",
    width: "100%",

    gap: 20,
    marginTop: 100,
    variants: {
        size: {
            d1: {
                marginTop: 15,
                display: "grid",
                gridTemplateColumns: "auto",
                paddingTop: "$5"


            },
            d2: {
                marginTop: 15,
                display: "grid",
                gridTemplateColumns: "auto auto auto",
            }


        },

    }
})
export const Heading = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    variants: {
        size: {
            d1: {
                marginTop: 500,
            }
        }
    }
})
export const Title = styled('h1', {
    fontSize: '$heading',
    color: '$secondary',
    fontFamily: 'JetBrains Mono',
    variants: {
        size: {
            d1: {
                paddingTop: "$7"
            }
        }
    }




})