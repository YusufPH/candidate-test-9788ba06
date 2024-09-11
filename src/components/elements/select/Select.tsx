import React from "react";
import { SelectProps } from "./Select.types";

const Select: React.FC<SelectProps> = ({ label, options, selectedValue, onChange, className }) => {
    return (
        <div className="flex flex-col text-start m-1">
            <label htmlFor={label} className="pl-1">
                {label}
            </label>
            <select id={label} value={selectedValue} onChange={(e) => onChange(e.target.value)}>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
