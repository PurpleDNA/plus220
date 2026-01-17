import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-3 md:px-12 bg-black/20 backdrop-blur-md border-b border-white/20">
      <div className="flex items-center gap-2">
        <Image
          src="/assets/HeroHeader/DefaultLogo.png"
          alt="plus220 logo"
          width={40}
          height={40}
          className="w-16 h-16 object-contain"
        />
      </div>
      <a href="https://t.me/plus220_studio" target="_blank">
        <Button
          variant="ghost"
          className="bg-white text-[#2349B6] hover:bg-white/90 px-3 md:px-6 py-2.5 rounded-full transition-all text-xs [box-shadow:rgb(204,219,232)_0px_3px_6px_0px_inset,rgba(255,255,255,0.5)_0px_-3px_6px_1px_inset] "
        >
          <Image
            src="/assets/HeroHeader/message button icon.png"
            alt="message icon"
            width={16}
            height={16}
            className="w-4 h-4"
          />
          Drop a message
        </Button>
      </a>
    </header>
  );
}
