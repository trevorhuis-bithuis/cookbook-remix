import { useState, useEffect } from "react";

type searchBarProps = {
  setSearchText: (searchText: string) => void;
  setSelectedCategory: (selectedCategory: string) => void;
  page: number;
};

export default function SearchBar(props: searchBarProps) {
  const { setSearchText, setSelectedCategory } = props;

  const [categories, setCategories] = useState<string[]>([]);

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="mt-4 basis-1/2 mx-2">
        <label htmlFor="search" className="text-sm font-medium text-gray-700">
          Search
        </label>
        <div className="relative">
          <input
            type="text"
            name="search"
            id="search"
            className="block w-full border-gray-300 p-2 border rounded-md pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>
      {/* <div className="mt-4 basis-1/4">
        <label htmlFor="category" className="text-sm font-medium text-gray-700">
          Category
        </label>
        <select
          id="category"
          name="category"
          className="w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All</option>
          {categories!.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div> */}

      <div className="mt-10 basis-1/4">
        <button
          type="submit"
          className="inline-flex items-center mx-2 px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Search
        </button>
      </div>
    </div>
  );
}
