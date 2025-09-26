"use client";

import React from "react";
import { SimpleRadioGroup } from "./radioGroup";

interface BookFiltersProps {
  selectedYear: string;
  selectedCollegeType: string;
  selectedSubject: string;
  onYearChange: (year: string) => void;
  onCollegeTypeChange: (type: string) => void;
  onSubjectChange: (subject: string) => void;
}

export function BookFilters({
  selectedYear,
  selectedCollegeType,
  selectedSubject,
  onYearChange,
  onCollegeTypeChange,
  onSubjectChange,
}: BookFiltersProps) {
  const years = ["全て", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015"];
  const collegeTypes = [
    { value: "all", label: "全て" },
    { value: "national", label: "国立" },
    { value: "private", label: "私立" },
  ];
  const subjects = [
    { value: "all", label: "全て" },
    { value: "modern-japanese", label: "現代文" },
    { value: "classical-japanese", label: "古文" },
    { value: "chinese", label: "漢文" },
  ];

  return (
    <div className="p-6 bg-gradient-to-br from-slate-50 to-blue-50 border rounded-md space-y-6">
      <div>
        <label htmlFor="year" className="block text-sm font-medium text-slate-700 mb-1">
          年度
        </label>
        <select
          id="year"
          value={selectedYear}
          onChange={(e) => onYearChange(e.target.value)}
          className="rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          {years.map((year) => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>
      </div>

      <div>
        <h3 className="mb-3 text-slate-700">大学種別</h3>
        <SimpleRadioGroup
          name="collegeType"
          value={selectedCollegeType}
          options={collegeTypes}
          onChange={onCollegeTypeChange}
        />
      </div>

      <div>
        <h3 className="mb-3 text-slate-700">科目</h3>
        <SimpleRadioGroup
          name="subject"
          value={selectedSubject}
          options={subjects}
          onChange={onSubjectChange}
        />
      </div>
    </div>
  );
}
