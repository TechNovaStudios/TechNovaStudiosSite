import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Pricing from "../pages/Pricing";
import Workflow from "../pages/Workflow";
import Contact from "../pages/Contact";
import Layout from "../layout/Layout";

// Resource Pages
import Blog from "../pages/ResourceSection/Blog";
import Documentation from "../pages/ResourceSection/Documentation";
import HelpCenter from "../pages/ResourceSection/HelpCenter";
import FAQ from "../pages/ResourceSection/FAQ";

// Security & Legal Pages
import PrivacyPolicy from "../pages/Legal/Privacy";
import TermsOfService from "../pages/Legal/Terms";
import Security from "../pages/Legal/Security";
import Compliance from "../pages/Legal/Compliance"; 

import PageTransitionLoader from "../components/PageTransitionLoader";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                {/* Main Pages */}
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

                {/* Resource Routes */}
                <Route path="/blog" element={
                    <PageTransitionLoader>
                        <Blog />
                    </PageTransitionLoader>
                } />
                <Route path="/documentation" element={
                    <PageTransitionLoader>
                        <Documentation />
                    </PageTransitionLoader>
                } />
                <Route path="/help" element={
                    <PageTransitionLoader>
                        <HelpCenter />
                    </PageTransitionLoader>
                } />
                <Route path="/faq" element={
                    <PageTransitionLoader>
                        <FAQ />
                    </PageTransitionLoader>
                } />

                {/* Legal Routes */}
                <Route path="/privacy" element={
                    <PageTransitionLoader>
                        <PrivacyPolicy />
                    </PageTransitionLoader>
                } />
                <Route path="/terms" element={
                    <PageTransitionLoader>
                        <TermsOfService />
                    </PageTransitionLoader>
                } />
                <Route path="/security" element={
                    <PageTransitionLoader>
                        <Security />
                    </PageTransitionLoader>
                } />
                <Route path="/compliance" element={
                    <PageTransitionLoader>
                        <Compliance />
                    </PageTransitionLoader>
                } />
            </Route>
        </Routes>
    );
}