import NewTour from "../../../../components/NewTour";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
export default async function NewTourPage() {
  const queryClient = new QueryClient();
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NewTour />
    </HydrationBoundary>
  );
}

// Query Client: Manages data fetching.
// Dehydrate: Saves the data fetched on the server.
// HydrationBoundary: Uses the saved data when the page loads on the client side.

/*
Dehydration (Server Side):
Fetch the data.
Save (serialize) this data into a format that can be sent to the client.

Hydration (Client Side):
Load (deserialize) the data back into the client cache. */
