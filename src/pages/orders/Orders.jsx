import { useQuery } from "@tanstack/react-query";
import React from "react";
import newRequest from "../../utils/newRequest";
import OrderRow from "../../components/orders/OrderRow";

const Orders = () => {
  //   const user = JSON.parse(localStorage.getItem("currentUser"));
  //   console.log(user);
  const fetchOrders = async () => {
    const response = await newRequest.get(`/orders`);
    console.log(response);
    return response.data;
  };
  const { data: orders, isLoading, error } = useQuery(["orders"], fetchOrders);
  return (
    <div className="mx-auto max-w-6xl my-12">
      <h1 className="text-2xl font-formal font-semibold ">Orders</h1>
      {isLoading
        ? "loading... "
        : error
        ? "something went wrong"
        : orders.map((order) => {
            return <OrderRow order={order} key={order._id} />;
          })}
    </div>
  );
};

export default Orders;
