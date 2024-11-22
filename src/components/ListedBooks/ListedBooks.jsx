import { SlArrowDown } from "react-icons/sl";
import TabsAndContent from "../TabsAndContent/TabsAndContent";

const ListedBooks = () => {

  // Clear all session storage data
  sessionStorage.clear();

  return (
    <div>
      <div className="bg-zinc-200 py-8 px-auto text-center mx-6 rounded-3xl mb-8">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>
      <div className="flex justify-center mb-14">
        <button className="btn btn-success flex gap-4 items-center text-base font-semibold text-white">Sort By  <SlArrowDown /></button>
      </div>
      <TabsAndContent></TabsAndContent>
    </div>
  );
};

export default ListedBooks;