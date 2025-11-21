import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="flex justify-center items-center mt-10">
          <div className="text-center px-6">
            <h1 className="text-primary text-4xl font-bold mb-4">Welcome!</h1>
            <p className="text-secondary mb-6">Here’s my portfolio.</p>
            <button className="bg-primary hover:bg-hover text-foreground px-4 py-2 rounded">
              View Projects
            </button>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <About />
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <Projects />
        </section>

        <section className="max-w-5xl mx-auto px-6 py-20">
          <Contact />
        </section>

        
      </main>
    </>
  );
}
