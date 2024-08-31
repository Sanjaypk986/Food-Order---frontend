import { Search } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import FoodCard from '../../components/FoodCard';
import { getAllFoods } from '../../services/foodApi';
import { useNavigate } from 'react-router-dom';

const OrderNow = () => {
  const [sortOption, setSortOption] = useState('');
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');
  const [foods, setFoods] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await getAllFoods();
        console.log(response.data);
        setFoods(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFoods();
  }, []);

  // Function to build URL with selected filters
  const buildUrl = () => {
    let url = '/order-now?';
    if (sortOption) {
      url += `sort=${sortOption}&`;
    }
    if (category) {
      url += `category=${category}&`;
    }
    if (search) {
      url += `search=${search}`;
    }
    return url;
  };

  // useEffect to update URL when sorting or category changes
  useEffect(() => {
    navigate(buildUrl());
  }, [sortOption, category, navigate]);

  // Handle sorting changes
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle category changes
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  // Handle search input changes
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(buildUrl());
  };

  return (
    <main className="p-4 md:p-8 container mx-auto">
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
            <option value="show-all">Show all</option>
          </select>
        </div>

        {/* Category Filter Options */}
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
            <option value="chineese">Chineese</option>
          </select>
        </div>
      </section>

      {/* Food Cards */}
      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {foods.map((food) => (
          <FoodCard key={food._id} foods={food} />
        ))}
      </section>
    </main>
  );
};

export default OrderNow;
