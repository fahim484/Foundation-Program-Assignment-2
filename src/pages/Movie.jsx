import { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Movie() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log("Fetch error:", err));
  }, []);

  console.log(data);

  return (
    <main id="listingView" className="view">
      <div className="max-w-295 mx-auto px-6">
        <div className="pt-11 pb-7 text-center">
          <h2 className="text-[clamp(34px,6vw,50px)] mb-2.5">
            Browse the collection
          </h2>
          <p className="text-text-muted m-0 text-[15px]">
            Search by title or filter by genre to find something worth watching.
          </p>
        </div>

        <div className="max-w-140 mx-auto mb-10">
          <div className="flex items-center gap-3 bg-surface border border-border-custom rounded-full py-1.5 pr-2 pl-5 transition-[border-color,box-shadow] duration-150 ease-out focus-within:border-gold focus-within:shadow-[0_0_0_4px_color-mix(in_srgb,var(--gold)_18%,transparent)]">
            <svg
              className="flex-none text-text-muted"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
            <input
              type="text"
              id="searchInput"
              placeholder="Search for a movie…"
              className="flex-1 bg-transparent outline-none text-text text-[15px] py-3 min-w-0 placeholder:text-text-muted"
              aria-label="Search for a movie"
            />

            <button
              className="bg-surface-raised border border-border-custom text-text-muted w-7.5 h-7.5 rounded-full text-[13px] flex-none hidden items-center justify-center cursor-pointer"
              id="searchClear"
              aria-label="Clear search"
            >
              ✕
            </button>
          </div>
          <div
            className="flex gap-2.5 justify-center flex-wrap mt-4"
            id="filterRow"
          ></div>
        </div>

        <p
          className="text-center text-text-muted text-[13px] -mt-2.5 mb-6.5"
          id="resultCount"
        ></p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6.5 pb-22.5">
          {data.map((movie) => (
            <Card
              image={movie.image.medium}
              title={movie.name}
              date={movie.ended}
              rating={movie.rating.average}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
