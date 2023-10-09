import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import GuessMoviesOld from "./GuessMoviesOld";
import GuessMovies from "./GuessMovies";
import GuessTime from "./GuessTime";
import HighScorePage from "./HighScorePage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <HighScorePage />,
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
        path: "*",
        element: <h1>404 Page not found</h1>,
      },
    ],
  },
]);

export default router;
