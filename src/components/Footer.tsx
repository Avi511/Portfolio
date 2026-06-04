import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-white/10 bg-[#0a0a0a] flex flex-col items-center justify-center gap-4 z-10 relative">
      <div className="text-[1.5rem] font-extrabold tracking-[0.5px] text-white">Avishka.</div>
      <p className="text-white/40 text-sm">
        © {new Date().getFullYear()} Avishka Medagamagodage. All rights reserved.
      </p>
    </footer>
  );
}
