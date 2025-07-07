import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Mentor } from "@/lib/mock-data";
import { Badge } from "@/components/ui/badge";
import { MessageSquare } from "lucide-react";

export function MentorCard({ mentor }: { mentor: Mentor }) {
  return (
    <Card className="text-center flex flex-col">
      <CardHeader>
        <Avatar className="h-24 w-24 mx-auto mb-2 border-4 border-primary/20">
          <AvatarImage src={mentor.avatarUrl} alt={mentor.name} data-ai-hint={mentor.aiHint} />
          <AvatarFallback>{mentor.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="font-headline">{mentor.name}</CardTitle>
        <Badge variant="secondary" className="mx-auto w-fit">{mentor.expertise}</Badge>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription>{mentor.bio}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          <MessageSquare className="mr-2 h-4 w-4" />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
}
