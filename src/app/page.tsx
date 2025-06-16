import Header from "@/components/Header/Header";
import Projects from "@/components/HomepageComponent/Projects/Projects";
import Blogs from "@/components/HomepageComponent/Blogs/Blogs";
// import Footer from "./components/Shared/Footer/Footer";
// import Navbar from "./components/Shared/Navbar/Navbar";

// className="min-h-screen bg-[url('/header_bg.svg')] bg-cover bg-center bg-no-repeat bg-fixed"

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-[url('/header-bg.jpg')] dark:bg-[url('/header-bg-dark.jpg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen">
        {/* <Navbar /> */}
        <Header />
        {/* <Footer /> */}
      </div>
        <Projects />
        <Blogs />
    </div>
  );
}
