// stitches.config.ts
import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss, theme } = createStitches({
    theme: {
        colors: {
            primary: "#fff",
            primaryDark: "#121212",
            primaryLight: "#4d4d4d",
            accent: "#313638",
            accentLight: "#A9A9A9",
            secondary: "#1DB954",
            secondaryDark: "#179443",
            success: "#04D361",
            error: "#FF3B30",
            info: "#2AC7E3",
            bg: "#000",
            white: "#fff",
            black: "#000",
            text: "#fff",
        },
        space: {
            1: "0.25rem",
            2: "0.5rem",
            3: "1rem",
            4: "2rem",
            5: "4rem",
            6: "8rem",
            7: "16rem",
            8: "32rem",
            9: "64rem",
            10: "128rem",
            11: "256rem",
            12: "512rem",
        },
        fontSizes: {
            small: "12px",
            body: "14px",
            subheading: "28px",
            heading: "58px",
            medium: "18px",
            large: "50px",

        },
        fonts: {
            body: "Poppins, Roboto, sans-serif",
        },
        fontWeights: {
            thin: 300,
            normal: 400,
            bold: 700,

        },
        lineHeights: {
            1: 1,
            2: 1.25,
            3: 1.5,
            4: 2,
            5: 2.5,
            6: 3,
            7: 4,
            8: 5,
            9: 6,
            10: 7,
            11: 8,
            12: 9,

        },
        letterSpacings: {
            normal: "normal",
            caps: "0.25em",
        },
        sizes: {
            container: "100%",
        },
        borderWidths: {
            1: "1px",
            2: "2px",
            3: "4px",
            4: "8px",
            5: "16px",
            6: "32px",
            7: "64px",
            8: "128px",
            9: "256px",
            10: "512px",
            11: "1024px",
            12: "2048px",
        },
        borderStyles: {
            solid: "solid",
            dashed: "dashed",
            dotted: "dotted",
            double: "double",
            groove: "groove",
            hidden: "hidden",
            inset: "inset",
            outset: "outset",
            ridge: "ridge",
            none: "none",

        },
        radius: {
            1: "4px",
            2: "8px",
            3: "12px",
            4: "32px",
            5: "64px",
            full: "9999px",
        },
        shadows: {
            sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            md: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            xl: "-20px 20px 20px 20px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
            outline: "0 0 0 3px rgba(66, 153, 225, 0.5)",
            none: "none",

        },
        zIndices: {
            "0": 0,
            "10": 10,
            "20": 20,
            "30": 30,
            "40": 40,
            "50": 50,
        },
        transitions: {
            short: "all 0.2s ease-in-out",
            base: "all 0.3s ease-in-out",
            long: "all 0.5s ease-in-out",

        },
    },
    media: {
        xs: "(max-width: 639.99px)",
        iphoneSE: "(max-width: 380px)",
        sm: "(min-width: 640px)",
        md: "(min-width: 768px)",
        lg: "(min-width: 1024px)",
        xl: "(min-width: 1280px)",
        xxl: "(min-width: 1600px)",
    },
    utils: {
        m: (value: number) => ({
            margin: value,
        }),
        mt: (value: number) => ({
            marginTop: value,
        }),
        mr: (value: number) => ({
            marginRight: value,
        }),
        mb: (value: number) => ({
            marginBottom: value,
        }),
        ml: (value: number) => ({
            marginLeft: value,
        }),
        mx: (value: number) => ({
            marginLeft: value,
            marginRight: value,
        }),
        my: (value: number) => ({
            marginTop: value,
            marginBottom: value,
        }),
        size: (value: number) => ({
            width: value,
            height: value,
        }),
        linearGradient: (value: string) => ({
            backgroundImage: `linear-gradient(${value})`,
        }),
        br: (value: number) => ({
            borderRadius: value,
        }),
        px: (value: number) => ({
            paddingLeft: value,
            paddingRight: value,
        }),
    }

});


export const resetCss = globalCss({
    "*": { margin: 0, padding: 0, boxSizing: "border-box" },
    'html,body,#root': {
        height: "100%",
        fontFamily: "$body",

        background: "linear-gradient(0deg, rgba(23,148,67,1) 13%, rgba(62,96,74,1) 37%, rgba(103,103,103,1) 94%)",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        boxSizing: "border-box"
    },
    'button': {
        fontFamily: "$body",
        backgroundColor: "$bg",
        overflowX: "hidden"
    }
});