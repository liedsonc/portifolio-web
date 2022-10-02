import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';

export const Navbar = styled("div", {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "auto",
    paddingRight: 20,
    paddingLeft: 20,
    marginTop: 15,
    borderRadius: 10,
    height: 50,

    boxShadow: '$lg',

    // justifyContent: "center",
    // cursor: 'pointer',
    variants: {
        color: {
            primary: {
                backgroundColor: '$primaryLight',
                color: "$white"
            },
            secondary: {
                backgroundColor: '$secondary',
                color: "$white"
            },
            default: {
                backgroundColor: '$primaryLight',
                color: '$white',
            },
        },
        shadow: {
            false: {
                boxShadow: 'none',
            }
        },
    },


    defaultVariants: {
        color: 'primary',
        shadow: true
    }

})


export const NavbarRight = styled("div", {
    position: 'relative',
    float: 'right',
    marginRight: 'auto',
    marginLeft: '0'
})

export type StyledNavbar = Stitches.VariantProps<typeof Navbar>;
