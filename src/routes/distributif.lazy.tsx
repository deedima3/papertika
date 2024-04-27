import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/distributif')({
  component: () => <div>Hello /distributif!</div>
})