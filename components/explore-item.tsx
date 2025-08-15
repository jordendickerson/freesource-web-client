import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Globe } from "lucide-react";

const ExploreItem = () => {
  return (
    <Card className="max-w-2xl w-full">
      <CardHeader className="flex flex-row items-center gap-4 px-6 pb-0">
        <Globe className="w-20 h-20 rounded-lg object-cover border" />
        <div className="flex-1">
          <CardTitle className="text-xl">compsci resource</CardTitle>
          <CardDescription>
            This is a short description of the project or resource. It gives a
            quick overview of what to expect.
          </CardDescription>
        </div>
        <div className="flex flex-col items-end gap-2 min-w-[80px]">
          <span className="text-xs text-muted-foreground">Upvotes</span>
          <span className="font-bold text-lg">123</span>
          <Button size="sm" variant="secondary">
            Upvote
          </Button>
        </div>
      </CardHeader>
      <CardContent className="pt-4 pb-2">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
            #opensource
          </span>
          <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
            #webdev
          </span>
          <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs">
            #react
          </span>
        </div>
        <Separator className="my-2" />
        <div className="flex items-center gap-3 mt-2">
          <Globe className="w-8 h-8 rounded-full border" />
          <div>
            <span className="font-medium">Jane Doe</span>
            <span className="block text-xs text-muted-foreground">
              @janedoe
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExploreItem;
