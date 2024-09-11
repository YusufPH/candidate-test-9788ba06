// characterService.ts
import { CHARACTER_URL } from "constants/url";
import { fetchJson } from "./apiClient";
import { Character } from "types/Character";
import { useQuery } from "react-query";

export const useCharacters = () => {
    return useQuery<Character[]>(["characters"], () => fetchJson<Character[]>(CHARACTER_URL));
};
