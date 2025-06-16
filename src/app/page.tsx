import Header from "@/components/Header/Header";
import Projects from "@/components/HomepageComponent/Projects/Projects";
import Blogs from "@/components/HomepageComponent/Blogs/Blogs";
import StatsBanner from "@/components/HomepageComponent/StatsBanner/StatsBanner";

export default function Home() {
  return (
    <div className="relative">
      <div className="bg-[url('/header-bg.jpg')] dark:bg-[url('/header-bg-dark.jpg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen relative">
        <Header />
        {/* Shadow gradient for smooth transition */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 dark:from-gray-900 to-transparent"></div>
      </div>
      <StatsBanner />
      <Projects />
      <Blogs />
    </div>
  );
}
