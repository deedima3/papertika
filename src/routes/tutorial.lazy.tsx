import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/tutorial')({
  component: () => <div>Hello /tutorial!</div>
})