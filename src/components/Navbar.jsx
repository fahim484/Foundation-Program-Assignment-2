import { Link } from "react-router";

export default function Navbar() {
  return (
    <div>
      <header className="sticky top-0 z-40 backdrop-blur-[10px] border-b border-(--border) bg-[color-mix(in_srgb,var(--bg)_88%,transparent)]">
        <div className="max-w-295 mx-auto px-6 flex items-center justify-between h-16">
          <Link to="/">
            <button className="flex items-center gap-5 font-['Bebas_Neue',sans-serif] text-[26px] tracking-[0.03em] cursor-pointer bg-none border-none text-(--text) p-0 w-2.5 h-2.5 rounded-full bg-(--gold) shadow-[0_0_10px_2px_color-mix(in_srgb,var(--gold)_70%,transparent)]" id="logoBtn" aria-label="Marquee home">
              <span className="w-2.5 h-2.5 rounded-full bg-(--gold) shadow-[0_0_10px_2px_color-mix(in_srgb,var(--gold)_70%,transparent)]" aria-hidden="true"></span> MARQUEE
            </button>
          </Link>
          <nav className="hidden sm:flex items-center gap-7">
            <Link to="/">
              <button className="hidden sm:block bg-transparent border-none text-gold font-semibold cursor-pointer text-[15px] px-0.5 py-2 border-b-2 border-gold hover:text-text transition-colors duration-150 ease-in-out" id="navHome">
                Home
              </button>
            </Link>
            <Link to="/movie">
              <button className="hidden sm:block bg-transparent border-none text-gold font-semibold cursor-pointer text-[15px] px-0.5 py-2 border-b-2 border-gold hover:text-text transition-colors duration-150 ease-in-out" id="navMovies">
                Movies
              </button>
            </Link>
            <Link to="/movie">
              <button className="bg-gold text-[#1B1300] border-none font-extrabold cursor-pointer text-[14px] px-4.5 py-2.5 rounded-full transition-transform duration-150 ease-in-out hover:brightness-105 hover:-translate-y-px" id="navCta">
                Browse movies
              </button>
            </Link>
            <button
              className="theme-toggle"
              id="themeToggle"
              aria-label="Toggle color theme"
              title="Toggle theme"
            >
              ◐
            </button>
          </nav>
        </div>
      </header>
    </div>
  );
}
