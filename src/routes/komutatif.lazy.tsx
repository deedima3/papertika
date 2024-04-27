import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/komutatif')({
  component: () => <div>Hello /komutatif!</div>
})