interface ResolutionCard {
    mainImage: string;
    title: string;
    descriptionImage?: string;
    overlayImage?: string;
    badges?: string[];
  }
  
  interface ResolutionSectionProps {
    cards: ResolutionCard[];
  }
  
  const ResolutionSection = ({ cards }: ResolutionSectionProps) => {
    return (
      <section className="bg-black py-14 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => {
            const isLeft = index % 2 === 0;
  
            return (
              <div
                key={index}
                className="rounded-[2rem] border border-[#E7000B] p-6 text-white flex flex-col justify-between items-center w-full max-w-[500px] mx-auto min-h-[550px] relative bg-black"
              >
                {/* Main Image */}
                <div className="relative w-full flex justify-center h-[110px] mb-4">
                  <img
                    src={card.mainImage}
                    alt={`main-${index}`}
                    className="object-contain h-full"
                  />
                </div>
  
                {/* Title */}
                <div className="text-center text-[18px] font-semibold leading-snug mt-2">
                  {card.title.split(' ').map((word, i) => {
                    const redWords = ['Smartphone', 'Brilliance'];
                    return redWords.includes(word) ? (
                      <span key={i} className="text-[#E7000B]">
                        {word + ' '}
                      </span>
                    ) : (
                      <span key={i}>{word + ' '}</span>
                    );
                  })}
                </div>
  
                {/* Bottom Content */}
                {isLeft ? (
                  card.descriptionImage && (
                    <div className="w-full mt-6">
                      <img
                        src={card.descriptionImage}
                        alt="description"
                        className="w-full object-cover h-[180px] rounded-md"
                      />
                    </div>
                  )
                ) : (
                  <>
                    {/* 4K badge */}
                    {card.descriptionImage && (
                      <div className="w-full flex justify-center mt-4">
                        <img
                          src={card.descriptionImage}
                          alt="badge"
                          className="h-10 object-contain"
                        />
                      </div>
                    )}
                    {/* Additional Badges */}
                    {card.badges && (
                      <div className="flex gap-4 flex-wrap justify-center items-center mt-4">
                        {card.badges.map((badge, i) => (
                          <img
                            key={i}
                            src={badge}
                            alt={`badge-${i}`}
                            className="h-6 md:h-8 object-contain"
                          />
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default ResolutionSection;
  