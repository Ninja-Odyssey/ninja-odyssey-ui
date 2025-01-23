import assets from "@/lib/json/assets";
import CharacterCard from "./CharacterCard";

const charList = [
  {
    bg: "rgba(77,105,152,0.6)",
    charImg: assets.baseCharMale,
  },
  {
    bg: "rgba(77,105,152,0.6)",
    charImg: assets.baseCharFemale,
  },
  {
    bg: "rgba(246,189,75,0.6)",
    charImg: assets.founderCharMale,
  },
  {
    bg: "rgba(246,189,75,0.6)",
    charImg: assets.founderCharFemale,
  },
];

export default function CharacterSec() {
  return (
    <div className="cmn_gap bg-bgSecondary">
      <div className="container">
        <div
          className="text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2>Unleash Unlimited Customization</h2>
          <p>
            Unlock a world of customization options to make your characters
            truly your own.
          </p>
        </div>
        <div className="flex  flex-wrap -m-[10px]">
          {charList.map((item, index) => (
            <div
              key={index}
              className="w-1/4 lg:w-1/2 sm:w-full p-[10px] "
              data-aos={
                index + 1 > charList.length / 2 ? "fade-left" : "fade-right"
              }
              data-aos-duration="1000"
            >
              <CharacterCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
