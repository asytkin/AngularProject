import { Injectable } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";

import { Observable, of } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";

import * as basketActions from './basket.actions';
import { BasketItem } from '../../model/basketitem';

@Injectable()
export class BasketEffect {
    constructor(
        private actions$: Actions
    ) { }

}