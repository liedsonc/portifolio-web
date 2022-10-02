import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';

export const Home = styled("div", {
    alignItems: "center",
    width: "auto",
    marginColor: "white",
    marginRight: 30,
    marginLeft: 30,
    color: "$secondary",
    fontFamily: "JetBrains Mono",


})

export const imgDiv = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

})

export const img = styled("img", {
    height: 150,
    width: 150,
})
export const main = styled("main", {

})
export const greeterDiv = styled("div", {



})

export const mainTitle = styled("h1", {
    color: "$secondary",

})

export const mainSubtitle = styled("h4", {
    color: "$accentLight",
    marginTop: 18,

})

export const Tecnologies = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginTop: 18,
})
export const Buttons = styled("div", {
    marginTop: 30,
})
export const callToAction = styled("button", {
    height: 42,
    weight: 152,
    borderColor: "$secondary",
    backgroundColor: "$secondary",
    fontFamily: "JetBrains Mono",
    fontSize: 16,
    marginRight: 15,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    boxShadow: '5px 4px 4px  #1DB954',
    transform: "matrix(1, -0.01, 0.01, 1, 0, 0)",

})
export const aboutButton = styled("button", {
    height: 42,
    weight: 152,
    borderColor: "$secondary",
    backgroundColor: "transparent",
    color: "$primary",
    fontFamily: "JetBrains Mono",
    fontSize: 16,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    boxShadow: '5px 4px 4px  #1DB954',
    transform: "matrix(1, -0.01, 0.01, 1, 0, 0)",

})


export type StyledHome = Stitches.VariantProps<typeof Home>;