import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search Order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-3 py-2 text-xs bg-yellow-100 w-28 sm:w-64
         placeholder:text-stone-400 sm:focus:w-72 foucus:trnsition-all duration-300 focus:ring-opacity-50
          focus:outline-none focus:ring focus:ring-yellow-300"
      />
    </form>
  );
}

export default SearchOrder;
