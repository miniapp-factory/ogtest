import { Metadata } from "next";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: "OG Esports History",
  description: "A deep dive into the milestones and legends of OG Esports.",
};

export default function OgEsportsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">OG Esports History</h1>
        <p className="mb-4">
          OG Esports has been a pioneer in the competitive gaming scene since its
          inception. This page chronicles the key events, tournaments, and
          personalities that have shaped the organization into the powerhouse it
          is today.
        </p>
        <section className="space-y-6">
          <article>
            <h2 className="text-2xl font-semibold">Founding Years</h2>
            <p>
              OG was founded in 2012 by a group of passionate gamers who
              envisioned a community-driven esports organization. Their early
              focus was on nurturing talent and fostering a collaborative
              environment.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold">Rise to Prominence</h2>
            <p>
              The breakthrough came in 2015 when OG's League of Legends team
              clinched a major championship, catapulting the organization into
              the spotlight. Subsequent successes across multiple titles
              solidified OG's reputation.
            </p>
          </article>
          <article>
            <h2 className="text-2xl font-semibold">Legacy and Impact</h2>
            <p>
              Today, OG continues to influence the esports landscape through
              innovative strategies, community engagement, and a commitment to
              player development. Their legacy is a testament to the power of
              vision and teamwork.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
