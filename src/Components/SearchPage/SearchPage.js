import SubRedditCard from "../SubRedditCards/SubRedditCards";

const SearchPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen ">
        <h1 className=" text-5xl mb-20"> Results for r/Lizard</h1>
      <div className=" min-w-0 max-w-screen-lg p-20 bg-darker rounded-3xl flex  justify-center flex-wrap">
        <SubRedditCard />
        <SubRedditCard />
        <SubRedditCard />
        <SubRedditCard />
      </div>
    </div>
  );
};

export default SearchPage;
