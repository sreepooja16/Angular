import { Component, OnInit } from '@angular/core';
import { EmartService } from '../../emart.service';
import { Item } from '../../item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bill-view',
  templateUrl: './bill-view.component.html',
  styleUrls: ['./bill-view.component.css']
})
export class BillViewComponent implements OnInit {

  cartItems: Item[];
  buyerName: string ='Pooja';
  buyerId: string ='100';
  todayDate: string = '18/02/2019';
  amount: number = 0;

  constructor(protected emartService:EmartService,
              protected router: Router) { }

  ngOnInit(): void {
    this.cartItems = this.emartService.getAllCart();
    let size = this.cartItems.length;
    for(let i=0;i<size;i++){
      this.amount = this.amount + this.cartItems[i].price
    }
  }

  addBill(){
    this.emartService.addBill(this.buyerId, this.todayDate, this.amount);
    this.router.navigate(['item-list']);
  }

}
