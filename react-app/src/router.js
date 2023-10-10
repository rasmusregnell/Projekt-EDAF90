import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GuessMoviesOld from "./GuessMoviesOld";
import GuessMovies from "./GuessMovies";
import GuessTime from "./GuessTime";
import GuessYear from "./GuessYear";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <h1>Welcome to Movie games</h1>,
      },
      {
        path: "what-movies",
        element: <GuessMovies />,
      },
      {
        path: "guess-time",
        element: <GuessTime />,
      },
      {
        path: "guess-year",
        element: <GuessYear />,
      },
      {
        path: "*",
        element: <h1>404 Page not found</h1>,
      },
    ],
  },
]);

export default router;
