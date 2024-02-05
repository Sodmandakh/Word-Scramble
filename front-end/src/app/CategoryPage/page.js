"use client"

import { useState, useEffect } from "react";

export default function CategoryPage() {

  const fetchData = async () => {
    const wordData = await axios.get("http://localhost:8000/getAllWord");
  }

  useEffect(() => {

  },[])

    return (
      <div>
        <button>Random</button>
      </div>
    );
  }