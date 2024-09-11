import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import CharacterList from "./CharacterList";
import { useCharacters } from "services/charactersService";
import { Character } from "types/Character";

// Mock the useCharacters hook
jest.mock("services/charactersService");

const mockCharacters: Character[] = [
    {
        name: "Aragorn",
        category: "Human",
        description: "The heir of Isildur.",
        avatar: "aragorn.jpg",
        significanceIndex: 1
    },
    {
        name: "Legolas",
        category: "Elf",
        description: "A skilled archer.",
        avatar: "legolas.jpg",
        significanceIndex: 2
    }
];

describe("CharacterList Component", () => {
    afterEach(() => {
        jest.clearAllMocks();
    });

    test("renders loading state", () => {
        (useCharacters as jest.Mock).mockReturnValue({
            data: null,
            isLoading: true,
            error: null
        });

        render(<CharacterList />);
        expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    test("renders error state", async () => {
        const errorMessage = "Failed to load characters.";
        (useCharacters as jest.Mock).mockReturnValue({
            data: null,
            isLoading: false,
            error: new Error(errorMessage)
        });

        render(<CharacterList />);
        expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });

    test("renders character cards when data is loaded", async () => {
        (useCharacters as jest.Mock).mockReturnValue({
            data: mockCharacters,
            isLoading: false,
            error: null
        });

        render(<CharacterList />);

        // Check if character cards are rendered
        await waitFor(() => {
            expect(screen.getByText("Aragorn")).toBeInTheDocument();
            expect(screen.getByText("Legolas")).toBeInTheDocument();
        });
    });
});
