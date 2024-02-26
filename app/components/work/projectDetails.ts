import {
    SiBattledotnet,
    SiCplusplus,
    SiDotnet,
    SiFlutter,
    SiFramer,
    SiGithub, SiHtml5, SiJavascript, SiNeovim,
    SiNextdotjs,
    SiReact,
    SiRust,
    SiTailwindcss,
    SiTypescript,
    SiZig
} from "react-icons/si";
import { IconType } from "react-icons";

export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "FINE Delivery",
        description:
            "An application for ordering food and beverages within a selection timeslots with many ordering methods.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiDotnet, SiFlutter],
        techNames: ["TypeScript", "React", "Next.js", ".NET", "Flutter"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj7stjx6dyDAxWQaPUHHVi6CGwQFnoECAYQAQ&url=https%3A%2F%2Fdotnet.microsoft.com%2Fen-us%2Flearn%2Fdotnet%2Fwhat-is-dotnet&usg=AOvVaw2aSvo4GbDpigJgkOzHMG_0&opi=89978449", "https://flutter.dev/?gclid=CjwKCAiAqY6tBhAtEiwAHeRopQMIhS7kaYv8tvotUqTlcJS7QL-lWqmZSjuWoCSTZZrq4S7ziEmDyBoCXJEQAvD_BwE&gclsrc=aw.ds"],
        github: "https://github.com/FoodDeliveryCapstone",
        demo: "",
        image: "/projects/Picture1.png",
        available: true,
    },
    {
        id: 1,
        name: "E-Closet",
        description:
            "An application to coordinate clothes for young people.",
        technologies: [SiFlutter, SiDotnet, SiNextdotjs],
        techNames: ["Flutter", ".NET", "NextJs"],
        techLinks: ["https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj7stjx6dyDAxWQaPUHHVi6CGwQFnoECAYQAQ&url=https%3A%2F%2Fdotnet.microsoft.com%2Fen-us%2Flearn%2Fdotnet%2Fwhat-is-dotnet&usg=AOvVaw2aSvo4GbDpigJgkOzHMG_0&opi=89978449", "https://flutter.dev/?gclid=CjwKCAiAqY6tBhAtEiwAHeRopQMIhS7kaYv8tvotUqTlcJS7QL-lWqmZSjuWoCSTZZrq4S7ziEmDyBoCXJEQAvD_BwE&gclsrc=aw.ds", "https://nextjs.org/", "https://nextjs.org/"],
        github: "https://github.com/ltphuoc/ecloset",
        demo: "",
        image: "/projects/codewars.webp",
        available: true,
    },
    {
        id: 2,
        name: "Herald Travel",
        description:
            "Website helps users experience locations.",
        technologies: [SiTypescript, SiReact, SiNextdotjs],
        techNames: ["TypeScript", "React", "Next.js"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/"],
        github: "https://github.com/minhduongt/HeraldTravel",
        demo: "",
        image: "/projects/codewars.webp",
        available: true,
    },
    {
        id: 3,
        name: "OJT Web",
        description:
            "A website dedicated to the OJT university experience.",
        technologies: [SiJavascript, SiReact, SiHtml5],
        techNames: ["Javascript", "React", "HTML5"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/"],
        github: "https://github.com/minhduongt/OJT_Web",
        demo: "",
        image: "/projects/codewars.webp",
        available: true,
    },
];
