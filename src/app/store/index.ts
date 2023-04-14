import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { basketReducer } from 'src/app/property/state/basket.reducer';
import { hydrationMetaReducer } from './hydration/hydration.reducer';

export interface RootState {}

export const reducers: ActionReducerMap<RootState> = {
  items: basketReducer,
};

export const metaReducers: MetaReducer[] = [hydrationMetaReducer];
