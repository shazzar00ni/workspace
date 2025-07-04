import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useEffect, useState } from "react"
import { getTestimonials } from "@/api/portfolio"

interface Testimonial {
  _id: string
  quote: string
  clientName: string
  clientTitle: string
  clientCompany: string
  clientImage?: string
}

export function TestimonialsSection() {
  console.log('Rendering TestimonialsSection')
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTestimonials = async () => {
      try {
        const response = await getTestimonials()
        setTestimonials(response.testimonials)
      } catch (error) {
        console.error('Error loading testimonials:', error)
      } finally {
        setLoading(false)
      }
    }

    loadTestimonials()
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
    <section className="py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            What clients say about working with me and the results we've achieved together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial._id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 rounded-2xl h-full">
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="h-8 w-8 text-pink-400 mb-4" />
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  
                  <div className="flex items-center">
                    {testimonial.clientImage && (
                      <img
                        src={testimonial.clientImage}
                        alt={testimonial.clientName}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    )}
                    <div>
                      <h4 className="text-white font-bold">
                        {testimonial.clientName}
                      </h4>
                      <p className="text-pink-400 text-sm">
                        {testimonial.clientTitle}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonial.clientCompany}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}