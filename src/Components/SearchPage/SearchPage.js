import SubRedditCard from "../SubRedditCards/SubRedditCards";

const SearchPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
        <h1 className=" text-5xl mb-20"> Results for r/Lizard</h1>
      <div className=" w-9/12 p-20 bg-zinc-500 rounded-3xl flex  justify-center flex-wrap">
        <SubRedditCard />
        <SubRedditCard />
        <SubRedditCard />
        <SubRedditCard />
      </div>
    </div>
  );
};

export default SearchPage;
