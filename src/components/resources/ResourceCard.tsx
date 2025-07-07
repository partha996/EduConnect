import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Book, Video, ClipboardCheck } from "lucide-react";
import type { Resource } from "@/lib/mock-data";

const typeIcons = {
  eBook: <Book className="h-4 w-4" />,
  Video: <Video className="h-4 w-4" />,
  Quiz: <ClipboardCheck className="h-4 w-4" />,
};

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Card className="flex flex-col overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 shadow-md hover:shadow-xl">
      <CardHeader className="p-0">
        <div className="relative">
          <Image
            src={resource.imageUrl}
            alt={resource.title}
            width={600}
            height={400}
            className="object-cover w-full h-40"
            data-ai-hint={resource.aiHint}
          />
          <Badge variant="secondary" className="absolute top-2 right-2 flex items-center gap-1">
            {typeIcons[resource.type]}
            {resource.type}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Badge variant="outline" className="mb-2">{resource.category}</Badge>
        <CardTitle className="font-headline text-lg mb-1">{resource.title}</CardTitle>
        <CardDescription className="text-sm">{resource.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </CardFooter>
    </Card>
  );
}
