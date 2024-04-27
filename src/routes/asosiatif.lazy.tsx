import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/asosiatif')({
  component: () => <div>Hello /asosiatif!</div>
})