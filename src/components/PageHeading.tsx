type PageHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
};

export default function PageHeading({ index, eyebrow, title, description }: PageHeadingProps) {
  return (
    <header className="interior-heading">
      <p className="page-kicker"><span>{index}</span><span aria-hidden="true">/</span>{eyebrow}</p>
      <h1
        id={`${title.toLowerCase()}-title`}
        className={`interior-title${title.length > 8 ? ' interior-title--long' : ''}`}
      >
        {title}<span className="heading-period">.</span>
      </h1>
      <p className="interior-lede">{description}</p>
    </header>
  );
}
