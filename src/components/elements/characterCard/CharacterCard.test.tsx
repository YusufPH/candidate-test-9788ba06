import React from "react";
import { render, screen } from "@testing-library/react";
import CharacterCard from "./CharacterCard";

describe("CharacterCard Component", () => {
    const characterProps = {
        name: "Aragorn",
        category: "Human",
        description: "The heir of Isildur and the rightful king of Gondor.",
        avatar: "aragorn.jpg"
    };

    test("renders character card with correct name, category, and description", () => {
        render(<CharacterCard {...characterProps} />);

        // Check if the text content is rendered properly
        expect(screen.getByText("Aragorn")).toBeInTheDocument();
        expect(screen.getByText("Human")).toBeInTheDocument();
        expect(
            screen.getByText("The heir of Isildur and the rightful king of Gondor.")
        ).toBeInTheDocument();
    });

    test("renders the image with the correct alt text", () => {
        render(<CharacterCard {...characterProps} />);

        const image = screen.getByAltText("Aragorn");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", expect.stringContaining("aragorn.jpg"));
    });
});
