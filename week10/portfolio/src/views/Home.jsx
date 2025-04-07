import { useState } from "react";
import portfolioData from "../assets/portfolio-data.json";
import Masthead from "../Masthead/Masthead";
import ItemCard from "../ItemCard/ItemCard";


export function Home() {
  const [portfolio] = useState(portfolioData);

  return (
    <>
      <Masthead />
      <div className="portfolio">
        {portfolio.map((project) => {
          return (
            <ItemCard
              key={project.slug}
              {...project} />
          )
        })}
      </div>
    </>
  )
}