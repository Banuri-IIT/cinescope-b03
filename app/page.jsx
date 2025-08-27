import HeaderNav from '@/components/header-nav';//alias import

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="bg-primary h-screen">
        Our main section
      </main>
      <footer className="bg-amber-400 h-72">
        our new footer
      </footer>
    </div>
  );
}
