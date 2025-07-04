import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./components/ui/theme-provider"
import { Toaster } from "./components/ui/toaster"
import { PortfolioHeader } from "./components/portfolio/PortfolioHeader"
import { AnimatedCursor } from "./components/ui/animated-cursor"
import { ScrollProgress } from "./components/ui/scroll-progress"
import { ErrorBoundary } from "./components/ui/error-boundary"
import { Suspense, lazy } from "react"

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/Home").then(module => ({ default: module.Home })))
const Blog = lazy(() => import("./pages/Blog").then(module => ({ default: module.Blog })))
const BlogPost = lazy(() => import("./pages/BlogPost").then(module => ({ default: module.BlogPost })))
const BlankPage = lazy(() => import("./pages/BlankPage").then(module => ({ default: module.BlankPage })))

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="text-white text-lg">Loading...</div>
      </div>
    </div>
  )
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <Router>
          <div className="min-h-screen">
            <ScrollProgress />
            <AnimatedCursor />
            <PortfolioHeader />
            <main className="pt-16">
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/blog/:id" element={<BlogPost />} />
                  <Route path="*" element={<BlankPage />} />
                </Routes>
              </Suspense>
            </main>
          </div>
        </Router>
        <Toaster />
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App