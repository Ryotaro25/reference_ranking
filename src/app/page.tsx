"use client";

import React, { useState } from "react";
import booksData from "../data/books.json";
import { Book } from "../types";
import { BookFilters } from "../features/BooksFilter";
import { BookRanking } from "../features/BookRanking";

export const runtime = "edge";

export default function Home() {
  const [selectedYear, setSelectedYear] = useState("全て");
  const [selectedCollegeType, setSelectedCollegeType] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");

  // フィルター処理
  const filteredBooks: Book[] = booksData
    .map((book: Book) => {
      const filteredUniversities = book.universities.filter((uni) => {
        const matchYear =
          selectedYear === "全て" || uni.examYear.toString() === selectedYear;
        const matchType =
          selectedCollegeType === "all" || uni.type === selectedCollegeType;
        const matchSubject =
          selectedSubject === "all" || book.subject === selectedSubject;
        return matchYear && matchType && matchSubject;
      });
      return { ...book, universities: filteredUniversities };
    })
    .filter((book) => book.universities.length > 0)
    .sort((a, b) => b.universities.length - a.universities.length); // 大学数の降順

  return (
    <main className="p-4">
      <BookFilters
        selectedYear={selectedYear}
        selectedCollegeType={selectedCollegeType}
        selectedSubject={selectedSubject}
        onYearChange={setSelectedYear}
        onCollegeTypeChange={setSelectedCollegeType}
        onSubjectChange={setSelectedSubject}
      />
      <BookRanking 
        books={filteredBooks}
        filters={{
          year: selectedYear,
          collegeType: selectedCollegeType,
          subject: selectedSubject,
        }}
      />
    </main>
  );
}
