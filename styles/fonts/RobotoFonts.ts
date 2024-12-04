import { Roboto } from "next/font/google";

const roboto400 = Roboto({
    weight: "400",
    style: 'normal',
    subsets: ["latin"],
});

const roboto500 = Roboto({
    weight: "500",
    style: 'normal',
    subsets: ["latin"],
});

const roboto700 = Roboto({
    weight: "700",
    subsets: ["latin"],
});

const roboto900 = Roboto({
    weight: "900",
    subsets: ["latin"],
});

export { roboto400, roboto500, roboto700, roboto900 }