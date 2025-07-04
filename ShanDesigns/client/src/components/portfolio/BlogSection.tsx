import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import { LoadingSkeleton } from "@/components/ui/loading-skeleton"
import { ImageWithPlaceholder } from "@/components/ui/image-with-placeholder"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { useEffect, useState } from "react"
import { getBlogPosts } from "@/api/blog"
import { useNavigate } from "react-router-dom"
import { generateBlurDataURL } from "@/utils/image-utils"

interface BlogPost {
  _id: string
  title: string
  excerpt: string
  content: string
  image: string
  publishedAt: string
  category: string
  readTime: number
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const response = await getBlogPosts()
        setPosts(response.posts)
      } catch (error) {
        console.error('Error loading blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <LoadingSkeleton className="h-12 w-64 mx-auto mb-4" variant="text" />
            <LoadingSkeleton className="h-6 w-96 mx-auto" variant="text" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <LoadingSkeleton key={i} className="h-96" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <ErrorBoundary>
      <section className="py-20 px-6" id="blog">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
              Design Insights
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Thoughts, tips, and insights from the world of design and creativity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 rounded-2xl overflow-hidden h-full">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden">
                      <ImageWithPlaceholder
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 group-hover:scale-110 transition-transform duration-500"
                        blurDataURL={generateBlurDataURL()}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-gray-400 text-sm mb-3 space-x-4">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {new Date(post.publishedAt).toLocaleDateString()}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime} min read
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <Button
                        variant="ghost"
                        className="text-pink-400 hover:text-pink-300 p-0 h-auto font-medium"
                        onClick={() => navigate(`/blog/${post._id}`)}
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => navigate('/blog')}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105"
            >
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </ErrorBoundary>
  )
}