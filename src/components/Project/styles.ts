import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';


export const Project = styled('div', {
    zIndex: 5,
    // '&:hover': {
    //     scale: '115%',
    //     filter: 'brightness(50%)',
    //     transitionDelay: '0.1s',
    // },
})
export const TechnologiesDiv = styled('div', {
    display: 'flex',
    position: 'relative',
    alignItems: 'end',
    float: 'right',

})
export const Tecnologies = styled("div", {
    display: "flex",
    zIndex: 10,
    float: 'right',
    width: '100%',
    alignItems: "flex-end",
    justifyContent: 'end',
    gap: 5,
    paddingRight: 25,
    paddingBottom: 10,
    position: 'absolute',
    variants: {
        size: {
            d1: {
                marginTop: 15

            },

        },

    }
})

export const Tech = styled("img", {
    transition: 0,
    height: 40,
    '&:hover': {
        height: 42,
    },
    variants: {
        size: {
            d1: {
                height: 20,
                width: "auto",
                '&:hover': {
                    height: 22,
                },
            },


        },

    }
})

export const Wrapper = styled("div", {
    display: 'flex',
    zIndex: 5,
    flexDirection: 'column',
    width: 450,
    heightMax: 300,
    borderRadius: 14,
    justifyContent: 'center',
    fontFamily: "JetBrains Mono",
    boxShadow: " 0px 4px 4px rgba(217, 217, 217, 0.25)",
    overflow: "hidden",
    variants: {
        size: {
            d1: {
                width: 315,
            }
        }
    }
})


export const ProjectImg = styled('img', {
    height: 240,
    zIndex: 5,
    width: "100%",
    // flex: 1,
    objectFit: 'fill',
    overflow: 'hidden',
    variants: {
        size: {
            d1: {
                height: 168
            }
        }
    }
});




export const Details = styled('div', {
    zIndex: 5,
    width: "auto",
    height: "auto",
    maxHeight: "90px",
    backgroundColor: '$accent',
    padding: "5px 30px 20px 30px",
    position: "relative",
});

export const Title = styled('h1', {
    color: "$primary",
    fontSize: 22,
    fontWeight: "$normal",
});

export const Description = styled('p', {
    color: "$accentLight",
    fontSize: 14,

});

export type StyledProject = Stitches.VariantProps<typeof Project>;