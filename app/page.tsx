import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="flex justify-center items-center mt-10">
          <div className="text-center px-6">
            <h1 className="text-primary text-4xl font-bold mb-4">Welcome!</h1>
            {/* <p className="text-secondary mb-6">Here’s my portfolio.</p>
            <button className="bg-primary hover:bg-hover text-foreground px-4 py-2 rounded">
              View Projects
            </button> */}
          </div>
        </section>

        <About />
        <Skills />
        <Projects />
        <Contact />

        <BackToTop />
      </main>
    </>
  );
}
