const initialState = {
  items: [],
  totalPrice: 0,
  totalAmount: 0,
};

export function basketReducer(state = initialState, action: { type: any }) {
  switch (action.type) {
    case 'ADD_ITEM': {
      return { items: [], totalPrice: 0, totalAmount: 0 };
    }
    default: {
      return state;
    }
  }
}
