export interface CardProps {
  icon: string;
  title: string;
  description: string;
  position: string;
}

export const Card = ({
  icon,
  title,
  description,
  position,
}: CardProps) => {
  return (
    <section className={`card ${position}`}>
      <img src={icon} className="icon" />
      <h2 className="title">{title}</h2>
      <p className="description">{description}</p>
      <button className={`button ${position}`}>Learn More</button>
    </section>
  );
};
