interface PageHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  sub: React.ReactNode;
  /** Optional action row (buttons) rendered below the subtitle. */
  children?: React.ReactNode;
}

/** Shared navy page header used by About, Contact, and Hire. */
export default function PageHeader({ eyebrow, title, sub, children }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-header__inner">
        <div className="page-header__eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="page-header__sub">{sub}</p>
        {children}
      </div>
    </header>
  );
}
