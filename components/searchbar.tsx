import { Search } from "lucide-react";
import { Input } from "./ui/input";

export default function SearchBar() {
  return (
    <div className="relative flex items-center group w-full">
      <Input
        type="search"
        placeholder="Search"
        className="w-full pr-10 border-0  rounded-full"
      />
      <Search className="absolute right-3 h-4 w-4 text-muted-foreground" />
    </div>
  );
}
