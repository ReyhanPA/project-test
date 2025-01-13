import Image from "next/image";

interface BannerProps {
  title?: string;
  subtitle?: string;
}

const Banner: React.FC<BannerProps> = (props) => {
  const {title = "Ideas", subtitle = "Where all our great things begin"} = props;
  return (
    <div className="flex items-center justify-center w-screen h-2/3 relative">
      <Image src="/banner-ideas.jpg" alt="Banner Ideas" width={500} height={500} className="w-full h-full object-cover"/>
      <span className="after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gray-800 after:opacity-75"></span>
      <span className="after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-screen after:h-1/5 after:bg-white after:translate-y-1/2 after:-skew-y-3"></span>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-4xl font-semibold text-white">{title}</h1>
        <h3 className="text-2xl font-light text-white">{subtitle}</h3>
      </div>
    </div>
  );
};

export default Banner;