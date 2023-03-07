import React from "react";

export const Common = ({ data }) => {
  return (
    <>
      <h2>common page</h2>
    </>
  );
};

export const ParentCommon = () => {
  const data = {
    name: "",
    email: "",
  };
  return (
    <>
      <Common data={data} />
    </>
  );
};

//  common product card
export const CommonProductcard = ({ product }) => {
  return (
    <>
      <div className="bg-yellow-400 w-80 shadow-md p-2 rounded-lg">
        <div className="flex flex-col gap-2">
          <img
            className="w-2/3 shadow-lg rounded-sm"
            src={product?.img}
            alt=""
          />
          <span>{product.name}</span>
          <span>
            <b>Price: {product.price}$</b>
          </span>
        </div>
      </div>
    </>
  );
};

//  common table component->

export const CommonTableComponent = ({ tableData }) => {
  return (
    <>
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Status
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://source.unsplash.com/random"
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      John Doe
                    </div>
                    <div className="text-sm text-gray-500">
                      johndoe@example.com
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">Software Engineer</div>
                <div className="text-sm text-gray-500">Web Development</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Active
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  Edit
                </a>
              </td>
            </tr>
            {/* Additional rows go here */}
          </tbody>
        </table>
      </div>
    </>
  );
};
