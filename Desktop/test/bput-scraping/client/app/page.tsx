"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto p-4 mt-36 flex flex-col justify-center align-middle items-center">
      <h1 className="relative z-10 text-5xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
        Join the waitlist
      </h1>
      <p></p>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        This is under development, stay tuned... will be adding more feture very
        soon
      </p>
      <Button
        size={"lg"}
        onClick={() => router.push("/roland")}
        className=" my-5"
      >
        Explore
      </Button>
    </div>
  );
};

export default page;
