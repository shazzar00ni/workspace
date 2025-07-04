import { Component, ReactNode } from 'react'
import { Button } from './button'
import { Card, CardContent } from './card'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <Card className="bg-white/95 backdrop-blur-md border-red-200 m-4">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold text-red-600 mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-4">
              We encountered an error while loading this section.
            </p>
            <Button
              onClick={() => this.setState({ hasError: false })}
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      )
    }

    return this.props.children
  }
}