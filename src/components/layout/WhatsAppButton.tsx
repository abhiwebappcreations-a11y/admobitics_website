import React from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  const url = `https://wa.me/${siteConfig.contact.whatsappRaw}?text=${encodeURIComponent(
    siteConfig.whatsappMessages.general
  )}`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Admobitics on WhatsApp"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full shadow-lg shadow-black/20 hover:shadow-xl transition-all touch-press group"
      >
        <MessageCircle className="w-5 h-5 fill-white text-[#25D366] group-hover:scale-110 transition-transform" />
        <span className="text-xs sm:text-sm font-semibold tracking-wide">
          Chat With Us
        </span>
      </a>
    </aside>
  );
}
