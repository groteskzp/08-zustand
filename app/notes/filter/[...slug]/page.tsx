import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface NotesPageProps {
  params: Promise<{ slug: string[] }>;
}

export async function generateMetadata({
  params,
}: NotesPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = slug[0] === "all" ? "All notes" : slug[0];

  return {
    title: `${tag} | NoteHub`,
    description: `Browse notes filtered by ${tag} in NoteHub.`,
    openGraph: {
      title: `${tag} | NoteHub`,
      description: `Browse notes filtered by ${tag} in NoteHub.`,
      url: `https://notehub.com/notes/filter/${slug[0]}`,
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "NoteHub",
        },
      ],
    },
  };
}

const validTags = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

export default async function NotesPage({ params }: NotesPageProps) {
  const { slug } = await params;

  const rawTag = slug[0];
  if (rawTag !== "all" && !validTags.includes(rawTag)) {
    notFound();
  }
  const tag = rawTag === "all" ? undefined : rawTag;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["notes", 1, "", tag],
    queryFn: () => fetchNotes({ page: 1, tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient tag={tag} />
    </HydrationBoundary>
  );
}
