import { useRef } from "react";
import Modal from "./modal";
import Axios from "axios";

const AddInventories = ({ setShowModal, setReload }): any => {
  const productCode = useRef<any>("");
  const quantityInStockRef = useRef<any>("");
  const officeCodeRef = useRef<any>("");

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const data = {
      productCode: productCode.current.value,
      quantityInStock: Number(quantityInStockRef.current.value),
      officeCode: officeCodeRef.current.value,
    };

    const response = await Axios.post("/inventories/create", data);
    setReload((prev: any) => prev + 1);
    setShowModal(false);
    console.log(response.data);
  };

  return (
  <Modal
      onClick={() => setShowModal(false)}
      className="flex flex-col justify-center items-center bg-white"
    >
            <h1 className="font-bold text-[2rem] mb-[1.5rem] text-blue-500">
        Add Inventory
      </h1>
      <form onSubmit={submitHandler}>
        <div className="flex gap-8 items-center">
          <div>
            <div className="flex items-center gap-4">
             <div className="mb-4">
               <label
                  htmlFor="productCode"
                  className="font-semibold text-[1.15rem]"
                >
                  Product Code
               </label>
                <input
                  ref={productCode}
                  id="productCode"
                  type="text"
                  className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                />
             </div>

              <div className="flex items-center gap-4">
                <div className="mb-[1rem]">
                  <label
                    htmlFor="quantityInStock"
                    className="font-semibold text-[1.15rem]"
                  >
                    Quantity In Stock
                  </label>
                  <input
                    ref={quantityInStockRef}
                    id="quantityInStock"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
                </div>
              </div>

             <div className="flex items-center gap-4">
              <div className="mb-[1rem]">
                  <label
                    htmlFor="officeCode"
                    className="font-semibold text-[1.15rem]"
                  >
                    Office Code
                  </label>
                  <input
                    ref={officeCodeRef}
                    id="officeCode"
                    type="text"
                    className="block mt-[0.5rem] bg-white border border-solid border-gray-300 h-[2.5rem] w-[18rem] outline-none p-[1rem] rounded"
                  />
              <div> 
              </div>
               </div>
              </div>

                <button
                   type="submit"
                   className="bg-blue-500 mt-6 text-white h-10 rounded w-72 font-semibold transition-all duration-300 ease-in-out hover:bg-blue-600"
                 >
                  Add Employee
                </button>
            </div>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default AddInventories;
