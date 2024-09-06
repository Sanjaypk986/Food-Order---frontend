import React, { useState } from "react";
import AddressForm from "../../../components/forms/AddressForm";
import { useDispatch, useSelector } from "react-redux";

const AddressPage = () => {
  const user = useSelector((state) => state.user.user);
  const [isEditing, setIsEditing] = useState(false); // Toggle between viewing and editing address
  const address = useSelector((state) => state.address.data);

    
  // Function to handle toggling between edit and view mode
  const handleAddressChange = () => {
    setIsEditing(!isEditing);
  };

  return (
    <section>
      {address && !isEditing ? (
        // If user has an address and not editing, show the address details
        <div className="my-2 md:my-4">
          <h4 className="text-lg md:text-xl font-semibold">
            Delivery Address{" "}
            <span
              onClick={handleAddressChange}
              className="text-sm text-blue-600 cursor-pointer"
            >
              Change
            </span>
          </h4>
          <div className="food-card md:w-3/4 shadow-md rounded-md p-4 mt-4">
            <div className="grid grid-cols-1 px-3 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold">First Name:</p>
                <p>{address.firstname}</p>
              </div>
              <div>
                <p className="font-semibold">Last Name:</p>
                <p>{address.lastname}</p>
              </div>
              <div>
                <p className="font-semibold">City:</p>
                <p>{address.city}</p>
              </div>
              <div>
                <p className="font-semibold">Street:</p>
                <p>{address.street}</p>
              </div>
              <div>
                <p className="font-semibold">Pincode:</p>
                <p>{address.pincode}</p>
              </div>
              <div>
                <p className="font-semibold">Mobile Number:</p>
                <p>{address.mobile}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // If no address or editing mode is active, show the address form
        <div className="my-2 md:my-4">
          <h4 className="text-lg md:text-xl font-semibold">
            {address ? "Edit Delivery Address" : "Add a Delivery Address"}
          </h4>
          <AddressForm setEditing={setIsEditing} />
          {user.address && (
            <button
              onClick={handleAddressChange}
              className="text-blue-600 mt-2 underline"
            >
              Cancel
            </button>
          )}
        </div>
      )}
    </section>
  );
};

export default AddressPage;
