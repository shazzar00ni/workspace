import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ImageWithPlaceholderProps {
  src: string
  alt: string
  className?: string
  blurDataURL?: string
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void
  loading?: 'lazy' | 'eager'
}

export function ImageWithPlaceholder({
  src,
  alt,
  className,
  blurDataURL,
  onError,
  loading = 'lazy'
}: ImageWithPlaceholderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    setIsLoading(false)
    setHasError(true)
    onError?.(e)
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse">
          {blurDataURL && (
            <img
              src={blurDataURL}
              alt=""
              className="w-full h-full object-cover opacity-50 blur-sm"
            />
          )}
        </div>
      )}
      {!hasError && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
        />
      )}
      {hasError && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500 text-sm">Failed to load image</span>
        </div>
      )}
    </div>
  )
}