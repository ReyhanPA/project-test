import Banner from "@/components/banner";
import Card from "@/components/card";
import Filter from "@/components/filter";
import Pagination from "@/components/pagination";
import dummy from "@/data/dummy";

export default function IdeasPage() {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Banner title="Ideas" subtitle="Where all our great things begin"/>
      <Filter/>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 py-8 md:px-16 px-4">
        {dummy.map((data) => (
          <Card key={data.id} id={data.id} picture={data.picture} date={data.date} title={data.title}/>
        ))}
      </div>
      <Pagination pageSize={5}/>
    </div>
  );
}
