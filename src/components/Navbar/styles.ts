import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';

export const Navbar = styled("div", {

    width: "auto",
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
    borderRadius: 10,
    height: 60,
    boxShadow: '$lg',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: 'pointer',
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

export type StyledNavbar = Stitches.VariantProps<typeof Navbar>;
