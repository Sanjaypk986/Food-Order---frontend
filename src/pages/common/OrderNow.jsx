import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import FoodCard from "../../components/FoodCard";
import { fetchAllFoods, fetchFoodsBySearch } from "../../services/foodApi";
import { useNavigate } from "react-router-dom";

const OrderNow = () => {
  const [sortOption, setSortOption] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  // Fetch foods based on parameters
  useEffect(() => {
    const fetchFoods = async () => {
      try {
        if (sortOption || category || search) {
          const params = { sort: sortOption, category, search };
          const response = await fetchFoodsBySearch(params);
          setFoods(response);
        } else {
          const response = await fetchAllFoods();
          setFoods(response);
        }
      } catch (error) {
        console.log("Error fetching foods:", error.message);
        setFoods([]);
      }
    };

    fetchFoods();
  }, [sortOption, category, search]);

  const handleSortChange = (e) => {
    const value = e.target.value;
    setSortOption(value);
    navigate(`/order-now?search=${search}&category=${category}&sort=${value}`);
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    navigate(
      `/order-now?search=${search}&category=${value}&sort=${sortOption}`
    );
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    navigate(
      `/order-now?search=${search}&category=${category}&sort=${sortOption}`
    );
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(
      `/order-now?search=${search}&category=${category}&sort=${sortOption}`
    );
  };

  return (
    <main className="p-4 md:p-8 container mx-auto">
      <section>
        <div className="flex md:w-1/2 mx-auto items-center space-x-2 border border-gray-300 rounded-lg p-2">
          <form
            onSubmit={handleSearchSubmit}
            className="flex w-full items-center space-x-2"
          >
            <input
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search foods..."
              className="p-2 w-full border-none outline-none text-sm"
            />
            <button type="submit" className="p-2">
              <Search className="w-6 h-6 text-gray-500 cursor-pointer" />
            </button>
          </form>
        </div>
      </section>

      <section className="mt-4 flex flex-wrap justify-between items-center md:w-1/2 mx-auto space-y-2 md:space-y-0">
        <div className="flex items-center space-x-2">
          <label htmlFor="sort" className="text-sm font-semibold">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="">Select</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label htmlFor="category" className="text-sm font-semibold">
            Category:
          </label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="p-2 border border-gray-300 rounded-lg text-sm"
          >
            <option value="">All</option>
            <option value="Non-veg">Non-veg</option>
            <option value="Kerala">Kerala</option>
            <option value="veg">Veg</option>
            <option value="chinese">Chinese</option>
          </select>
        </div>
      </section>

      <section className="mt-8">
        {foods.length > 0 ? (
          <div className="grid lg:w-3/4 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {foods.map((food) => (
              <FoodCard key={food._id} foods={food} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">Food item not found.</div>
        )}
      </section>
    </main>
  );
};

export default OrderNow;
