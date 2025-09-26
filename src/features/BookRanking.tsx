import React from "react";
import { Book } from "../types";
import { BookItem } from "../components/BookItem";

interface BookRankingProps {
  books: Book[];
  filters?: {
    year: string;
    collegeType: string;
    subject: string;
  };
}

const defaultFilters = {
  year: "全て",
  collegeType: "all",
  subject: "all",
};

export function BookRanking({ books, filters = defaultFilters }: BookRankingProps) {
  const filteredBooks = books.filter((book) => {
    // 科目フィルター
    if (filters.subject !== "all" && book.subject !== filters.subject) {
      return false;
    }

    // 大学フィルター
    const matchesUniversity = book.universities.some((uni) => {
      const matchYear =
        filters.year === "全て" ? true : uni.examYear.toString() === filters.year;
      const matchType =
        filters.collegeType === "all" || uni.type === filters.collegeType;
      return matchYear && matchType;
    });

    return matchesUniversity;
  });

  // 使用大学数の降順にソート
  const sortedBooks = filteredBooks.sort(
    (a, b) => b.universities.length - a.universities.length
  );
 
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-slate-700 font-semibold">
          出典数ランキング ({sortedBooks.length}冊)
        </h2>
        <div className="text-slate-500 text-sm">
          フィルター:{" "}
          {filters.year === "all" ? "全年度" : `${filters.year}年`} •{" "}
          {filters.collegeType === "all"
            ? "全大学種別"
            : filters.collegeType === "national"
              ? "国立大学"
              : "私立大学"}{" "}
          •{" "}
          {filters.subject === "all"
            ? "全科目"
            : filters.subject === "modern-japanese"
              ? "現代文"
              : filters.subject === "classical-japanese"
                ? "古文"
                : filters.subject === "chinese"
                  ? "漢文"
                  : filters.subject}
        </div>
      </div>

      {sortedBooks.length === 0 ? (
        <div className="p-8 text-center bg-slate-50 border rounded">
          <p className="text-slate-500">
            選択したフィルターに一致する書籍が見つかりません。
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {sortedBooks.map((book, index) => (
            <BookItem key={book.id} book={book} rank={index + 1} />
          ))}
        </div>
      )}
    </div>
  );
}
