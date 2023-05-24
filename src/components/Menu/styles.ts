import { MenuBar } from '.';
import { styled } from '../../config/stitches.config';
import type * as Stitches from '@stitches/react';

export const Menu = styled("div", {
    width: "85%",
    display: "flex",
    justifyContent: "center",
    textAlign: "end",
    flexDirection: "column",
    position: "absolute",
    backgroundColor: '$accent',
    zIndex: 1,
    alignContent: 'end',
    borderRadius: 5,
    opacity: 0.9,
    padding: 15,
    marginLeft: 30,
})

export const LinkDiv = styled("div", {
    display: "flex",
    textAlign: 'center',
    textDecoration: 'none',
    padding: 2
})

export const Link = styled("a", {
    textDecoration: 'none',
    color: "$secondary"
}
)

export const Button = styled("button", {
    backgroundColor: 'transparent',
    border: 'none'
})

export type StyledMenuBar = Stitches.VariantProps<typeof MenuBar>;
