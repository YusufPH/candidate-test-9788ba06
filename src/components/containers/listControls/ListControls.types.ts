import { Character } from "types/Character";

export interface ListControlsProps {
    data: Character[] | undefined;
    setFilteredData: (filteredData: Character[]) => void;
}
