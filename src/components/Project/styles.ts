import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';

export const Project = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    width: 450,
    heightMax: 300,
    borderRadius: 14,
    justifyContent: 'center',
    fontFamily: "JetBrains Mono",
    boxShadow: " 0px 4px 4px rgba(217, 217, 217, 0.25)",
    overflow: "hidden",
    gap: 2,


    // backgroundColor: "#D9D9D9",

})
export const ProjectImg = styled('img', {
    height: 240,

    width: "100%",
    // flex: 1,
    objectFit: 'cover',
    overflow: 'hidden',





});
export const Details = styled('div', {
    width: "auto",
    height: "auto",
    maxHeight: "70px",
    backgroundColor: '$accent',
    padding: "5px 30px 15px 30px",
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