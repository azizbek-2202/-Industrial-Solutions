"use client";

import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export default function VideoSection() {
    const [open, setOpen] = useState(false);

    return (
        <section className="relative w-full h-[94vh] overflow-hidden flex items-center justify-center bg-black">
            {/* Background video */}
            <video
                className="absolute inset-0 w-full h-full object-cover opacity-70"
                src="/videos/factory-promo.mp4"
                autoPlay
                loop
                muted
                playsInline
            />

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />

            {/* Play button */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <button
                        className="relative z-10 flex items-center justify-center w-20 h-20 rounded-full bg-white/90 hover:bg-white transition-all shadow-lg"
                        aria-label="Play video"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-8 h-8 text-red-500 ml-1"
                        >
                            <polygon points="8,5 8,19 19,12" />
                        </svg>
                    </button>
                </DialogTrigger>

                <DialogContent
                    className="
      !max-w-none
      w-[900px]
      h-[550px]
      p-0
      bg-black
      overflow-hidden
      rounded-2xl
      flex
      items-center
      justify-center
    "
                >
                    <VisuallyHidden>
                        <DialogTitle>NamanganMash promo video</DialogTitle>
                    </VisuallyHidden>

                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/AQF2YTB6Dvc?autoplay=1&rel=0"
                        title="NamanganMash promo video"
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                    />
                </DialogContent>
            </Dialog>
        </section>
    );
}
