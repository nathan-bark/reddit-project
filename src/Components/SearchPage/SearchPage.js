import SubRedditCard from "../SubRedditCards/SubRedditCards";

const SearchPage = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div className=" w-9/12 p-20 bg-zinc-500 rounded-3xl flex">
        <SubRedditCard />
        <SubRedditCard />
        <SubRedditCard />
        <SubRedditCard />
      </div>
    </div>
  );
};

export default SearchPage;
