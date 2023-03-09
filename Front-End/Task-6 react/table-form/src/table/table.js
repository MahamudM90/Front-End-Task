import React, { useState } from "react";

const productData = [
  {
    id: 1,
    name: "Product 1",
    price: 22.99,
    quantity: 15,
    deliveryStatus: "ORDER PLACED",
    deliveryColor: "yellow",
  },
  {
    id: 2,
    name: "Product 2",
    price: 56.99,
    quantity: 12,
    deliveryStatus: "PACKAGING",
    deliveryColor: "orange",
  },
  {
    id: 3,
    name: "Product 3",
    price: 6.99,
    quantity: 13,
    deliveryStatus: "SHIPPING",
    deliveryColor: "blue",
  },
  {
    id: 4,
    name: "Product 4",
    price: 155.99,
    quantity: 21,
    deliveryStatus: "DELIVERED",
    deliveryColor: "green",
  },
];

const Table = () => {
  const [data, setData] = useState(productData);

  return (
    <table className=" mx-auto">
      <thead>
        <tr className=" bg-slate-100">
          <th className="border border-slate-600 text-center font-semibold p-2">
            Product ID
          </th>
          <th className="border border-slate-600 text-center font-semibold p-2">
            Product Name
          </th>
          <th className="border border-slate-600 text-center  font-semibold p-2">
            Product Price
          </th>
          <th className="border border-slate-600 text-center font-semibold p-2">
            Product Quantity
          </th>
          <th className="border border-slate-600 text-center font-semibold p-2">
            Product Delivery Status
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr className="border border-slate-700 text-center" key={item.id}>
            <td className="border border-slate-700">{item.id}</td>
            <td className="border border-slate-700">{item.name}</td>
            <td className="border border-slate-700">{item.price}</td>
            <td className="border border-slate-700">{item.quantity}</td>
            <td
              className={`${
                item.deliveryStatus === "SHIPPING" ? "bg-blue-500" : null
              } ${
                item.deliveryStatus === "ORDER PLACED" ? "bg-yellow-600" : null
              } ${
                item.deliveryStatus === "PACKAGING" ? "bg-orange-200" : null
              } ${item.deliveryStatus === "DELIVERED" ? "bg-green-600" : null}`}
            >
              {" "}
              {item.deliveryStatus}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
