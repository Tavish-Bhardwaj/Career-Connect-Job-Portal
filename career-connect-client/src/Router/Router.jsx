import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
// import Login from "../components/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      // { path: "/about", element: <About /> },
      { path: "/post-job",
      element:  <CreateJob />
    
    },
      { path: "/my-job",
      element:  <MyJobs />
    
    },
      { path: "/salary",
      element:  <SalaryPage />
    
    },
    ],
  },
  // {
  //   path: "/login",
  //   element: <Login/>
  // }
]);
export default router;
