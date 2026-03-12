import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F7F0E6] flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-[#96AB88] text-6xl font-display mb-4">404</p>
        <h1 className="font-display text-3xl text-[#2C1810] mb-4">
          Страница не найдена
        </h1>
        <p className="text-[#6B5B52] mb-8">
          Возможно, страница была перемещена или удалена.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#96AB88] text-white px-8 py-3 rounded-full font-sans font-medium hover:bg-[#7A9270] transition-colors"
        >
          На главную
        </Link>
      </div>
    </main>
  );
}
