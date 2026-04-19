import "./ServiceCard.css";

export default function ServiceCard({ title, description, info }) {
  return (
    <div className="service-card">
      <div className="service-card__title-cont">
        <p className="service-card__title">{title}</p>
      </div>
      <p className="service-card__description">{description}</p>
    </div>
  );
}
