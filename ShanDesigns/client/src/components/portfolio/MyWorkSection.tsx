import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { LoadingSkeleton } from "@/components/ui/loading-skeleton"
import { ImageWithPlaceholder } from "@/components/ui/image-with-placeholder"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { useEffect, useState } from "react"
import { getFeaturedProjects } from "@/api/portfolio"
import { generateBlurDataURL } from "@/utils/image-utils"

interface FeaturedProject {
  _id: string
  title: string
  category: string
  image: string
  description: string
}

export function MyWorkSection() {
  const [projects, setProjects] = useState<FeaturedProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await getFeaturedProjects()
        setProjects(response.projects)
      } catch (error) {
        console.error('Error loading featured projects:', error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <LoadingSkeleton className="h-12 w-64 mx-auto mb-4" variant="text" />
            <LoadingSkeleton className="h-6 w-96 mx-auto" variant="text" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <LoadingSkeleton key={i} className="h-80" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <ErrorBoundary>
      <section className="py-20 px-6" id="work">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
              My Work
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of recent projects that demonstrate creativity, innovation, and attention to detail.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden h-48">
                      <ImageWithPlaceholder
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                        blurDataURL={generateBlurDataURL()}
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6">
                      <span className="text-pink-400 text-sm font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mt-2 mb-3">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}