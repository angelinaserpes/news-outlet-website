import React from "react";

export interface ArticleCardProps {
  title: string;
  excerpt: string;
  image: string;
  alt: string;
  date: string;
  category?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, excerpt, image, alt, date, category }) => {
  return (
    <article className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-transform duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md">
      <figure className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </figure>
      <div className="space-y-3 p-4">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          {category && (
            <span className="rounded-full bg-secondary px-2 py-0.5 text-secondary-foreground">
              {category}
            </span>
          )}
          <time dateTime={date}>{new Date(date).toLocaleDateString()}</time>
        </div>
        <h3 className="text-lg font-semibold leading-snug text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{excerpt}</p>
      </div>
    </article>
  );
};

export default ArticleCard;
