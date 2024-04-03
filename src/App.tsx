import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />)
);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
