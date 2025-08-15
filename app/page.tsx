import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Book, BookOpen } from "lucide-react";

export default function Home() {
  return (
    <section className="flex flex-1 flex-col items-center justify-center w-full">
      <h1 className="text-6xl md:text-8xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
          free
        </span>
        source
      </h1>
      <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 text-center font-medium">
        Quality free resources for studying
      </p>
      <div className="flex items-center gap-4 mt-6">
        <Button
          size="lg"
          className="bg-red-400 hover:bg-red-500 text-white transition-all duration-500 cursor-pointer transform hover:scale-110 flex items-center gap-2"
        >
          <BookOpen className="mr-2" /> Explore
        </Button>
      </div>
    </section>
  );
}
