import HeaderNav from '@/components/header-nav';//alias import
import HeroBanner from '@/Home/hero-banner';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <HeaderNav />
      <main className="flex-1">
        <HeroBanner />
      </main>
      <footer className="bg-amber-400 h-72">
        our new footer
      </footer>
    </div>
  );
}
