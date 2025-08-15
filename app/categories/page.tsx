import React from "react";
import { Separator } from "@/components/ui/separator";
import CategoryCard from "@/components/category-card";

export default function CategoriesPage() {
  return (
    <section className="mt-16 mx-20">
      <div className="text-center">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent leading-normal pb-2">
          Categories
        </h1>
      </div>
      <div className="flex justify-center">
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </section>
  );
}
