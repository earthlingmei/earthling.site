import { useEffect, useState } from "react";

export default function Fortune() {
  const [fortune, setFortune] = useState("");

  useEffect(() => {
    fetch("/fortunes.json")
      .then((res) => res.json())
      .then((data) => {
        const fortunes = data.fortunes;
        const random = fortunes[Math.floor(Math.random() * fortunes.length)];
        setFortune(random);
      })
      .catch((err) => {
        console.error("Failed to load fortunes:", err);
        setFortune("Your wisdom is loading slowly today...");
      });
  }, []);

  return <div className="fortune-text">{fortune || "Loading..."}</div>;
}
