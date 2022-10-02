import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';

export const Home = styled("div", {
    alignItems: "center",
    width: "auto",
    marginColor: "white",
    marginRight: 30,
    marginLeft: 30,
    color: "#1DB954",



})



export type StyledHome = Stitches.VariantProps<typeof Home>;
