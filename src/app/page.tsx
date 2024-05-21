import About from "@/components/About";
import Intro from "@/components/Intro";
import SectionDivider from "@/components/SectionDivider";
import Projects from "@/components/Projects";

const Page = () => {
  return (
    <>
      <main className="flex flex-col items-center px-4 ">
        <Intro />
        <SectionDivider />
        <About />
        <Projects />
      </main>
    </>
  );
};

export default Page;
