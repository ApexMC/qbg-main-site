"use client";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function TestimonialCard({
  member,
}: {
  member: {
    name: string;
    message: string;
    img: string;
  };
}) {
  return (
    <Card className="w-85 border border-zinc-200 dark:border-zinc-800">
        <CardContent className="py-2">
            "{member.message}"
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-2 px-8">
            <Image
                src={member.img}
                alt={member.name}
                width={40}
                height={40}
                className="h-auto w-10 rounded-full"
            />
            <p className="text-sm font-medium">
                {member.name}
            </p>
        </CardFooter>
    </Card>
  );
}

export default TestimonialCard;