import React from "react";
import { Card, CardTitle, CardDescription } from "./ui/card";

export default function CategoryCard() {
  return (
    <Card className="bg-gradient-to-br from-red-700 to-red-500 w-full max-w-2xs p-6 text-center shadow-lg">
      <CardTitle className="text-3xl font-bold text-slate-100 mb-2">
        Computer Science
      </CardTitle>
      <CardDescription className="text-lg font-semibold text-slate-300">
        123 Resources
      </CardDescription>
    </Card>
  );
}
