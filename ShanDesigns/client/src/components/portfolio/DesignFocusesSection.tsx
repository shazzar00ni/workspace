import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Palette, Printer, Brush } from "lucide-react"
import { useEffect, useState } from "react"
import { getDesignServices } from "@/api/portfolio"

interface DesignService {
  _id: string
  title: string
  description: string
  icon: string
}

const iconMap = {
  palette: Palette,
  printer: Printer,
  brush: Brush
}

export function DesignFocusesSection() {
  console.log('Rendering DesignFocusesSection')
  const [services, setServices] = useState<DesignService[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await getDesignServices()
        setServices(response.services)
      } catch (error) {
        console.error('Error loading design services:', error)
      } finally {
        setLoading(false)
      }
    }

    loadServices()
  }, [])

  if (loading) {
    return (
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 bg-white/10 rounded-2xl animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            Design Focuses
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Specialized services tailored to bring your creative vision to life with precision and artistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap] || Palette
            
            return (
              <motion.div
                key={service._id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 rounded-2xl h-full">
                  <CardContent className="p-8 text-center">
                    <div className="mb-6">
                      <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}