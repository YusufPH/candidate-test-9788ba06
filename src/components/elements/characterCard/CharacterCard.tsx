import React from "react";
import { CharacterProps } from "./CharecterCard.types";
import { capitaliseText } from "utlis/textUtils";

const CharacterCard: React.FC<CharacterProps> = ({ name, category, description, avatar }) => {
    // Capitalize once and reuse
    const capitalizedName = capitaliseText(name);
    const capitalizedCategory = capitaliseText(category);
    const capitalizedDescription = capitaliseText(description);

    return (
        <div className="bg-white mb-4 p-4 flex flex-col sm:flex-row">
            <img
                src={`${process.env.PUBLIC_URL}/characters/${avatar}`}
                alt={capitalizedName}
                className="rounded-full w-16 h-16 mx-auto sm:mr-4 sm:ml-0"
            />
            <div className="flex flex-col text-center sm:text-start">
                <p className="font-semibold font-sans mb-2">{capitalizedName}</p>
                <p className="mb-2 font-sans">{capitalizedCategory}</p>
                <p className="font-sans">{capitalizedDescription}</p>
            </div>
        </div>
    );
};

export default React.memo(CharacterCard);
