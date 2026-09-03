"use client";

import MuxPlayer from "@mux/mux-player-react";

export default function VideoBanner() {
  return (
    <section className="border-y border-zinc-200 dark:border-zinc-900 w-full bg-zinc-900 dark:bg-zinc-950">
      <div className="relative w-full overflow-hidden" style={{ paddingBottom: "25%" }}>
        <MuxPlayer
          playbackId="gB2bKs6WV8dbU2AKlmzzSDkTtLNtf7UB4jVQrNqKMAA"
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
    </section>
  );
}