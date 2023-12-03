"use client";

import Typewriter from "typewriter-effect";

export default function TypeWritterCustom() {
  return (
    <Typewriter
      options={{
        strings: [
          "expériences",
          "soirées",
          "événements",
          "conférences",
          "activités",
          "animations",
        ],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
