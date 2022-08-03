import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface UserData {
  payee: string;
  child: string;
  threeweeks: string;
  twoweeks: string;
  oneweeks: string;
  current: string;
  pendingAmount: string;
  overPayment: string;
  pendingcredit: string;
  totalAmount: string;
  action
};

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    styleUrls  : ['./example.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit {
    
    /** * Constructor */
    displayedColumns: string[] = ['payee', 'child', 'threeweeks', 'twoweeks','oneweeks', 'current', 'pendingAmount', 'overPayment','pendingcredit', 'totalAmount', 'action'];
    UserData: MatTableDataSource<UserData>; 
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    payeeData : any = [];
    childData : any = [];

    constructor(private httpClient: HttpClient) {                  
    }

    ngOnInit(): void {
        this.getTimeDate()
    }

    getTimeDate(){
        this.httpClient.get("assets/user-data.json").subscribe((data:any) =>{
            this.UserData = new MatTableDataSource(data.UserData);
            this.payeeData = data.payeeData;
            this.childData = data.childData;
            this.UserData.paginator = this.paginator;
            this.UserData.sort = this.sort;            
        })
    }
   
}
