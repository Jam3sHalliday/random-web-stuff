import Next from "./components/next";
import React from "./components/react";
import { ThemeSwitcher } from "./components/theme-switcher";

export default function Home() {
  return (
    <main className="w-[90vw] mx-auto pt-10">
      <h1 className="font-semibold text-2xl">react & next stuff</h1>

      <div className="mt-10 grid grid-cols-2">
        <div>
          <React />
        </div>
        <div>
          <Next />
        </div>
      </div>
    </main>
  )
}
