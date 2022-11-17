const initialState = {};
const initialCart = {
  cart: [],
  totalAmount: "",
};

export const prodList = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_ALL_PRODUCTS":
      return {
        ...state,
        products: payload,
      };
    default:
      return state;
  }
};
export const prodByID = (state = initialState, { type, payload }) => {
  switch (type) {
    case "GET_BY_ID":
      return payload;
    default:
      return state;
  }
};
export const addToCart = (state = initialCart, { type, payload }) => {
  if (type === "ADD_TO_CART") {
    const existingIndx = state.cart.findIndex(
      (curr) => curr.item_id == payload.item_id
    );
    const existingProduct = state.cart[existingIndx];

    if (existingIndx >= 0) {
      const updatedProduct = { ...existingProduct };
      updatedProduct.qty = updatedProduct.qty + 1;
      state.cart[existingIndx] = updatedProduct;
      return { ...state };
    } else {
      let tempProductItem = {
        ...payload,
        qty: 1,
        amount: +(payload.price.base_unit * 1),
      };
      return { ...state, data: state.cart.push(tempProductItem) };
    }
  } else {
    return state;
  }
};
export const increCart = (state = initialCart, { type, payload }) => {
  if (type === "INCREASE_QTY") {
    const existingIdx = state.cart.findIndex((curr) => curr.item_id == payload);
    if (existingIdx >= 0) {
      const prevQty = state.cart[existingIdx].qty;
      state.cart[existingIdx].qty = prevQty + 1;
      return { ...state };
    }
  } else {
    return state;
  }
};
export const decreCart = (state = initialCart, { type, payload }) => {
  if (type === "DECREASE_QTY") {
    const existingIdx = state.cart.findIndex((curr) => curr.item_id == payload);

    if (existingIdx >= 0) {
      const prevQty = state.cart[existingIdx].qty;
      if (prevQty == 1) {
        state.cart.splice(existingIdx, 1);
        return { ...state };
      } else {
        state.cart[existingIdx].qty = prevQty - 1;
        return { ...state };
      }
    }
  } else {
    return state;
  }
};
