import { Component, OnInit } from '@angular/core';

import { EmartService } from '../../emart.service';

import { Item } from '../../item';

import { Bill } from '../../bill';



@Component({

  selector: 'app-bill-list',

  templateUrl: './bill-list.component.html',

  styleUrls: ['./bill-list.component.css']

})

export class BillListComponent implements OnInit {

  

  allBills: Bill[];

  constructor(protected emartService: EmartService) { }



  ngOnInit(): void {

    this.allBills = this.emartService.getAllBills();
    console.log(this.allBills);


    

  }
  


  



}