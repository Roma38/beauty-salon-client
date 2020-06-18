import React from "react";
import { Header, Card } from "semantic-ui-react";
// import { Route } from "react-router-dom";
import { useSelector } from "react-redux";

import CategoryCard from "./CategoryCard";

function ServicesPage() {
  const { items: services, categories } = useSelector(state => state.services);

  return (
    <main className="services-page">
      <Header as="h1" textAlign="center" content="Services" />
      <Card.Group centered>
        {categories.map(category => (
          <CategoryCard
            category={category}
            services={services.filter(service => service.category === category)}
            key={category}
          />
        ))}
        <CategoryCard
          category="other"
          services={services.filter(service => !categories.includes(service.category))}
          key="other"
        />
      </Card.Group>
    </main>
  );
}
export default ServicesPage;
