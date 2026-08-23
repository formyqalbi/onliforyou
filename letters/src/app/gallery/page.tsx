import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import GalleryGrid, { type GalleryPhoto } from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Our Memories",
  description: "Every photo of us, in one place.",
};

const FOLDERS: { dir: string; category: string; label: string }[] = [
  { dir: "us", category: "us", label: "❤️" },
  { dir: "rani", category: "rani", label: "🌸" },
  { dir: "video-calls", category: "video-calls", label: "Zaidu ki Biwi" },
  { dir: "me", category: "me", label: "Zaidu" },
];

const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

function loadPhotos(): GalleryPhoto[] {
  const publicDir = path.join(process.cwd(), "public");
  const photos: GalleryPhoto[] = [];

  for (const { dir, category, label } of FOLDERS) {
    const folderPath = path.join(publicDir, dir);
    let files: string[] = [];
    try {
      files = fs.readdirSync(folderPath).filter((f) => IMAGE_EXT.test(f));
    } catch {
      continue;
    }
    files.sort();
    for (const file of files) {
      photos.push({
        src: encodeURI(`/${dir}/${file}`),
        category,
        alt: `${label} — ${file.replace(IMAGE_EXT, "")}`,
      });
    }
  }

  return photos;
}

export default function GalleryPage() {
  const photos = loadPhotos();
  const categories = FOLDERS.map(({ category, label }) => ({ category, label }));

  return <GalleryGrid photos={photos} categories={categories} />;
}
