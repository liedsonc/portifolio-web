import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';


export const Project = styled('div', {
    '&:hover': {
        scale: '115%',
        filter: 'brightness(50%)',
        transitionDelay: '0.1s',
    },
})

export const Wrapper = styled("div", {
    display: 'flex',
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