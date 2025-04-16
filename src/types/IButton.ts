import { JSX } from "react";

export interface IButton {
    text: string;
    link: string;
    variant: "primary" | "secondary" | "tertiary";
    size: "sm" | "md" | "lg";
    icon?: JSX.Element;
    onClick?: () => void;
}