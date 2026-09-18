import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main id="homeView" className="view is-active">
      <section className="relative pt-18 pb-22.5 overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(60%_55%_at_80%_10%,color-mix(in_srgb,var(--gold)_20%,transparent),transparent_60%),radial-gradient(50%_50%_at_10%_90%,color-mix(in_srgb,var(--red)_16%,transparent),transparent_60%)] pointer-events-none"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-y-0 left-0 w-6.5 bg-[repeating-linear-gradient(to_bottom,var(--stub-notch)_0_10px,transparent_10px_24px)] bg-border-custom opacity-55"
          aria-hidden="true"
        ></div>
        <div
          className="absolute inset-y-0 right-0 w-6.5 bg-[repeating-linear-gradient(to_bottom,var(--stub-notch)_0_10px,transparent_10px_24px)] bg-border-custom opacity-55"
          aria-hidden="true"
        ></div>
        <div className="max-w-295 mx-auto px-6  relative text-center ">
          <div className="inline-flex gap-1.75 mb-6.5" aria-hidden="true">
            <span className="w-1.75 h-1.75 rounded-full bg-gold shadow-[0_0_8px_1px_color-mix(in_srgb,var(--gold)_65%,transparent)]"></span>
            <span className="w-1.75 h-1.75 rounded-full bg-gold shadow-[0_0_8px_1px_color-mix(in_srgb,var(--gold)_65%,transparent)]"></span>
            <span className="w-1.75 h-1.75 rounded-full bg-gold shadow-[0_0_8px_1px_color-mix(in_srgb,var(--gold)_65%,transparent)]"></span>
          </div>
          <h1 className="font-bebas tracking-[0.01em] text-[clamp(42px,8vw,74px)] leading-[0.98] mb-5">
            Discover your <br /> next obsession
          </h1>
          <p className="text-[17px] leading-[1.6] text-text-muted max-w-120 mx-auto mb-8.5">
            Browse titles pulled from a real show catalog, search by <br />{" "}
            name, and get the full picture — ratings, genres, and story — before
            you press play.
          </p>
          
          <button
            id="heroCta"
            type="button"
            onClick={()=> navigate('/movie')}
            className="inline-flex items-center gap-2.5 bg-gold text-[#1B1300] cursor-pointer border-none font-extrabold text-[15px] px-7.5 py-3.75 rounded-full shadow-[0_10px_30px_-8px_color-mix(in_srgb,var(--gold)_55%,transparent)] transition-all duration-150 ease-out hover:-translate-y-0.5 hover:brightness-[1.06]"
          >
            Explore now
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>

          <div className="mt-14 flex gap-3.5 justify-center flex-wrap">
            <div className="flex items-center gap-2 bg-surface border border-border-custom px-4 py-2.25 rounded-full text-[13px] text-text-muted font-semibold">
              🎬 Live catalog data
            </div>
            <div className="flex items-center gap-2 bg-surface border border-border-custom px-4 py-2.25 rounded-full text-[13px] text-text-muted font-semibold">
              ⭐ Real ratings
            </div>
            <div className="flex items-center gap-2 bg-surface border border-border-custom px-4 py-2.25 rounded-full text-[13px] text-text-muted font-semibold">
              🔎 Instant search
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
