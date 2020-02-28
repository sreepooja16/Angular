import { Injectable } from '@angular/core';
import { Category } from './category';
import { SubCategory } from './Sub-category';
import { Item } from './item';
import { Cart } from './cart';
import { Bill } from './bill';
import { Seller } from './seller';
import { Buyer } from './buyer';

@Injectable({
  providedIn: 'root'
})
export class EmartService {
categories: Category[];
subCategories: SubCategory[];
allItems: Item[];
cartItems: Item[];
allBills: Bill[];
allBuyers:  Buyer[];
allSellers: Seller[];


  constructor() { 
    this.categories = [{
                          id: 501,
                          name:'Electronics',
                          brief:'Varieties of Electronics like Tv and Washing Mchine'
                        },
                        {
                          id: 502,
                          name:'Footware',
                          brief:'Varieties of Sandals,shoes' 
                        },
                        {
                          id: 503,
                          name:'Clothes',
                          brief:'Varieties of Western and party ware' 
                        }];
      this.subCategories = [{
                              id: 101,
                              name: 'Tv',
                              categoryId: 501,
                               brief: '55-inch OLED',
                              gstPercent: 18
                             },
                             {
                              id: 102,
                              name: 'Washing Machine',
                              categoryId: 501,
                               brief: 'Automatic with super wash',
                              gstPercent: 15
                             },
                             {
                              id: 103,
                              name: 'Shoes',
                              categoryId: 502,
                               brief: 'Leather',
                              gstPercent: 18
                             },
                             {
                              id: 104,
                              name: 'Sandals',
                              categoryId: 502,
                               brief: 'High heels',
                              gstPercent: 20
                             },
                             {
                              id: 105,
                              name: 'Mens wear',
                              categoryId: 503,
                               brief: 'Studded with diamonds',
                              gstPercent: 15
                             },
                             {
                              id: 106,
                              name: 'womens wear',
                              categoryId: 503,
                               brief: 'Semi waist Denim Jeans',
                              gstPercent: 18
                               }];
        this.allItems = [{
                            id: 601,
                            name:'Sony ',
                            categoryId: 501,
                            subCategoryId: 101,
                            price: 55000,
                            description:'make believe' ,
                            stock: 10,
                            remarks: 'good',
                            image: "https://images.unsplash.com/photo-1529912655661-212288c9695f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                          },
                          {
                            id: 602,
                            name:'Samsung ',
                            categoryId: 501,
                            subCategoryId: 101,
                            price: 80000,
                            description: 'a tv with all new fetures',
                            stock: 5,
                            remarks: 'average',
                            image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80"
                          },
                          {
                            id: 603,
                            name:'L.G ',
                            categoryId:501 ,
                            subCategoryId: 102,
                            price: 30000,
                            description:'a super wash washing machine' ,
                            stock: 12,
                            remarks: 'bad',
                            image: "https://images.unsplash.com/photo-1477248742637-8e90b0dcfb4b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                          },
                          {
                            id: 604,
                            name:'samsung',
                            categoryId: 501,
                            subCategoryId: 102,
                            price: 2000,
                            description:'top-load with all new features',
                            stock: 12,
                            remarks: 'good',
                            image: "https://images.unsplash.com/photo-1510551310160-589462daf284?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"  
                          },
                          {
                            id: 605,
                            name:'puma',
                            categoryId: 502,
                            subCategoryId: 103,
                            price: 3000,
                            description: 'leather shoes',
                            stock: 20,
                            remarks: 'average',
                            image: "https://images.unsplash.com/photo-1539185441755-769473a23570?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80"  
                          },
                          {
                            id: 606,
                            name:'adidas',
                            categoryId: 502,
                            subCategoryId: 103,
                            price: 4000,
                            description:'sports shoes',
                            stock: 5,
                            remarks: 'bad',
                            image: "https://images.unsplash.com/photo-1543175423-da350a8ee250?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"  
                          },
                          {
                            id: 607,
                            name:'Inc.5',
                            categoryId: 502,
                            subCategoryId: 104,
                            price: 1700,
                            description: 'partyware sandals',
                            stock: 5,
                            remarks: 'good',
                            image: "https://images.unsplash.com/photo-1501851602203-f40cf2f11ba9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" 
                          },
                          {
                            id: 608,
                            name:'Bata',
                            categoryId: 502,
                            subCategoryId: 104,
                            price: 800,
                            description: 'a nice partyware sandals',
                            stock: 10,
                            remarks: 'bad',
                            image: "https://images.unsplash.com/photo-1516127633128-6f74e8d7edd5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"  
                          },
                          {
                            id: 609,
                            name:'trousers',
                            categoryId:503 ,
                            subCategoryId: 105,
                            price: 5000,
                            description:'white warm trousers' ,
                            stock: 6,
                            remarks: 'average',
                            image: "https://images.unsplash.com/photo-1488149156622-5cbca3b2b0db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=687&q=80" 
                          },
                          {
                            id: 610,
                            name:'Shirt',
                            categoryId: 503,
                            subCategoryId: 105,
                            price: 500,
                            description: 'Linen cotton stiched shirt',
                            stock: 8,
                            remarks:'good',
                            image: "https://images.unsplash.com/flagged/photo-1564468781192-f023d514222d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"  
                          },
                          {
                            id: 611,
                            name:'Frock',
                            categoryId: 503,
                            subCategoryId: 106,
                            price: 8000,
                            description: 'studded with diamonds',
                            stock: 5,
                            remarks: 'bad',
                            image: "https://images.unsplash.com/photo-1545119937-0ba15cf16b4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"  
                          },
                          {
                            id: 612,
                            name:'kurtha',
                            categoryId: 503,
                            subCategoryId: 106,
                            price: 499,
                            description: 'with cotton silk printed dupatta',
                            stock: 8,
                            remarks: 'average',
                            image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=684&q=80"  
                            }];


    this.allBuyers = [{
                              id:701,
                              username:'pooh',
                              password:'pooja',
                              email:'shan@gmailcom',
                              mobile:7729880770,
                              date:'19/02/2020'
                            },
                            {
                              id:102,
                              username:'Gaayi',
                              password:'gaa',
                              email:'gaayi@gmailcom',
                              mobile:6303799615,
                              date:'19/02/2022'
                            }
                          ];
          this.allSellers = [{
                              id:201,
                              username:'Ashu',
                              password:'ashu',
                              company:'abc',
                              gst:6,
                              brief:"description",
                              address:'Chennai',
                              email:'ashu@gmail.com',
                              website:'alibaba.com',
                              contact:9876543210
                            },
                            {
                              id:202,
                              username:'Sana',
                              password:'sana',
                              company:'xyz',
                              gst:7,
                              brief:"description",
                              address:'Chennai',
                              email:'sana@gmail.com',
                              website:'shaik.com',
                              contact:8974561320
                            }
                          ];
      this.cartItems = [];
      this.allBills = [];
      
}
getAllItems():Item[]{
  return [].concat(this.allItems);
}
getCategories():Category[]{
  return[].concat(this.categories);
    }
getSubCategories():SubCategory[]{
  return[].concat(this.subCategories);
   }
getAllBills():Bill[]{
  return this.allBills;
}
    getItem(itemId: string):Item {
      let item:Item;
      let size = this.allItems.length;
      for(let i=0; i<size; i++) {
        if(this.allItems[i].id == +itemId)
        {
        //item = this.allItems[i];
        item = {
        
            id:this.allItems[i].id,
            name:this.allItems[i].name,
            categoryId: this.allItems[i].categoryId,
            subCategoryId:this.allItems[i].subCategoryId,
            price:this.allItems[i].price,
            description:this.allItems[i].description,
            stock: this.allItems[i].stock,
            remarks: this.allItems[i].remarks,
            image: this.allItems[i].image
        };
        break;
        }
      }
        return item;
      }
addToCart(itemId: number){
  let item: Item = this.getItem(itemId+'');
  this.cartItems.push(item);
}
getAllCart()
{
return [].concat(this.cartItems);
}
deleteCartItem(itemNo: number)
{
  let size= this.cartItems.length;
  for(let i=0;i<size;i++){
    if(this.cartItems[i].id==itemNo){
      this.cartItems.splice(i,1);
      break;
    }
  }
      
}
addBill(buyerId: string, todayDate: string, total: number){
  let billSize = this.allBills.length;

  let bill:Bill = {
                     id: 200 + ++billSize,
                     buyerId: +buyerId,
                     type: 'Debit',
                     date: todayDate,
                     remarks: '',
                     items: this.cartItems,
                     amount: total
                    
                    };
    console.log("bill:"+bill);
    this.allBills.push(bill);
    this.cartItems = [];
  }

  validateBuyer(username:string,password:string){
    let buyer: Buyer;
    let size = this.allBuyers.length;
    for(let i=0;i<size;i++)
    {
      if(this.allBuyers[i].username==username && this.allBuyers[i].password==password)
      {
        buyer = {
                  id:this.allBuyers[i].id,
                  username: this.allBuyers[i].username,
                  password: this.allBuyers[i].password,
                  email: this.allBuyers[i].email,
                  date: this.allBuyers[i].date,
                  mobile: this.allBuyers[i].mobile
        }
        break;
      }
    }
    return buyer;

  }
  validateSeller(username:string,password:string){
    let seller: Seller;
    let size = this.allSellers.length;
    for(let i=0;i<size;i++)
    {
      if(this.allSellers[i].username==username && this.allSellers[i].password==password)
      {
        seller = {
                  id:this.allSellers[i].id,
                  username: this.allSellers[i].username,
                  password: this.allSellers[i].password,
                  email: this.allSellers[i].email,
                  company:this.allSellers[i].company,
                  gst:this.allSellers[i].gst,
                  brief:this.allSellers[i].brief,
                  address:this.allSellers[i].address,
                  website:this.allSellers[i].website,
                  contact:this.allSellers[i].contact
        }
        break;

      }
    }
    return seller;
  }

}
