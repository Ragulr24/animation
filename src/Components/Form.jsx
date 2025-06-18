import React from "react";

const Form = (props) => {
  const { title } = props;
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h3 className="font-semibold text-center text-2xl mb-6">
          {props.title}
        </h3>

        <form>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-1 font-medium">
              Username
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>
{ title !== 'Login' && (<>
 <div className="flex flex-col mb-4">
            <label htmlFor="code" className="mb-1 font-medium">
              Employee Code
            </label>
            <input
              id="code"
              type="text"
              placeholder="Enter your employee code"
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="address" className="mb-1 font-medium">
              Address
            </label>
            <input
              id="address"
              type="text"
              placeholder="Enter your address"
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>

          <div className="flex flex-col mb-4">
            <span className="font-medium mb-1">Gender</span>
            <div className="flex gap-4">
                <label className="flex items-center gap-2">
                    <input 
                    type="radio"
                    name="gender"
                    value='male'
                    className="accent-blue-500"
                    />
                    Male
                </label>
                <label className="flex items-center gap-2">
                    <input 
                    type="radio"
                    name="gender"
                    value='female'
                    className="accent-pink-400"
                    />
                    Female
                </label>
            </div>

          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="phone" className="mb-1 font-medium">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>



</>)} 
    
       
          <div className="flex flex-col mb-4">
            <label htmlFor="passcode" className="mb-1 font-medium">
              Password
            </label>
            <input
              id="passcode"
              type="password"
              placeholder="Enter your password"
              className="border border-gray-400 p-2 rounded w-full"
            />
          </div>

          <div className="flex justify-between mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>
            <button
              type="reset"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
