"use client";

import ButtonLink from "./Button";

export default function NavBar() {
    return (
        <nav className="text-white flex flex-wrap justify-between items-center border-b-2 px-4 py-2">
            {/* Logo */}
            <div className="text-lg font-bold text-black">My Portfolio</div>

            {/* Responsive Menu */}
            <div className="flex flex-wrap space-x-4 mt-2 md:mt-0 align-middle items-center">
                <ButtonLink
                    link="/about"
                    text="Pricing"
                    onClick={() => console.log("Button clicked")}
                    variant="primary"
                    size="lg"
                    icon={
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h14M12 5l7 7-7 7"
                            />
                        </svg>
                    }
                />
                <ButtonLink
                    link="/about"
                    text="Say Hello"
                    onClick={() => console.log("Button clicked")}
                    variant="tertiary"
                    size="lg"
                    icon={
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h14M12 5l7 7-7 7"
                            />
                        </svg>
                    }
                />
            </div>
        </nav>
    );
}
