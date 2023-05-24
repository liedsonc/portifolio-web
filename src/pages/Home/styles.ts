import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';

export const Home = styled("div", {

    height: "100vh",
    width: "100%",
    // backgroundImage: "url('/assets/Eclipse-gray.svg'), url('/assets/Eclipse-green.svg') ",
    // backgroundPosition: "left bottom, 5% center",
    // backgroundSize: '300px',
    // backgroundRepeat: "no-repeat",

    // background: "linear-gradient(0deg, rgba(23,148,67,1) 13%, rgba(62,96,74,1) 68%, rgba(77,77,77,1) 94%)",
    boxSizing: "border-box"

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

    variants: {
        size: {
            d1: {
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row-reverse",
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
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "55vh",
    width: "100%",
    whiteSpace: "pre-wrap",

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
    transition: 0,
    height: 50,

    '&:hover': {
        height: 52,
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
    border: "none",

    backgroundColor: "$secondary",
    fontFamily: "JetBrains Mono",
    fontSize: 16,
    marginRight: 15,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    '&:hover': {
        backgroundColor: '$secondaryDark',
    }, '&:active': {
        height: 40,
        weight: 150,
    },
    boxShadow: '3px 4px 4px  #1DB954',
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
export const callToActionNav = styled("button", {
    height: 40,
    weight: 152,
    border: "none",
    boxShadow: "$sm",
    backgroundColor: "$secondary",
    fontFamily: "JetBrains Mono",
    fontSize: 16,
    color: '$white',
    borderRadius: 10,
    paddingRight: 20,
    paddingLeft: 20,
    '&:hover': {
        backgroundColor: '$secondaryDark',
    }, '&:active': {
        height: 40,
        weight: 150,
    },
    // boxShadow: '3px 4px 4px  #1DB954',
    variants: {
        size: {
            xs: {
                display: 'none'

            },

        },

    }

})

export const HamburgerDiv = styled("div", {
    display: 'none',
    variants: {
        size: {
            xs: {
                display: 'flex'
            }
        }
    }
})


export const aboutButton = styled("button", {
    height: 42,
    weight: 152,
    borderColor: "$secondary",
    borderStyle: "solid",
    backgroundColor: "transparent",
    color: "$primary",
    fontFamily: "JetBrains Mono",
    fontSize: 16,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
    '&:hover': {
        backgroundColor: '$secondary',
    },
    '&:active': {
        height: 40,
        weight: 150,
    },

    boxShadow: '3px 4px 4px  #1DB954',
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

export const Links = styled('div', {
    display: 'flex',
    float: 'right',
    height: '100%',
    alignItems: 'center',
    textDecoration: 'none',
    gap: 50,
    variants: {
        size: {
            d1: {
                display: 'none'
            }
        }
    }

})
export const TextLink = styled('li', {
    listStyle: 'none',
    color: '$white',

})
export const Link = styled('a', {

    textDecoration: 'none',
    color: '$secondary',
    height: '100%',
    padding: 10,
    '&:hover': {
        backgroundColor: '$secondaryDark'
    },

})
export const Social = styled('div', {
    display: 'flex',
    alignItems: 'center'
})
export const LogoDiv = styled('a', {
    display: 'flex',
    alignItems: 'center',

})

export const MenuBarDiv = styled('div', {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",

})


export const LinkDiv = styled("div", {
    display: "flex",
    textAlign: 'center',
})


export type StyledHome = Stitches.VariantProps<typeof Home>;