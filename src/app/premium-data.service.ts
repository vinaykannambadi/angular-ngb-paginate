import { Injectable } from '@angular/core';
import { PREMIUMDATA} from './model';
import {of} from 'rxjs';

@Injectable()
export class PremiumDataService {
  constructor() {}
  getData(){
    return of(PREMIUMDATA);
  }
}