import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

type CssUnits = "px" | "%" | "vh" | "vw" | "em" | "rem";

interface Props {
  elements: { title: string; image: any; href?: string }[];
  amountOfElements?: number;
  maxHeight?: `${number}${CssUnits}`;
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
              {element.href ? (
                <a
                  target="_blank"
                  title={"Website of " + element.title}
                  href={element.href}
                >
                  <img
                    style={{
                      maxHeight,
                    }}
                    className="opacity-30 w-full object-cover max-h-full"
                    src={element.image.src}
                    alt={"Logo of " + element.title}
                  ></img>
                </a>
              ) : (
                <img
                  style={{
                    maxHeight,
                  }}
                  className="opacity-30 w-full object-cover max-h-full"
                  src={element.image.src}
                  alt={"Logo of " + element.title}
                ></img>
              )}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default AutoplayCarousel;
