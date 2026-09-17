export default function Footer() {
  return (
    <div>
      <footer className="border-t border-border-custom py-8.5">
        <div className="max-w-295 mx-auto px-6 flex items-center justify-between flex-wrap gap-3.5 max-sm:flex-col max-sm:items-start">
          <div className="flex items-center gap-2 font-['Bebas_Neue',sans-serif] text-[19px]">
            <span className="w-2 h-2 rounded-full bg-gold" aria-hidden="true"></span> MARQUEE
          </div>
          <p className="text-text-muted text-[13px]">
            © 2026 Marquee. Catalog data via the TVMaze API.
          </p>
          <div className="flex gap-4.5">
            <a className="text-text-muted text-[13px] font-semibold no-underline hover:text-gold transition-colors" href="#">
              GitHub
            </a>
            <a className="text-text-muted text-[13px] font-semibold no-underline hover:text-gold transition-colors" href="#">
              Twitter
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
