import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Schedule from "./pages/Schedule";
import Services from "./pages/Services.jsx";

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
        path: "/services",
        element: <Services />,
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
