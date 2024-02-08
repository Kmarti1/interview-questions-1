"use client";
import Image from "next/image";

const getRandomImageUrl = async (): Promise<string> => {
  const response = await fetch("https://picsum.photos/200/200");
  return response.url;
};

export default function Home() {
  return <main className=""></main>;
}
