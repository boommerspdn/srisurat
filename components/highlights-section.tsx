import Highlight from "./highlight";
import { HighlightType } from "@/lib/types";

type HighlightsSectionProps = {
  highlightLeft: HighlightType;
  highlightMid: HighlightType;
  highlightRight: HighlightType;
};

const HighlightsSection = ({
  highlightLeft,
  highlightMid,
  highlightRight,
}: HighlightsSectionProps) => {
  return (
    <div className="grid sm:grid-cols-3 place-items-center gap-8 bg-custom-orange h-fit md:h-[10rem] rounded-3xl py-8 md:py-0 px-6 xl:px-[4rem] 2xl:px-[6rem]">
      <Highlight
        image={highlightLeft.image}
        title={highlightLeft.title}
        description={highlightLeft.description}
      />
      <Highlight
        image={highlightMid.image}
        title={highlightMid.title}
        description={highlightMid.description}
      />
      <Highlight
        image={highlightRight.image}
        title={highlightRight.title}
        description={highlightRight.description}
      />
    </div>
  );
};

export default HighlightsSection;
