import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/theme-toggle";
import ImageGenerator from "@/components/image-generation";

export default function PixelVerse() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 px-0 pb-0 md:p-24 md:px-0 md:pb-0">
      <section className="flex w-full flex-col items-center justify-between gap-16 p-16 md:p-12 md:px-24">
        <div className="absolute left-5 right-5 top-5 flex items-center justify-between gap-x-6 md:left-auto md:justify-normal">
          <Button variant="outline">
            <Link href="/examples">Examples</Link>
          </Button>
          <ModeToggle />
        </div>
        <header className="text-center">
          <h1 className="text-6xl font-bold md:text-7xl">
            Pixel<span className="text-primary">Verse</span>
          </h1>
          <p className="text-sm md:text-xl">
            Generate high quality images using AI 🤖
          </p>
        </header>
        <ImageGenerator />
      </section>

      <footer className="bottom-0 mt-auto flex w-screen items-center justify-center border-t-2 p-4 text-xs font-light text-muted-foreground md:w-full md:justify-start md:p-8 md:text-sm">
        <p>
          Built by{" "}
          <Link
            href="https://lakshb.me"
            target="_blank"
            rel="noopenner noreferrer"
            className="font-medium underline underline-offset-4 transition duration-150 ease-linear md:hover:text-primary">
            lakshaybhushan
          </Link>
          . The source code is available on{" "}
          <Link
            href="https://github.com/lakshaybhushan/pixelverse"
            target="_blank"
            rel="noopenner noreferrer"
            className="font-medium underline underline-offset-4 transition duration-150 ease-linear md:hover:text-primary">
            GitHub
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
