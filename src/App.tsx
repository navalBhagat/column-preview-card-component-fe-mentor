import "./App.css";
import { Card } from "./Card";

function App() {
  return (
    <main className="content">
      <div className="cards">
        <Card
          icon="/images/icon-sedans.svg"
          title="SEDANS"
          description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          position="first"
        />
        <Card
          icon="/images/icon-suvs.svg"
          title="SUVS"
          description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          position="middle"
        />
        <Card
          icon="/images/icon-luxury.svg"
          title="LUXURY"
          description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          position="last"
        />
      </div>
    </main>
  );
}

export default App;
