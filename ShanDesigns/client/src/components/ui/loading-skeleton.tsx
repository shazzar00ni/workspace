import { cn } from '@/lib/utils'

interface LoadingSkeletonProps {
  className?: string
  variant?: 'card' | 'text' | 'image' | 'circle'
}

export function LoadingSkeleton({ className, variant = 'card' }: LoadingSkeletonProps) {
  const baseClasses = "animate-pulse bg-white/10 backdrop-blur-sm"
  
  const variantClasses = {
    card: "h-64 rounded-2xl",
    text: "h-4 rounded",
    image: "aspect-square rounded-2xl",
    circle: "rounded-full"
  }

  return (
    <div className={cn(baseClasses, variantClasses[variant], className)} />
  )
}