import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { LoadingSkeleton } from "@/components/ui/loading-skeleton"
import { ImageWithPlaceholder } from "@/components/ui/image-with-placeholder"
import { ErrorBoundary } from "@/components/ui/error-boundary"
import { useEffect, useState } from "react"
import { getAboutInfo } from "@/api/portfolio"
import { generateBlurDataURL } from "@/utils/image-utils"

interface AboutInfo {
  profileImage: string
  bio: string
  approach: string
  experience: string
}

export function AboutMeSection() {
  const [aboutInfo, setAboutInfo] = useState<AboutInfo | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadAboutInfo = async () => {
      try {
        const response = await getAboutInfo()
        setAboutInfo(response.aboutInfo)
      } catch (error) {
        console.error('Error loading about info:', error)
      } finally {
        setLoading(false)
      }
    }

    loadAboutInfo()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <LoadingSkeleton className="h-12 w-48 mx-auto mb-4" variant="text" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <LoadingSkeleton className="w-full h-96 rounded-2xl" />
            <div className="space-y-4">
              <LoadingSkeleton className="h-8" variant="text" />
              <LoadingSkeleton className="h-4" variant="text" />
              <LoadingSkeleton className="h-4" variant="text" />
              <LoadingSkeleton className="h-8 mt-6" variant="text" />
              <LoadingSkeleton className="h-4" variant="text" />
              <LoadingSkeleton className="h-4" variant="text" />
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (!aboutInfo) return null

  return (
    <ErrorBoundary>
      <section className="py-20 px-6" id="about">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
              About Me
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl overflow-hidden">
                <CardContent className="p-0">
                  <ImageWithPlaceholder
                    src={aboutInfo.profileImage}
                    alt="Shannon Lockett"
                    className="w-full h-96"
                    blurDataURL={generateBlurDataURL()}
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face';
                    }}
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
                <p className="text-gray-300 leading-relaxed">
                  {aboutInfo.bio}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">My Approach</h3>
                <p className="text-gray-300 leading-relaxed">
                  {aboutInfo.approach}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Experience</h3>
                <p className="text-gray-300 leading-relaxed">
                  {aboutInfo.experience}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </ErrorBoundary>
  )
}