import { Scan } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="relative z-30 flex w-full items-center justify-between px-8 py-6">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full">
          <Scan className="w-6 h-6 text-black" />
        </div>
        <span className="text-white text-2xl font-bold tracking-tight">echelon</span>
      </div>
      
      <div className="flex items-center gap-8 bg-white/10 backdrop-blur-md rounded-full p-2 pr-6 border border-white/10">
        <div className="bg-white text-black px-6 py-2 rounded-full font-medium">
          Home
        </div>
        <button className="text-white hover:text-gray-300 font-medium transition-colors text-sm">Connections</button>
        <button className="text-white hover:text-gray-300 font-medium transition-colors text-sm">Contacts</button>
      </div>
    </nav>
  );
}
