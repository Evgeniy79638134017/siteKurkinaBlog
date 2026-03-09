export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-bg-main px-4">
      <h1 className="font-heading text-5xl font-bold text-text-primary">
        Ольга Куркина
      </h1>
      <p className="font-body text-xl text-text-secondary">
        Сайт в разработке
      </p>
      <div className="flex gap-6">
        <div
          className="h-16 w-16 rounded-full bg-accent"
          title="Sage Green (#96AB88)"
        />
        <div
          className="h-16 w-16 rounded-full bg-cta"
          title="Терракота (#D08C60)"
        />
        <div
          className="h-16 w-16 rounded-full bg-bg-warm"
          title="Тёплый бежевый (#F4E1C4)"
        />
      </div>
    </div>
  );
}
