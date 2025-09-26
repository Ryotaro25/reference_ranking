'use client'
import React, { useState } from 'react';

const DeveloperButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 px-3 py-1 bg-slate-800 hover:bg-slate-700 text-white rounded-md transition-colors duration-200 shadow-lg"
      >
        ?
      </button>

      {isOpen && (
        <div className="fixed top-14 left-4 z-50 w-72 p-4 bg-white rounded-lg shadow-lg border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800">サイト情報</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              ×
            </button>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            このサイトは大学入試国語の出典本をランキング形式で紹介しています。
            年度・大学・科目での絞り込み機能を備えています。
            <br />
             <strong>Amazonのアソシエイトとして、適格販売により収入を得ています。</strong>
          </p>
          <div className="mb-3">
            <p className="text-sm text-gray-800 font-medium">制作者:</p>
            <a
            href="https://x.com/ryo_krkrkr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm text-blue-600 hover:underline"
          >
            
            Ryotaro
          </a>
            <p>ご意見・ご要望はこちらにてお願いいたします。</p>
          </div>
          
        </div>
      )}
    </>
  );
};

export default DeveloperButton;
