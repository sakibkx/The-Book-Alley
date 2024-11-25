import { SlArrowDown } from "react-icons/sl";
import TabsAndContent from "../TabsAndContent/TabsAndContent";
import { useState } from "react";

const ListedBooks = () => {
  // Clear all session storage data
  sessionStorage.clear();

  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active); // Toggle the `active` state on click
  };

  return (
    <div>
      {/* Title Section */}
      <div className="bg-zinc-200 py-8 text-center mx-6 rounded-3xl mb-8">
        <h1 className="text-3xl font-bold">Books</h1>
      </div>

      {/* Dropdown Menu */}
      <div className={`flex justify-center ${active ? "mb-32" : "mb-14"}`}>
        <details
          className="dropdown dropdown-bottom flex gap-4 items-center text-base font-semibold text-white"
          onToggle={handleToggle} // Use `onToggle` to handle <details> open/close state
        >
          <summary className="btn bg-success border-0 font-semibold text-white flex items-center gap-2 hover:bg-green-700 active:bg-green-800">
            Sort By <SlArrowDown />
          </summary>
          <ul className="menu dropdown-content bg-success rounded-lg p-2 shadow mt-2 text-white">
            <li>
              <button
                className="btn bg-success border-0 text-white w-full text-left hover:bg-green-700 active:bg-green-800"
                onClick={() => console.log("Sort by Pages")}
              >
                Pages
              </button>
            </li>
            <li>
              <button
                className="btn bg-success border-0 text-white w-full text-left hover:bg-green-700 active:bg-green-800"
                onClick={() => console.log("Sort by Year")}
              >
                Year
              </button>
            </li>
          </ul>
        </details>
      </div>

      {/* Tabs and Content */}
      <TabsAndContent />
    </div>
  );
};

export default ListedBooks;
