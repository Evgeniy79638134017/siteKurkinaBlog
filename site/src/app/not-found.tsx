import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-sage text-6xl font-display mb-4">404</p>
        <h1 className="font-display text-3xl text-dark mb-4">
          Страница не найдена
        </h1>
        <p className="text-muted mb-8">
          Возможно, страница была перемещена или удалена.
        </p>
        <Link
          href="/"
          className="inline-block bg-sage text-white px-8 py-3 rounded-full font-sans font-medium hover:bg-sage-dark transition-colors"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
