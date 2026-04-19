import "./Services.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";

export default function Services() {
  const cardInfoArr = [
    {
      title: "Weekly Pool Cleaning",
      description:
        "We handle everything your pool needs each week—skimming debris, brushing walls and steps, balancing chemicals, and emptying skimmer and pump baskets to keep your water clear and your system running efficiently.",
    },
    {
      title: "Filter Cleaning",
      description:
        "Maintain peak performance and water clarity with professional filter cleaning. We remove buildup and ensure your filtration system runs efficiently year-round.",
    },
    {
      title: "Acid and Chlorine Baths",
      description:
        "Deep clean and restore your pool surface with professional acid washing and chlorine treatment. Ideal for removing stains, buildup, and heavy discoloration.",
    },
    {
      title: "Green Pool Makeover",
      description:
        "Turn a green, unusable pool back into a clean, swimmable condition. Our treatment targets algae at the source and restores clear, healthy water fast.",
    },
    {
      title: "Pool Tile Cleaning",
      description:
        "Restore the clean, polished look of your pool with detailed tile cleaning. We remove calcium buildup and stains to bring back a smooth, fresh finish.",
    },
    {
      title: "Equipment Installations",
      description:
        "Upgrade or replace your pool equipment with expert installation. We ensure pumps, filters, and systems are set up correctly for long-term performance.",
    },
    {
      title: "Pool Construction Project Management",
      description:
        "We visit your site to evaluate the project, plan the construction process, and oversee execution from start to finish. From layout planning to contractor coordination, we ensure your pool build is done correctly and efficiently.",
    },
    {
      title: "Equipment Repairs",
      description:
        "Get fast, reliable repairs for pumps, filters, heaters, and other pool equipment. We diagnose issues quickly and restore your system to full working condition.",
    },
  ];

  return (
    <section className="services" id="services">
      <div className="services__spacer"></div>
      <div className="services__title-cont">
        <h2 className="services__title">What We Offer</h2>
      </div>
      <div className="services__card-cont">
        {cardInfoArr.map((card, index) => (
          <ServiceCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}
