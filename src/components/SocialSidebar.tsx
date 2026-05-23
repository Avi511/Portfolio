import { FiGithub, FiLinkedin, FiFacebook, FiInstagram, FiMail } from "react-icons/fi";

export default function SocialSidebar() {
  return (
    <div className="flex flex-col gap-4 px-8 justify-center h-full absolute left-0 top-0 bottom-0 z-30">
      <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 group">
        <FiGithub className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 group">
        <FiLinkedin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 group">
        <FiFacebook className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 group">
        <FiInstagram className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
      </button>
      <button className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center hover:bg-white/20 transition-colors backdrop-blur-md border border-white/10 group">
        <FiMail className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}
