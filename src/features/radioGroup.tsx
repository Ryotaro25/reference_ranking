"use client";

import React from "react";

interface RadioOption {
  value: string;
  label: string;
}

interface SimpleRadioGroupProps {
  name: string;
  value: string;
  options: RadioOption[];
  onChange: (value: string) => void;
}

export function SimpleRadioGroup({ name, value, options, onChange }: SimpleRadioGroupProps) {
  return (
    <div className="flex flex-wrap gap-4">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center space-x-2 cursor-pointer text-slate-600"
        >
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={(e) => onChange(e.target.value)}
            className="accent-blue-600"
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
