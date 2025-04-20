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
  
  const Resolution2Section = ({ cards }: ResolutionSectionProps) => {
    return (
      <section className="bg-black px-4">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
          {cards.map((card, index) => {
            const isLeft = index % 2 === 0;
  
            return (
              <div
                key={index}
                className="rounded-[5rem] border border-[#E7000B]   text-white flex flex-col gap-y-[60px] items-center w-full max-w-[660px] mx-auto h-[796px] relative "
              >
                {/* Main Image */}
                
                <div className="relative w-[285px]   h-[285px] flex">
                  <img
                    src={card.mainImage}
                    alt={`main-${index}`}
                    className=" h-full"
                  />
                  
                </div>
                    
                {/* Reversed Layout */}
                {isLeft ? (
                  <>
                    {/* Top Description Image */}
                    <div className="text-center text-[28px] font-semibold leading-snug  ">
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
                    {card.descriptionImage && ( 
                      <div className="bg-cover p-5  ">
                        <img
                          src={card.descriptionImage}
                          alt="description"
                          className="bg-cover w-[477px] h-[270px] rounded-md "
                        />
                      </div>
                    )}
                 
                
                  </>
                ) : (
                  <>
                    
             
                    
                    {/* Additional Badges */}
                    {card.badges && (
                        <div className="">
                        <img
                          src={card.descriptionImage}
                          alt="description"
                          className=" "
                        />
                      </div>
                    )}
  
                    {/* Title at Bottom */}
                        
                  </>
                )}
              </div>
            );
          })}
        </div>
      </section>
    );
  };
  
  export default Resolution2Section;
  