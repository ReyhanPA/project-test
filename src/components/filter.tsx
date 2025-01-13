import Dropdown from "./dropdown";

const optionsPageSize = ["10", "20", "50"];
const optionsSort = ["Newest", "Oldest"];

const FIlter: React.FC = () => {
  return (
    <div className="flex md:px-16 px-4 items-center mt-5 justify-between z-40">
      <div>
        <h1 className="text-base font-normal text-black">Showing 1 - 10 of 100</h1>
      </div>
      <div className="flex items-center gap-8">
        <div className="flex relative">
          <div className="flex justify-center items-center">
            <h1 className="text-base font-normal text-black">Show per page</h1>
          </div>
          <Dropdown options={optionsPageSize}/>
        </div>
        <div className="flex relative">
          <div className="flex justify-center items-center">
            <h1 className="text-base font-normal text-black">Sort by</h1>
          </div>
          <Dropdown options={optionsSort}/>
        </div>
      </div>
    </div>
  );
}

export default FIlter;