
"use client"
import FeatureCard from "../Feature-Card/page";

type Feature = {
  image: string;

};

type FeatureGridProps = {
  heading?: string;
  features: Feature[];
};

const FeatureGrid = ({ heading = 'Features', features }: FeatureGridProps) => {
  return (
    <section className=" py-12 px-4 ">
      <h2 className="text-white text-2xl md:text-3xl font-bold text-center mb-10">{heading}</h2>
      <div className="grid grid-cols-1  md:grid-cols-3 gap-6  mx-auto overflow-hidden">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default FeatureGrid;
