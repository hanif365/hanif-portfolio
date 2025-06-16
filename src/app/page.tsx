import Header from "@/components/Header/Header";
import Projects from "@/components/HomepageComponent/Projects/Projects";
import Blogs from "@/components/HomepageComponent/Blogs/Blogs";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/header-bg.jpg')] dark:bg-[url('/header-bg-dark.jpg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen">
        <Header />
      </div>
      <Projects />
      <Blogs />
    </div>
  );
}
