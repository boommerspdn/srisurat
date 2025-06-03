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
  console.log(highlightRight);
  return (
    <div className="flex justify-between items-center bg-custom-orange h-[10rem] rounded-3xl 2xl:px-[6rem]">
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
