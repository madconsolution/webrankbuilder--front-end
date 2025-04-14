interface SpecificationItem {
    label: string;
    value: string;
  }
  
  interface SpecificationSectionProps {
    title?: string;
    specifications: SpecificationItem[];
  }
  
  const SpecificationSection = ({
    title = 'SPECIFICATION',
    specifications,
  }: SpecificationSectionProps) => {
    const half = Math.ceil(specifications.length / 2);
    const leftCol = specifications.slice(0, half);
    const rightCol = specifications.slice(half);
  
    return (
      <section className="bg-black text-white py-10 px-4 md:px-6">
        <h3 className="text-center text-4xl md:text-5xl font-extrabold mb-10 uppercase">
          <span
            className="inline-block text-transparent"
            style={{
              WebkitTextStroke: '1px #E7000B',
              color: 'transparent',
            }}
          >
            {title}
          </span>
        </h3>
  
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-4">
            {leftCol.map((item, index) => (
              <p key={index} className="text-sm md:text-base">
                <span className="font-semibold">{item.label} :</span> {item.value}
              </p>
            ))}
          </div>
          <div className="space-y-4">
            {rightCol.map((item, index) => (
              <p key={index} className="text-sm md:text-base">
                <span className="font-semibold">{item.label} :</span> {item.value}
              </p>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default SpecificationSection;
  