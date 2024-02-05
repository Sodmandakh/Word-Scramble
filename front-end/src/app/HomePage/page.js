"use client"

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter()
    return (
      <div>
        <h1>Word Scramble</h1>
        <button onClick={() => router.push("/CategoryPage")}>Play</button>
      </div>
    );
  }