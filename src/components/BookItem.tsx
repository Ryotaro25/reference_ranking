import React, {useState} from 'react';
import { Book } from "../types";

interface BookItemProps {
  book: Book;
  rank: number;
}

export function BookItem({ book, rank }: BookItemProps) {
  const usageCount = book.universities.length;
  const [showAllUniversities, setShowAllUniversities] = useState(false);

  return (
    <div className="flex gap-4 p-4 border rounded-lg bg-white hover:shadow-md transition-shadow">
      {/* 本の画像 */}
      {book.amazonUrl ? (
        <a href={book.amazonUrl} target="_blank" rel="noopener noreferrer">
          {book.imageUrl && (
            <img
              src={book.imageUrl}
              alt={book.title}
              className="w-24 h-32 object-cover rounded"
            />
          )}
          {!book.imageUrl && (
            <div className="w-24 h-32 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-gray-500 text-sm">No Image</span>
            </div>
          )}
        </a>
      ) : (
        <div className="w-24 h-32 bg-gray-200 flex items-center justify-center rounded">
          <span className="text-gray-500 text-sm">No Image</span>
        </div>
      )}

      {/* 本の情報 */}
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-lg font-bold text-blue-600">#{rank}</div>
          <h3 className="text-lg font-semibold text-slate-800">
            {book.amazonUrl ? (
              <a
              href={book.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {book.title}
            </a>
            ) : (
              book.title
            )}
          </h3>
        </div>

        <p className="text-slate-600 mb-2">
          {book.author} • 科目:{" "}
          {book.subject === "modern-japanese"
            ? "現代文"
            : book.subject === "classical-japanese"
              ? "古文"
              : book.subject === "chinese"
                ? "漢文"
                : book.subject}
        </p>

        <p className="text-slate-700 mb-2">
          使用大学数:{" "}
          <span className="font-semibold text-teal-600">{usageCount}校</span>
        </p>

       <div className="flex flex-wrap gap-2 text-sm text-slate-600">
          {(showAllUniversities ? book.universities : book.universities.slice(0, 3)).map((uni, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-slate-100 rounded border border-slate-200"
            >
              {uni.name}（{uni.faculty} • {uni.examYear}）
            </span>
          ))}
          {book.universities.length > 3 && !showAllUniversities && (
            <span
              className="px-2 py-1 text-slate-500 cursor-pointer underline"
              onClick={() => setShowAllUniversities(true)}
            >
              他 {book.universities.length - 3} 校を表示
            </span>
          )}
          {book.universities.length > 3 && showAllUniversities && (
            <span
              className="px-2 py-1 text-slate-500 cursor-pointer underline"
              onClick={() => setShowAllUniversities(false)}
            >
              一部のみ表示
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
