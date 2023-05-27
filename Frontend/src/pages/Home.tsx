import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="justify-center gap-4 p-4 rounded w-[350px] flex flex-row">
        <button
          onClick={() => navigate("/employee")}
          className=" button-with-bg relative border-2 border-gray-800 bg-transparent py-20 px-20 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100">
        
          Employee
        </button>
        <button
          onClick={() => navigate("/order")}
          className=" button-with-bg relative border-2 border-gray-800 bg-transparent py-20 px-20 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-y-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-y-100"
          >
          Orders
        </button>
        <button
          onClick={() => navigate("/product")}
          className="relative bg-gray-800 py-20 px-20 font-medium uppercase text-white transition-colors before:absolute before:inset-0 before:-z-[1] before:h-full before:w-full before:border-2 before:border-transparent before:transition-all before:content-[''] before:hover:top-1 before:hover:left-1 before:hover:border-gray-700"
        >
          Product
        </button>
        <button
          onClick={() => navigate("/customer")}
          className="relative -top-1 -left-1 bg-gray-800 py-20 px-20 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0"
        >
          Customer
        </button>
        <button
          onClick={() => navigate("/inventory")}
          className="relative border-2 border-gray-800 bg-transparent py-20 px-20 font-medium uppercase text-gray-800 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-gray-800 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100"
        >
          Inventory
        </button>
      </div>
    </div>
  );
};

export default Home;
