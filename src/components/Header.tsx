import React from 'react';

const Header = () => {
  return (
    <div className="text-center mb-8 pt-5">
      <h1 className="mb-2 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
        大学入試国語 出典本ランキング
      </h1>
      <p className="text-slate-600 max-w-2xl mx-auto">
        日本の主要大学の入試で使用されている人気書籍を発見しましょう。<br />
        ランキングは各大学での使用頻度に基づいています。<br />
        ※同率の場合は、順不同で表示しています。
      </p>
    </div>
  );
};

export default Header;