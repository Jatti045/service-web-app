import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Schedule from "./pages/Schedule";
import Performance from "./pages/Performance";

function App() {
  const Router = () => {
    const elements = useRoutes([
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/performance",
        element: <Performance />,
      },
      {
        path: "*",
        element: <Homepage />,
      }
    ]);

    return elements;
  };

  return <Router />;
}

export default App;
