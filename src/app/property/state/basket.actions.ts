import { Product } from '../../model/product';

export enum BasketActionTypes {
    ADD_ITEMS = "ADD_ITEM",
    DELETE_ITEMS = "DELETE_ITEM",
}

export class AddItems implements Action {
    readonly type = BasketActionTypes.ADD_ITEMS
    constructor(public payload: { item: Product }) { }
}

export class DeleteItems implements Action {
    readonly type = BasketActionTypes.DELETE_ITEMS
    constructor(public payload: { item: Product }) { }
}

export type Action = AddItems | DeleteItems;
