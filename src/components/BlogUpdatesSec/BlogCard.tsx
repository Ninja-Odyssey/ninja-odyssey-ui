import { Button } from "@/lib/ui/Button/button";
import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  img: string | StaticImageData;
  title: string;
  desc: string;
}

export default function BlogCard({ img, title, desc }: BlogCardProps) {
  return (
    <div className="bg-white">
      <div className="w-full h-[330px] overflow-hidden cursor-pointer">
        <figure className="w-full h-full hoverImg overflow-hidden">
          <Image
            src={img}
            width={960}
            height={540}
            alt="img"
            className="w-full h-full object-cover "
          />
        </figure>
      </div>
      <div className="p-6 pb-8">
        <h3 className="mb-2 text-bgPrimary">{title}</h3>
        <p>{desc}</p>
        <div className="flex items-center justify-between flex-wrap mt-8">
          <Button variant="secondary" className="w-[49%]">Join Now</Button>
          <Button variant="outline" className="w-[49%]">Read more</Button>
        </div>
      </div>
    </div>
  );
}
