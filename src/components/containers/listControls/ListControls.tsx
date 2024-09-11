import React, { useState, useEffect, useMemo } from "react";
import { ListControlsProps } from "./ListControls.types";
import Select from "components/elements/select/Select";

const ListControls: React.FC<ListControlsProps> = ({ data, setFilteredData }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    const [sortOrder, setSortOrder] = useState<string>("name-asc");

    // Assume the categories are a preset list rather than data derived
    const categoryOptions = useMemo(
        () => [
            { value: "all", label: "All Categories" },
            { value: "hobbit", label: "Hobbit" },
            { value: "wizard", label: "Wizard" },
            { value: "human", label: "Human" },
            { value: "elf", label: "Elf" },
            { value: "dwarf", label: "Dwarf" },
            { value: "dark lord", label: "Dark Lord" },
            { value: "ent", label: "Ent" },
            { value: "corrupted hobbit", label: "Corrupted Hobbit" },
            { value: "spider", label: "Spider" },
            { value: "spirit", label: "Spirit" },
            { value: "horse", label: "Horse" }
        ],
        []
    );

    const sortOptions = useMemo(
        () => [
            { value: "name-asc", label: "Name: A to Z" },
            { value: "name-desc", label: "Name: Z to A" },
            { value: "significance-asc", label: "Significance: Low to High" },
            { value: "significance-desc", label: "Significance: High to Low" }
        ],
        []
    );

    useEffect(() => {
        if (!data) return;

        let filteredData =
            selectedCategory === "all"
                ? [...data]
                : data.filter((character) => character.category === selectedCategory);

        filteredData.sort((a, b) => {
            switch (sortOrder) {
                case "name-asc":
                    return a.name.localeCompare(b.name);
                case "name-desc":
                    return b.name.localeCompare(a.name);
                case "significance-asc":
                    return a.significanceIndex - b.significanceIndex;
                case "significance-desc":
                    return b.significanceIndex - a.significanceIndex;
                default:
                    return 0;
            }
        });

        setFilteredData(filteredData);
    }, [data, selectedCategory, sortOrder, setFilteredData]);

    if (!data) return null;

    return (
        <div className="mb-2 flex justify-center flex-col sm:flex-row">
            <Select
                label="Category"
                options={categoryOptions}
                selectedValue={selectedCategory}
                onChange={setSelectedCategory}
            />
            <Select
                label="Order By"
                options={sortOptions}
                selectedValue={sortOrder}
                onChange={setSortOrder}
            />
        </div>
    );
};

export default React.memo(ListControls);
