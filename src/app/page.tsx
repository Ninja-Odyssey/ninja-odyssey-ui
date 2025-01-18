import BlogUpdatesSec from "@/components/BlogUpdatesSec/BlogUpdatesSec";
import CharacterSec from "@/components/CharacterSec/CharacterSec";
import FeaturesSec from "@/components/FeaturesSec/FeaturesSec";
import BannerSec from "../components/BannerSec/BannerSec";

export default function Index() {
  return (
    <>
      <BannerSec />
      <FeaturesSec />
      <CharacterSec />
      <BlogUpdatesSec />
    </>
  );
}
