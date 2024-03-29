import * as basketActions from './basket.actions';
import { BasketItem } from '../../model/basketitem';
import * as fromRoot from '../../state/app-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { of } from 'rxjs';

export interface BasketState {
  items: BasketItem[];
  error: string;
}

export interface AppState extends fromRoot.AppState {
  basket: BasketState;
}

export const initialState: BasketState = {
  items: [],
  error: '',
};

export function basketReducer(
  state = initialState,
  action: basketActions.Actions
): BasketState {
  switch (action.type) {
    case basketActions.BasketActionTypes.ADD_ITEMS: {
      let product = action.payload.item;
      if (state.items.find((i) => i.item.id == product.id) == null) {
        let newBasketItem: BasketItem = {
          item: product,
          count: 1,
        };

        console.log(newBasketItem);
        const itemsToBasket = [...state.items, newBasketItem];
        return {
          ...state,
          items: itemsToBasket,
        };
      } else {
        let basketItemSameId = state.items.find((i) => i.item.id == product.id);
        if (basketItemSameId != null) basketItemSameId.count++;

        return {
          ...state,
          items: state.items,
        };
      }
    }
    case basketActions.BasketActionTypes.DELETE_ITEMS: {
      let product = action.payload.item;
      if (state.items.find((i) => i.item.id == product.id) == null) {
        return {
          ...state,
          items: state.items,
        };
      } else {
        let basketItemSameId = state.items.find((i) => i.item.id == product.id);
        if (basketItemSameId != null) {
          if (basketItemSameId.count == 1) {
            const itemsToBasket = state.items.filter((i) => i.item.id != product.id);
            return {
              ...state,
              items: itemsToBasket
            }
          }
          else
            basketItemSameId.count--;
        }
        return {
          ...state,
          items: state.items,
        };
      }
    }
    default: {
      return state;
    }
  }
}

const getBasketFeatureState = createFeatureSelector<BasketState>('items');

export const getItemsCount = createSelector(
  getBasketFeatureState,
  (state: BasketState) => {
    const sum: number = state.items.reduce(
      (sum, currentBasketItem) => sum + Number(currentBasketItem.item.price),
      0
    );
    return sum == null ? 0 : sum;
  }
);

export const getTotalSum = createSelector(
  getBasketFeatureState,
  (state: BasketState) => {
    const sum: number = state.items.reduce(
      (sum, currentBasketItem) =>
        sum + Number(currentBasketItem.item.price) * currentBasketItem.count,
      0
    );
    return sum == null ? 0 : sum;
  }
);

export const getItems = createSelector(
  getBasketFeatureState,
  (state: BasketState) => {
    return state.items;
  }
);

export const getError = createSelector(
  getBasketFeatureState,
  (state: BasketState) => {
    return state.error;
  }
);
