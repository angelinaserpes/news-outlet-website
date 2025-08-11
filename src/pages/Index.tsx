import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ArticleCard from "@/components/site/ArticleCard";
import newsHero from "@/assets/news-hero.jpg";
import newsHero2 from "@/assets/news-hero-2.jpg";
import newsHero3 from "@/assets/news-hero-3.jpg";
import newsHero4 from "@/assets/news-hero-4.jpg";
import sportsImg from "@/assets/sports.jpg";
import sportsImg2 from "@/assets/sports-2.jpg";
import sportsImg3 from "@/assets/sports-3.jpg";
import sportsImg4 from "@/assets/sports-4.jpg";
import cultureImg from "@/assets/culture.jpg";
import cultureImg2 from "@/assets/culture-2.jpg";
import cultureImg3 from "@/assets/culture-3.jpg";
import cultureImg4 from "@/assets/culture-4.jpg";
import businessImg from "@/assets/business.jpg";
import businessImg2 from "@/assets/business-2.jpg";
import businessImg3 from "@/assets/business-3.jpg";
import businessImg4 from "@/assets/business-4.jpg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const marketData = [
  { name: "Mon", value: 4012 },
  { name: "Tue", value: 3980 },
  { name: "Wed", value: 4055 },
  { name: "Thu", value: 4100 },
  { name: "Fri", value: 4072 },
];

const sampleArticles = {
  news: [
    {
      title: "Global Markets Steady as Central Banks Signal Patience",
      excerpt:
        "Investors weigh inflation data against careful policy messaging across major economies.",
      image: newsHero,
      alt: "Editorial newsroom desk with documents and laptop",
      date: new Date().toISOString(),
      category: "News",
    },
    {
      title: "Regional Infrastructure Plan Advances to Next Stage",
      excerpt:
        "The proposal aims to modernize transit while maintaining fiscal discipline, officials say.",
      image: newsHero2,
      alt: "City skyline at dusk representing global news",
      date: new Date().toISOString(),
      category: "News",
    },
    {
      title: "Policy Briefing: Energy Security and Grid Modernization",
      excerpt:
        "Analysts outline timelines for capacity upgrades alongside efficiency incentives.",
      image: newsHero3,
      alt: "Press conference microphones on a podium",
      date: new Date().toISOString(),
      category: "News",
    },
    {
      title: "Health Officials Track Seasonal Trends Across Regions",
      excerpt:
        "Local agencies coordinate messaging and resource allocation as cases fluctuate.",
      image: newsHero4,
      alt: "Stack of newspapers on a table",
      date: new Date().toISOString(),
      category: "News",
    },
  ],
  sports: [
    {
      title: "Late Surge Lifts Home Side in Tight League Contest",
      excerpt:
        "A disciplined second-half performance proved decisive in front of a capacity crowd.",
      image: sportsImg,
      alt: "Close-up of football on stadium turf",
      date: new Date().toISOString(),
      category: "Sports",
    },
    {
      title: "Rising Prospects Earn International Call-Ups",
      excerpt:
        "Selectors emphasize consistency and preparation ahead of the summer fixtures.",
      image: sportsImg2,
      alt: "Running track lanes under stadium lights",
      date: new Date().toISOString(),
      category: "Sports",
    },
    {
      title: "Preview: Tactical Matchups Shape Weekend Slate",
      excerpt:
        "Coaches highlight set-piece execution and transition defense as key levers.",
      image: sportsImg3,
      alt: "Basketball court hardwood with ball",
      date: new Date().toISOString(),
      category: "Sports",
    },
    {
      title: "Interview: Veteran Captain on Leadership and Balance",
      excerpt:
        "Maintaining standards while integrating youth remains the focus, he says.",
      image: sportsImg4,
      alt: "Swimming pool lanes with ripples",
      date: new Date().toISOString(),
      category: "Sports",
    },
  ],
  culture: [
    {
      title: "New Exhibition Explores Rhythm of Urban Life",
      excerpt:
        "Curators balance archival photography with contemporary installations in a focused survey.",
      image: cultureImg,
      alt: "Minimal art gallery interior",
      date: new Date().toISOString(),
      category: "Culture",
    },
    {
      title: "Festival Returns with Chamber Performances and Talks",
      excerpt:
        "Organizers highlight accessibility and collaboration across local institutions.",
      image: cultureImg2,
      alt: "Red theater curtain and empty seats",
      date: new Date().toISOString(),
      category: "Culture",
    },
    {
      title: "Review: A Poised Adaptation Finds Quiet Power",
      excerpt:
        "Measured pacing and a restrained score underline the film’s reflective tone.",
      image: cultureImg3,
      alt: "Classical orchestra instruments on stage",
      date: new Date().toISOString(),
      category: "Culture",
    },
    {
      title: "Gallery Talk: Preserving the Photographic Archive",
      excerpt:
        "Conservators discuss long-term storage and digitization strategies.",
      image: cultureImg4,
      alt: "Sculpture in modern museum hall",
      date: new Date().toISOString(),
      category: "Culture",
    },
  ],
  business: [
    {
      title: "Earnings Season Opens with Mixed Guidance",
      excerpt:
        "Executives cite selective hiring and disciplined capital allocation into year-end.",
      image: businessImg,
      alt: "Financial newspaper and glasses on desk",
      date: new Date().toISOString(),
      category: "Business",
    },
    {
      title: "Logistics Networks Adapt to Shifting Demand",
      excerpt:
        "Shipping schedules see incremental improvements amid continued inventory normalization.",
      image: businessImg2,
      alt: "Stock market tickers on digital board",
      date: new Date().toISOString(),
      category: "Business",
    },
    {
      title: "Hiring Snapshot: Skills Gap Narrows in Key Sectors",
      excerpt:
        "Targeted training programs align with regional growth initiatives, survey shows.",
      image: businessImg3,
      alt: "Office skyline with glass towers",
      date: new Date().toISOString(),
      category: "Business",
    },
    {
      title: "Brief: Currency Moves Steady Ahead of Data Releases",
      excerpt:
        "Traders remain cautious with light positioning into the weekend.",
      image: businessImg4,
      alt: "Calculator with printed financial charts",
      date: new Date().toISOString(),
      category: "Business",
    },
  ],
};

