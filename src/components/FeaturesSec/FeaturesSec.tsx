import assets from "@/lib/json/assets";
import FeaturesCard from "./FeaturesCard";

const featureList = [
  {
    img: assets.feature1,
    title: "Meet the Kage",
    subtitle: "Uncover Her Hidden Strength",
    desc: "Explore the Thrilling Battles of Ninja Odyssey",
  },
  {
    img: assets.feature2,
    title: "Explore the Ninja Village",
    subtitle: "Uncover Her Hidden Strength",
    desc: "Explore the Thrilling Battles of Ninja Odyssey",
  },
  {
    img: assets.feature3,
    title: "Personalize your Wallpaper",
    subtitle: "Uncover Her Hidden Strength",
    desc: "Explore the Thrilling Battles of Ninja Odyssey",
  },
];

export default function FeaturesSec() {
  return (
    <div className="cmn_gap bg-[#15191F]">
      <div className="container">
        <div className="text-center mb-8">
          <h2>Unveil the Ninja Odyssey Story</h2>
          <p>Witness the Epic Tale of the Ninja Odyssey</p>
        </div>
        <div className="flex  flex-wrap -m-[10px] justify-center">
          {featureList.map((item, index) => (
            <div key={index} className="w-1/3 lg:w-1/2 md:w-full p-[10px]">
              <FeaturesCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
