import ProjectMovie from ".";
import Header from "./Header";
import Navbar from "./Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const Layout = () => {
  return (
    <div className="bg-slate-900">
      <QueryClientProvider client={queryClient}>
        <Header />
        <div className="flex">
          <Navbar />
          <ProjectMovie />
        </div>
      </QueryClientProvider>
    </div>
  );
};

export default Layout;
