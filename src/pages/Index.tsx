import Header from "@/components/site/Header";
import Footer from "@/components/site/Footer";
import ArticleCard from "@/components/site/ArticleCard";
import newsHero from "@/assets/news-hero.jpg";
import sportsImg from "@/assets/sports.jpg";
import cultureImg from "@/assets/culture.jpg";
import businessImg from "@/assets/business.jpg";
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
      image: newsHero,
      alt: "Desk with papers and laptop in neutral tones",
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
      image: sportsImg,
      alt: "Neutral editorial sports image",
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
      image: cultureImg,
      alt: "Neutral editorial culture image",
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
      image: businessImg,
      alt: "Neutral editorial business image",
      date: new Date().toISOString(),
      category: "Business",
    },
  ],
  related: [
    {
      title: "Perspective: Building Trust in Data-Driven Policy",
      excerpt:
        "Clear communication and consistent standards remain essential for long-term confidence.",
      image: newsHero,
      alt: "Neutral editorial image",
      date: new Date().toISOString(),
      category: "Analysis",
    },
  ],
};

const Index = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'News Outlet',
    url: '/',
    logo: '/lovable-uploads/logo.png',
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

        <section id="related" className="container py-12 md:py-16">
          <header className="mb-6">
            <h2 className="text-2xl font-bold">Related</h2>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sampleArticles.related.map((a, i) => (
              <ArticleCard key={`related-${i}`} {...a} />
            ))}
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
