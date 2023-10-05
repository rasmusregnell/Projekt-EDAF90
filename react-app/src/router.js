import { createBrowserRouter} from "react-router-dom";
import App from './App';
import GuessMovies from "./GuessMovies";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <h1>Welcome to Movie games</h1>
      },
      {
        path: "what-movies",
        element: <GuessMovies/>
      },
      {
        path: "guess-time",
        element: <p>Detta är spelet om gissa tid</p>
      },
      {
        path: "*",
        element: <h1>404 Page not found</h1>
      },
    ]
  },
]);

export default router;