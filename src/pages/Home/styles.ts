import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';

export const Home = styled("div", {

    height: "100%",
    width: "100%",
    backgroundImage: "url('/assets/Eclipse-gray.svg'), url('/assets/Eclipse-green.svg') ",
    backgroundPosition: "left bottom, 5% center",
    backgroundSize: '300px',
    backgroundRepeat: "no-repeat"

})

export const HomeSection = styled("section", {
    alignItems: "center",
    width: "auto",
    height: "auto",
    marginColor: "white",
    marginRight: 30,
    marginLeft: 30,
    color: "$secondary",
    fontFamily: "JetBrains Mono",
})

export const NavbarImg = styled("img", {
    height: 25,
    width: 25,
    variants: {
        size: {
            d1: {
                height: 38,
                width: 38,

            },

        },
    }
})


export const imgDiv = styled("div", {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    variants: {
        size: {
            d1: {

                float: "right",
            },

        },
    }

})

export const img = styled("img", {
    height: 200,
    width: 200,
    variants: {
        size: {
            d1: {
                height: 300,
                width: 300,


            },
        },

    }


})
export const main = styled("main", {
    alignItems: "center",
    justifyContent: "space-between",
    variants: {
        size: {
            d1: {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row-reverse;",
                marginTop: "5%",
                marginLeft: 20,
                marginRight: 20,


            },
            d2: {
                height: 150,
                width: 150,
            },
        },
    }
})
export const greeterDiv = styled("div", {
    alignItems: "center",

    variants: {
        size: {
            d1: {

                width: "auto",
                alignSelf: "center",

                float: "left",

            },
            d2: {
                height: 150,
                width: 150,
            },
        },

    }


})

export const mainTitle = styled("h1", {
    color: "$secondary",
    fontSize: 50,
    variants: {
        size: {
            d1: {
                fontSize: 18
            },

        },

    }

})

export const mainSubtitle = styled("h4", {
    color: "$accentLight",
    fontSize: 24,
    marginTop: 18,
    variants: {
        size: {
            d1: {
                fontSize: 12,
                marginTop: 15
            },

        },

    }

})

export const Tecnologies = styled("div", {
    display: "flex",
    alignItems: "center",
    gap: 5,
    marginTop: 18,
    variants: {
        size: {
            d1: {
                marginTop: 15

            },

        },

    }
})

export const Tech = styled("img", {
    height: 30,
    variants: {
        size: {
            d1: {
                height: 20,
                width: "auto",
            },

        },

    }
})

export const Buttons = styled("div", {
    marginTop: 30,
    variants: {
        size: {
            d1: {
                marginTop: 15

            },

        },

    }


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
    // boxShadow: '3px 4px 4px  #1DB954',
    transform: "matrix(1, -0.01, 0.01, 1, 0, 0)",
    variants: {
        size: {
            d1: {
                height: 40,
                width: 128,
                paddingRight: 8,
                paddingLeft: 8,

            },

        },

    }

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
    // boxShadow: '3px 4px 4px  #1DB954',
    transform: "matrix(1, -0.01, 0.01, 1, 0, 0)",
    variants: {
        size: {
            d1: {
                height: 40,
                width: 100,
                paddingRight: 2,
                paddingLeft: 2,
            },

        },
    }
})



export type StyledHome = Stitches.VariantProps<typeof Home>;