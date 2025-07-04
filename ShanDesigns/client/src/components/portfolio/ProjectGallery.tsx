import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { LoadingSkeleton } from "@/components/ui/loading-skeleton"
import { ImageWithPlaceholder } from "@/components/ui/image-with-placeholder"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { useEffect, useState } from "react"
import { getGalleryProjects } from "@/api/portfolio"
import { generateBlurDataURL } from "@/utils/image-utils"

interface GalleryProject {
  _id: string
  title: string
  category: string
  image: string
  largeImage: string
}

export function ProjectGallery() {
  const [projects, setProjects] = useState<GalleryProject[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const response = await getGalleryProjects()
        setProjects(response.projects)
      } catch (error) {
        console.error('Error loading gallery projects:', error)
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <LoadingSkeleton key={i} variant="image" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <ErrorBoundary>
      <section className="py-20 px-6" id="gallery">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore a curated collection of design projects showcasing versatility and creative excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project._id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="group cursor-pointer bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 rounded-2xl overflow-hidden aspect-square">
                      <CardContent className="p-0 relative h-full">
                        <ImageWithPlaceholder
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full group-hover:scale-110 transition-transform duration-500"
                          blurDataURL={generateBlurDataURL()}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-6 text-white">
                            <span className="text-pink-400 text-sm font-medium uppercase tracking-wide">
                              {project.category}
                            </span>
                            <h3 className="text-lg font-bold mt-1">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl bg-white/95 backdrop-blur-md border-white/20">
                    <div className="relative">
                      <ImageWithPlaceholder
                        src={project.largeImage}
                        alt={project.title}
                        className="w-full h-auto rounded-lg"
                        loading="eager"
                        blurDataURL={generateBlurDataURL()}
                      />
                      <div className="mt-4">
                        <span className="text-pink-600 text-sm font-medium uppercase tracking-wide">
                          {project.category}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900 mt-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}