import { Component } from '@angular/core';
import {PremiumDataService} from './premium-data.service';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable,of, from} from 'rxjs';
import {map, every, pluck, filter, mergeMap, toArray, concatMap} from 'rxjs/operators';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  premiumData : any[] = [];
  paginateData: any[] = [];
  source$: Observable<any>;
  page = 1;
  pageSize = 4;
  collectionSize = 0;
  
  
  
  
  constructor(private premiumDataService: PremiumDataService) {}

  ngOnInit(): void {
    this.getPremiumPolicyData();
    this.source$.subscribe();
    this.collectionSize = this.premiumData.length;
    this.getPremiumData();
    
    
  }

  getPremiumPolicyData(){
    this.source$ = this.premiumDataService.getData()
    .pipe(concatMap(PolicyData => PolicyData.PolicyData)
    ,concatMap(EPD => EPD.Premium)
    ,map(data => this.premiumData.push(data))
    );
   
    //console.log(this.premiumData);
  }
   
   getPremiumData(){
    
     this.paginateData =  this.premiumData
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
      
    }

  }

  





