import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { basketReducer } from "src/app/property/state/basket.reducer";
import { hydrationMetaReducer } from "./hydration/hydration.reducer";

export interface RootState {
  count: number
}

export const reducers: ActionReducerMap<RootState> = {
  count: basketReducer
}

export const metaReducers: MetaReducer[] = [
  hydrationMetaReducer
]