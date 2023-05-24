import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';


export const Wrapper = styled("section", {
    display: 'flex',

    padding: 30,
    variants: {
        size: {
            d1: {
                paddingTop: "$7",

            }
        }
    }

})



export const Footer = styled("div", {

    width: '100%',
    height: 400,
    background: "rgba(217, 217, 217, 0.30)",
    borderRadius: 10,
    fontFamily: 'JetBrains Mono',
    color: '$white',
    padding: "50px",
    variants: {
        size: {
            d1: {
                height: "80vh",
                bottom: "0%"
            }
        }
    }

}
)

export const Title = styled("h1", {
    fontSize: '$footerTitle',
    // fontWeight: '$bold',

})

export const Li = styled("div", {
    display: 'flex',
    alignItems: 'center',


})
export const Ul = styled("div", {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'start',
    marginTop: "20px",


})

export const Main = styled("div", {
    display: 'grid',
    gridTemplateColumns: "auto auto auto",
    variants: {
        size: {
            d1: {
                gridTemplateColumns: "auto",
                gap: "$6",

            }
        }
    }
})


export const Scroll = styled("div", {
    transform: 'rotate(180deg)',
    variant: {
        size: {
            d1: {
                position: "absolute",

            }
        }
    }
})

export const ScrollWrapper = styled("div", {
    variants: {
        size: {
            d1: {
                position: "absolute",
                marginTop: "-10%",

                zIndex: 100
            }
        }
    }
})