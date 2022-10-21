import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';


export const About = styled("section", {
    height: "auto",
    width: "100%",
    backgroundImage: "url('/assets/Eclipse-gray1.svg'), url(''), url('') ",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top,left top,left top ",
    backgroundSize: "300px",
    justifyContent: "center",
    paddingTop: 50,





})

export const main = styled("main", {
    display: "flex",
    flex: "fit-content",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30,
})

export const AboutSection = styled("section", {
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    height: "auto",
    marginColor: "white",
    marginRight: 30,
    marginLeft: 30,
    color: "$secondary",

})

export const textWrapper = styled("div", {
    width: "50%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",

})

export const title = styled("h1", {
    color: "$secondary",
    fontSize: "$heading",
    fontFamily: "JetBrains Mono",

})

export const content = styled("p", {
    color: "$primary",
    fontSize: 20,
    fontFamily: "JetBrains Mono",
    marginTop: 50,
})

export const Banner = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "-25px 25px #1DB954",
    marginRight: 30,
})

export const Bannerimg = styled("img", {
    height: 426,
    width: 248
})

