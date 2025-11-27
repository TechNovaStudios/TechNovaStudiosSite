import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Pricing from "../pages/Pricing";
import Workflow from "../pages/Workflow";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";
import PageTransitionLoader from "../components/PageTransitionLoader";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={
                    <PageTransitionLoader>
                        <Home />
                    </PageTransitionLoader>
                } />
                <Route path="/about" element={
                    <PageTransitionLoader>
                        <About />
                    </PageTransitionLoader>
                } />
                <Route path="/services" element={
                    <PageTransitionLoader>
                        <Services />
                    </PageTransitionLoader>
                } />
                <Route path="/projects" element={
                    <PageTransitionLoader>
                        <Projects />
                    </PageTransitionLoader>
                } />
                <Route path="/pricing" element={
                    <PageTransitionLoader>
                        <Pricing />
                    </PageTransitionLoader>
                } />
                <Route path="/workflow" element={
                    <PageTransitionLoader>
                        <Workflow />
                    </PageTransitionLoader>
                } />
                <Route path="/contact" element={
                    <PageTransitionLoader>
                        <Contact />
                    </PageTransitionLoader>
                } />
            </Route>
        </Routes>
    );
}