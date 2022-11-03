import './App.css';
import articles from './data/articles.json';
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import {contains} from "./utils/ArrayUtils";
import {ANY} from "./data/Constants";
import {substringAfter} from "./utils/StringUtils";
import Resource from "./pages/Resource";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
          <Home/>
      )
    },
    {
      path: "/resources",
      element: (
          <Resources allArticles={articles}/>
      ),
      loader: ({request}) => {
        const category = new URLSearchParams(substringAfter(request.url, "?")).get("category");
        if (!category || category === ANY) {
          return {
            articles,
            activeCategory: ANY
          };
        }
        return {
          articles: articles.filter(article => contains(article.tags, category)),
          activeCategory: category
        };
      }
    },
    {
      path: "/resources/:id",
      element: <Resource allArticles={articles}/>,
      loader: ({params}) => {
        return params.id;
      }
    },
    {
      path: "/*",
      loader: () => {
        throw redirect("/");
      }
    }
  ]);
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
