import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useForm } from "react-hook-form"
import { useState } from "react"
import { submitContactForm } from "@/api/portfolio"
import { useToast } from "@/hooks/useToast"
import { Send } from "lucide-react"

interface ContactFormData {
  name: string
  email: string
  projectType: string
  message: string
}

export function ContactSection() {
  console.log('Rendering ContactSection')
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<ContactFormData>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [projectType, setProjectType] = useState("")
  const { toast } = useToast()

  const onSubmit = async (data: ContactFormData) => {
    console.log('Submitting contact form:', data)
    setIsSubmitting(true)

    try {
      await submitContactForm({ ...data, projectType })
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      })
      reset()
      setProjectType("")
    } catch (error) {
      console.error('Contact form submission error:', error)
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-6" id="contact">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-6">
            Let's Create Together
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss your next project.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 rounded-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      {...register("name", { required: "Name is required" })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-pink-400"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-pink-400 text-sm">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email", { 
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                      className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-pink-400"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-pink-400 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-white">
                    Project Type *
                  </Label>
                  <Select value={projectType} onValueChange={setProjectType}>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent className="bg-white/95 backdrop-blur-md">
                      <SelectItem value="branding">Branding</SelectItem>
                      <SelectItem value="print-design">Print Design</SelectItem>
                      <SelectItem value="illustration">Illustration</SelectItem>
                      <SelectItem value="web-design">Web Design</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {!projectType && (
                    <p className="text-pink-400 text-sm">Please select a project type</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    {...register("message", { required: "Message is required" })}
                    className="bg-white/20 border-white/30 text-white placeholder:text-gray-300 focus:border-pink-400 min-h-32"
                    placeholder="Tell me about your project, goals, and timeline..."
                  />
                  {errors.message && (
                    <p className="text-pink-400 text-sm">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || !projectType}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-full shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}