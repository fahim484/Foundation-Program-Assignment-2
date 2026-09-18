import { useState } from "react";
import "./Card.css";



export default function Card({image, title, date, rating }) {
  const [member, setMember] = useState("");

  const handleClick = (memberName) => {
    // console.log("Greetings " + memberName);
    setMember(memberName);
  };

  // console.log("Member Name: ",member);

  return (
    <>
      <div onClick={() => handleClick(name)} className="bg-surface border border-border-custom rounded-2xl overflow-hidden flex flex-col transition-[transform,box-shadow,border-color] duration-180 ease-out hover:-translate-y-1.25 hover:border-[color-mix(in_srgb,var(--gold)_45%,var(--border))] hover:shadow-[0_18px_34px_-14px_var(--shadow)]">
        <div style={{ backgroundImage: `url(${image})`, }}  className="relative aspect-2/3 flex items-end p-3.5 bg-no-repeat bg-contain bg-center">
        <div className="absolute top-3 right-3 bg-[rgba(10,8,14,0.55)] backdrop-blur-xs text-[#FFD98A] text-[12px] font-extrabold px-2.25 py-1.25 rounded-full flex items-center gap-1">⭐ {rating}</div>
        <span className="font-['Bebas_Neue',sans-serif] text-[44px] text-[rgba(255,255,255,0.9)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"></span>
        </div>


        <div className="pt-4 px-4 pb-4.5 flex flex-col gap-2.5 flex-1 relative">
          <h3 className="text-[18px] font-bold leading-tight m-0 text-text">{title}</h3>
          <div><span>⭐ {rating}</span> <span>📅 {date}</span></div>
          <button className="mt-auto bg-surface-raised border border-border-custom text-text font-bold text-[13.5px] py-2.75 px-3.5 rounded-[10px] text-center transition-[background-color,border-color] duration-150 ease-out hover:bg-gold hover:border-gold hover:text-[#1B1300] cursor-pointer" type="button">See details</button>
        </div>
        {/* {member && <p>Member Name: {member}</p>} */}
      </div>
    </>
  );
}