import React from "react";

const OrderSummaryItem = ({ cartItem }) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm">{cartItem.menuItem.name}</span>

      <span className="text-sm">
        ${cartItem.menuItem.price * cartItem.quantity}
      </span>
    </div>
  );
};

export default OrderSummaryItem;
