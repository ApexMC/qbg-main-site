"use client";

import MuxPlayer from "@mux/mux-player-react";

export default function VideoBanner() {
  return (
    <div className="qbg-container">
      <div className="relative aspect-[16/7] w-full overflow-hidden rounded-3xl bg-muted shadow-xl">
        <MuxPlayer
          playbackId="7yxtEMvn1sGKoc00eCO64HcL5drgzxliek02oTYLiljhU"
          autoPlay="muted"
          muted
          loop
          playsInline
          streamType="on-demand"
          className="absolute inset-0 h-full w-full"
          style={
            {
              width: "100%",
              height: "100%",
              "--media-object-fit": "cover",
              "--media-object-position": "center 30%",
              "--controls": "none",
            }
          }
        />
      </div>
    </div>
  );
}
