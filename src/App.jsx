import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Graphic from "./components/Graphic";

function App() {
    return (
        <div>
            <Navbar />

            <main className="flex-1">
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="services"><Services /></section>
                <section id="graphic"><Graphic /></section>
                <section id="projects"><Skills /></section>
                <section id="contact"><Contact /></section>
            </main>

            <Footer />
            <Chatbot />
        </div>
    );
}

export default App;
