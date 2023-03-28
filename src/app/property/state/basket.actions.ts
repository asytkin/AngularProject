import { Action } from '@ngrx/store';
import { Product } from '../../model/product';

export enum BasketActionTypes {
    ADD_ITEMS = "ADD_ITEM"
}

export class AddItems implements Action {
    readonly type = BasketActionTypes.ADD_ITEMS
    constructor(public payload: { item: Product }) { }
}

export type Action = AddItems;