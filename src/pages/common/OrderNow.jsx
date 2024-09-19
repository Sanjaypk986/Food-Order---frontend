import { Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import FoodCard from "../../components/FoodCard";
import { fetchAllFoods, fetchFoodsBySearch } from "../../services/foodApi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setAllFoods } from "../../features/food/foodSlice";

const OrderNow = () => {
  const [sortOption, setSortOption] = useState("");
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [actionLoading, setActionLoading] = useState(false);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const debounceTimeout = useRef(null);
  const foods = useSelector((state) => state.food.data);
  const user = useSelector((state) => state.user.user);
  const isUserLoggedIn = user && Object.keys(user).length > 0;

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      try {
        const params = {
          sort: sortOption,
          category,
          search: debouncedSearch,
        };
        const response = await (sortOption || category || debouncedSearch
          ? fetchFoodsBySearch(params)
          : fetchAllFoods());
        dispatch(setAllFoods(response));
      } catch (error) {
        console.error("Error fetching foods:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, [sortOption, category, debouncedSearch, dispatch]);

  const navigateWithParams = () => {
    const basePath = isUserLoggedIn ? "/user/order-now" : "/order-now";
    navigate(
      `${basePath}?search=${search}&category=${category}&sort=${sortOption}`
    );
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    navigateWithParams();
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    navigateWithParams();
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setActionLoading(true);

    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }

    debounceTimeout.current = setTimeout(() => {
      setDebouncedSearch(e.target.value);
      setActionLoading(false);
    }, 500); 
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigateWithParams();
  };

  return (
    <main className="p-4 md:p-8 container mx-auto min-h-screen">
      <section>
        <div className="flex md:w-1/2 mx-auto items-center space-x-2 border border-gray-300 rounded-lg p-2">
          <form onSubmit={handleSearchSubmit} className="flex w-full items-center space-x-2">
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
          <label htmlFor="sort" className="text-sm font-semibold">Sort by:</label>
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
          <label htmlFor="category" className="text-sm font-semibold">Category:</label>
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
      {actionLoading && (
        <div className="flex justify-center items-center my-8">
          <span className="loading loading-ring loading-lg"></span>
          <p className="ml-4">Items loading...</p>
        </div>
      )}

      {!loading ? (
        <section className="mt-8">
          {foods.length > 0 ? (
            <div className="grid lg:w-3/4 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {foods?.map((food) => (
                <FoodCard key={food._id} foods={food} />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">Food item not found.</div>
          )}
        </section>
      ):(
        <div className="flex justify-center items-center my-8">
          <span className="loading loading-ring loading-lg"></span>
          <p className="ml-4">loading...</p>
        </div>
      )}
    </main>
  );
};

export default OrderNow;
