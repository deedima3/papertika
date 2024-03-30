import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/ahli")({
  component: () => <div>Hello /ahli!</div>,
});