const Index = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'News Outlet',
    url: '/',
    logo: '/lovable-uploads/a051209b-7855-49d3-a092-2dade21ca186.png',
  };

  return (
    <>
      <Header />
      <main>
        <section className="relative border-b bg-card">
          <div className="container grid gap-8 py-12 md:grid-cols-2 md:py-16">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                Essential reporting with clarity and context
              </h1>
              <p className="text-muted-foreground md:text-lg">
                Neutral, professional coverage across news, sports, culture and business.
              </p>
            </div>
            <figure className="overflow-hidden rounded-lg border">
              <img
                src={newsHero}
                alt="Newsroom editorial desk"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </figure>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <header className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Top Stories</h2>
          </header>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[sampleArticles.news[0], sampleArticles.sports[0], sampleArticles.culture[0], sampleArticles.business[0]].map(
              (a, i) => (
                <ArticleCard key={`top-${i}`} {...a} />
              )
            )}
          </div>
        </section>

        <section id="news" className="container py-12 md:py-16">
          <header className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold">News</h2>
            <a href="#news" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              View all
            </a>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleArticles.news.map((a, i) => (
              <ArticleCard key={`news-${i}`} {...a} />
            ))}
          </div>
        </section>

        <section id="sports" className="container py-12 md:py-16">
          <header className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Sports</h2>
            <a href="#sports" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              View all
            </a>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleArticles.sports.map((a, i) => (
              <ArticleCard key={`sports-${i}`} {...a} />
            ))}
          </div>
        </section>

        <section id="culture" className="container py-12 md:py-16">
          <header className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Culture</h2>
            <a href="#culture" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              View all
            </a>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sampleArticles.culture.map((a, i) => (
              <ArticleCard key={`culture-${i}`} {...a} />
            ))}
          </div>
        </section>

        <section id="business" className="container py-12 md:py-16">
          <header className="mb-6 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Business</h2>
            <a href="#business" className="text-sm text-foreground/70 hover:text-foreground transition-colors">
              View all
            </a>
          </header>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2 grid gap-6 sm:grid-cols-2">
              {sampleArticles.business.map((a, i) => (
                <ArticleCard key={`business-${i}`} {...a} />
              ))}
            </div>
            <aside className="rounded-lg border bg-card p-4 shadow-sm">
              <h3 className="mb-4 text-sm font-medium text-foreground/80">Market trend (weekly)</h3>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={marketData} margin={{ left: 6, right: 6, top: 6, bottom: 6 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} domain={[3800, 4200]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="hsl(var(--foreground))" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                Source: Aggregated market data. For illustration only.
              </p>
            </aside>
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <header className="mb-6">
            <h2 className="text-2xl font-bold">Editors’ Picks</h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[sampleArticles.culture[2] || sampleArticles.culture[0], sampleArticles.news[1], sampleArticles.business[1], sampleArticles.sports[1]].map(
              (a, i) => (
                <ArticleCard key={`picks-${i}`} {...a} />
              )
            )}
          </div>
        </section>

        <section className="container py-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <aside className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-xl font-semibold">Most Read</h3>
              <ol className="space-y-3 text-sm">
                {[
                  "How regional hubs are reshaping tech employment",
                  "Five charts that explain this week’s market moves",
                  "Inside the rehearsal rooms of a landmark revival",
                  "What coaches say about the next generation of stars",
                  "A practical guide to navigating interest rates",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs text-secondary-foreground">
                      {i + 1}
                    </span>
                    <span className="text-foreground/80 hover:text-foreground transition-colors cursor-pointer">
                      {item}
                    </span>
                  </li>
                ))}
              </ol>
            </aside>

            <aside className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">Newsletter</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Weekly highlights and essential context, straight to your inbox.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thanks for subscribing!");
                }}
                className="flex flex-col gap-3 sm:flex-row"
                aria-label="Subscribe to newsletter"
              >
                <Input type="email" placeholder="you@example.com" required aria-label="Email address" />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="mt-2 text-xs text-muted-foreground">No spam. Unsubscribe anytime.</p>
            </aside>
          </div>
        </section>
      </main>
      <Footer />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </>
  );
};

export default Index;
