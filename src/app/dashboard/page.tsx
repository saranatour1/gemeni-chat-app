"use client";
import { UserNavBar } from "@/components/UserNavBar";
import { Authenticated, Unauthenticated, useConvexAuth, useQuery } from "convex/react";
import { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "../../../convex/_generated/api";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PersonStandingIcon } from "lucide-react";
import { MessagesSideBar } from "@/components/MessagesSideBar";
import { ChatContent } from "@/components/ChatContent";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function page() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return (
    <>
      <Authenticated>
        <Suspense fallback={<p>loading..</p>}>
          <ResizablePanelGroup
            direction="horizontal"
            className="grid grid-flow-col grid-cols-4 !w-full h-full items-start justify-evenly py-4 min-h-[84vh]"
          >
            <MessagesSideBar />
            <ResizableHandle withHandle className="!h-full min-h-full" />
            <ChatContent />
          </ResizablePanelGroup>
        </Suspense>
      </Authenticated>
      <Unauthenticated>
        <div className="w-full h-full grid grid-flow-row place-content-center p-4 my-24 text-center">
          <p className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">Please sign in</p>
          <Link href={"/"} className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">sign in</Link>
        </div>
      </Unauthenticated>
    </>
  );
}