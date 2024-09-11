import React, { useMemo } from "react";
import { useCharacters } from "services/charactersService";
import CharacterCard from "components/elements/characterCard/CharacterCard";
import ListControls from "../listControls/ListControls";
import { Character } from "types/Character";

const CharacterList = () => {
    const { data, error, isLoading } = useCharacters();
    const [filteredData, setFilteredData] = React.useState<Character[]>([]);

    const filteredCharacters = useMemo(() => filteredData, [filteredData]);
    if (isLoading) return <div>Loading...</div>;

    if (error) return <div>Error: {(error as Error).message || "An unknown error occurred"}</div>;

    return (
        <div>
            <ListControls data={data} setFilteredData={setFilteredData} />
            {filteredCharacters.map((character) => (
                <CharacterCard
                    key={character.name}
                    name={character.name}
                    category={character.category}
                    description={character.description}
                    avatar={character.avatar}
                />
            ))}
        </div>
    );
};

export default React.memo(CharacterList);
