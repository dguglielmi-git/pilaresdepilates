import { Source_Sans_Pro } from "next/font/google"

const sourceSansPro200 = Source_Sans_Pro({
    weight: "200",
    style: 'normal',
    subsets: ["latin"],
});

const sourceSansPro400 = Source_Sans_Pro({
    weight: "400",
    style: 'normal',
    subsets: ["latin"],
});

const sourceSansPro600 = Source_Sans_Pro({
    weight: "600",
    style: 'normal',
    subsets: ["latin"],
});


const sourceSansProBold = Source_Sans_Pro({
    weight: "700",
    style: 'normal',
    subsets: ["latin"],
});
export { sourceSansPro400, sourceSansPro600, sourceSansProBold, sourceSansPro200 };