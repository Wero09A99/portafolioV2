import { JSX } from "react"

export interface IHabilityCard {
    title: string;
    icon: JSX.Element;
    description: string;
    subtitle1: string;
    technologies: string[];
    subtitle2: string;
    tools: string[];
    onClick?: () => void;
}