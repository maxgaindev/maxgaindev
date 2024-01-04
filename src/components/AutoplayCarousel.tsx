import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

interface Props {
  elements: { title: string; image: any }[];
  amountOfElements?: number;
  maxHeight?: `${number}px` | `${number}%`;
}

const AutoplayCarousel: React.FC<Props> = ({
  elements,
  amountOfElements,
  maxHeight,
}) => {
  const flexBasis = 100 / (elements.length === 0 ? 1 : elements.length);
  return (
    <Carousel
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 1000,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent className="h-full">
        {elements.map((element, index) => (
          <CarouselItem
            key={index}
            style={{
              flexBasis:
                (amountOfElements
                  ? 100 / amountOfElements
                  : flexBasis < 15
                  ? 15
                  : flexBasis) + "%",
            }}
          >
            <div className="grid place-content-center w-full h-full">
              <img
                style={{
                  maxHeight,
                }}
                className="opacity-30 w-full object-cover max-h-full"
                src={element.image.src}
              ></img>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AutoplayCarousel;
