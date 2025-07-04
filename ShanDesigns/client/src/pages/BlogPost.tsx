import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, Clock } from "lucide-react"
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getBlogPost } from "@/api/blog"

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

export function BlogPost() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadPost = async () => {
      if (!id) return
      
      try {
        const response = await getBlogPost(id)
        setPost(response.post)
      } catch (error) {
        console.error('Error loading blog post:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPost()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="space-y-6">
            <div className="h-8 bg-white/10 rounded animate-pulse" />
            <div className="h-64 bg-white/10 rounded-2xl animate-pulse" />
            <div className="space-y-4">
              <div className="h-4 bg-white/10 rounded animate-pulse" />
              <div className="h-4 bg-white/10 rounded animate-pulse" />
              <div className="h-4 bg-white/10 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Post not found</h1>
          <Button onClick={() => navigate('/blog')} variant="outline">
            Back to Blog
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Button
            onClick={() => navigate('/blog')}
            variant="ghost"
            className="text-pink-400 hover:text-pink-300 mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>

          <div className="mb-6">
            <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            {post.title}
          </h1>

          <div className="flex items-center text-gray-400 text-sm mb-8 space-x-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              {post.readTime} min read
            </div>
          </div>

          <div className="mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-2xl"
            />
          </div>

          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}