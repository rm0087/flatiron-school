/*

  Phase 2 -> Effects
  Updated April 5, 2024
  Created August 7, 2023
  By Sakib Rasul

  Core Deliverables
  1. Instead of rendering the local array `articles`, host `../db.json`
     with JSON Server and fetch articles from there on this component's first render.

*/
import {useState, useEffect} from 'react';


export default function App() {
  const [articles, setArticles] = useState([])
  fetch("http://localhost:3000/articles")
  .then(response=> response.json())
  .then(articlesInDatabase=> {setArticles(articlesInDatabase)})



  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>The Flatiron Archives</h1>
      {articles.map(article => (
        <div key={article.id}>
          <em>{article.title}</em> by {article.author}
        </div>
      ))}
    </div>
  );
}
