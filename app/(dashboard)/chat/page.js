import Chat from "@/components/Chat";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
export default async function ChatPage() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Chat />
    </HydrationBoundary>
  );
}

// Query Client: Manages data fetching.
// Dehydrate: Saves the data fetched on the server.
// HydrationBoundary: Uses the saved data when the page loads on the client side.
