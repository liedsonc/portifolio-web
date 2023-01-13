import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';


export const About = styled("section", {
    height: "100vh",
    width: "100%",
    // backgroundImage: "url('/assets/Eclipse-gray1.svg'), url(''), url('') ",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left top,left top,left top ",
    backgroundSize: "300px",
    justifyContent: "center",
    paddingTop: 50,
    paddingBottom: 50,
    boxSizing: "border-box"





})

export const main = styled("main", {
    display: "flex",
    flex: "fit-content",
    justifyContent: "center",
    marginRight: 30,
    marginLeft: 30,
    variants: {
        size: {
            d1: {
                display: "flex",
                flexDirection: "column",
            }
        }
    }
})

export const AboutSection = styled("section", {
    width: "100%",
    height: "auto",
    marginColor: "white",
    marginRight: 30,
    marginLeft: 30,
    color: "$secondary",
    variants: {
        size: {
            d1: {
                marginLeft: 0,
            }
        }
    }

})

export const textWrapper = styled("div", {
    width: "50%",
    height: "auto",
    alignItems: "center",
    justifyContent: "center",
    variants: {
        size: {
            d1: {
                display: "flex",
                flexDirection: "column",
                width: "100%"
            }
        }
    }

})

export const title = styled("h1", {
    color: "$secondary",
    fontSize: "$heading",
    fontFamily: "JetBrains Mono",


    variants: {
        size: {
            d1: {
                fontSize: "$heading"

            }
        }

    }
})

export const titleWrapper = styled("div", {
    variants: {
        size: {
            d1: {
                display: "flex",
                justifyContent: "center",
                alignContents: "center"
            }
        }
    }
})

export const content = styled("p", {
    color: "$primary",
    fontSize: 20,
    fontFamily: "JetBrains Mono",
    marginTop: 50,
    variants: {
        size: {
            d1: {
                marginBottom: 20,
            }
        }
    }
})

export const Banner = styled("div", {
    display: "flex",
    boxShadow: "-25px 25px #1DB954",
    marginRight: 30,
})

export const Bannerimg = styled("img", {
    height: 426,
    width: 248
})

export const BannerWrapper = styled("div", {
    variants: {
        size: {
            d1: {
                display: "flex",
                justifyContent: "center",
            }
        }
    }
})
