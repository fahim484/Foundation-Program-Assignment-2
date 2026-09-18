export default function MovieModal({ movie, onClose }) {
  const { image, name, rating, ended, runtime, genres, summary } = movie;
  const initials = name
    ?.split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div>
      <div
        className="fixed inset-0 bg-[rgba(6,4,9,0.72)] backdrop-blur-[3px] flex items-start justify-center px-4.5 py-10 overflow-y-auto z-100"
        id="modalBackdrop"
        onClick={onClose}
      >
        <div
          className="bg-surface border border-border-custom rounded-[20px] max-w-155 w-full overflow-hidden animate-[modal-in_0.18s_ease]"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modalTitle"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="relative h-47.5 flex items-end p-5.5 bg-cover"
            id="modalBanner"
            style={{
              backgroundImage: `url(${image?.original ?? image?.medium})`,
            }}
          >
            <button
              className="absolute top-3.5 right-3.5 w-8.5] h-8.5 rounded-full bg-[rgba(10,8,14,0.55)] border-none text-white text-[15px] backdrop-blur-xs flex items-center justify-center cursor-pointer"
              onClick={onClose}
              id="modalCloseX"
              aria-label="Close"
            >
              ✕
            </button>
            <span
              className="font-['Bebas_Neue',sans-serif] text-[70px] text-[rgba(255,255,255,0.92)] drop-shadow-[0_2px_14px_rgba(0,0,0,0.4)]"
              id="modalInitials"
            >
              {initials}
            </span>
          </div>
          <div className="pt-6 px-6.5 pb-7">
            <h3
              className="text-[30px] m-0 mb-3 leading-[1.05] font-bold text-text"
              id="modalTitle"
            >
              {name}
            </h3>

            <div className="flex gap-4.5 flex-wrap text-text-muted text-[13.5px] font-bold mb-4.5">
              <span
                className="flex items-center text-[#FFD98A] gap-1.5"
                id="modalRating"
              >
                ⭐ {rating?.average ?? "N/A"}
              </span>
              <span className="flex items-center gap-1.5" id="modalYear">
                📅 {ended ? ended.slice(0, 4) : "N/A"}
              </span>
              <span className="flex items-center gap-1.5" id="modalRuntime">
                ⏱️ {runtime ? `${runtime} min` : "N/A"}
              </span>
            </div>
            <div className="flex gap-2 flex-wrap mb-5" id="modalGenres">
              {genres?.map((g) => (
                <span
                  key={g}
                  className="text-[12px] font-bold px-2.5 py-1 rounded-full bg-surface-raised border border-border-custom text-text-muted"
                >
                  {g}
                </span>
              ))}
            </div>
            <p className="text-[12px] font-extrabold text-gold m-0 mb-2 uppercase tracking-wider">
              Overview
            </p>
            <div
              className="text-text text-[15px] leading-[1.65] m-0 mb-6.5"
              id="modalOverview"
              dangerouslySetInnerHTML={{
                __html: summary ?? "No overview available.",
              }}
            />
            <div className="flex justify-end gap-3">
              <button
                className="bg-surface-raised border border-border-custom text-text font-bold text-[14px] px-5.5 py-2.75 rounded-[10px] transition-colors hover:bg-red hover:border-red hover:text-white cursor-pointer"
                id="modalCloseBtn"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
