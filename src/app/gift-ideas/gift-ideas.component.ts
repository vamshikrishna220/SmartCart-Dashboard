import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-gift-ideas',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './gift-ideas.component.html',
  styleUrls: ['./gift-ideas.component.scss']
})
export class GiftIdeasComponent {
  giftItems = [
    { id: 'VB1', name: 'Towel + Ceramic Cup with Lid', price: 12.99, details: 'Customization Logo/name available', color: 'Orange, White, Green, Pink', image: 'assets/images/gift1.jpg', quantity: 0 },
    { id: 'VB2', name: 'Bear Towel + Ceramic Cup + Spoon', price: 12.99, details: 'Customization Logo/name available', color: 'White, Pink', image: 'assets/images/gift2.jpg', quantity: 0 },
    { id: 'VB3', name: 'Ceramic Cup + Spoon', price: 14.99, details: 'Customization Logo/name available', color: 'Grey, Red, Blue, Green, Pink', image: 'assets/images/gift3.jpg', quantity: 0 },
    { id: 'VB4', name: 'Bear Towel + Ceramic Cup + Spoon', price: 9.99, details: 'Includes Bear Towel, Ceramic Cup, and Spoon', color: 'Pink, Green, Blue, White, Orange', image: 'assets/images/gift4.jpg', quantity: 0 },
    { id: 'VB5', name: 'Bear Towel + Ceramic Cup + Notebook + Pen', price: 15.99, details: 'Includes Notebook (PU Material) and Fountain Pen', color: 'Blue, Pink', image: 'assets/images/gift5.jpg', quantity: 0 },
    { id: 'VB6', name: 'Sport Bottle + Pen + Notebook', price: 17.99, details: 'Customization Logo/name available', color: 'Blue, Green, Black', image: 'assets/images/gift6.jpg', quantity: 0 },
    { id: 'VB7', name: 'Pen + Notebook + Bookmark', price: 19.99, details: 'Customization Logo/name available', color: 'Orange, Red, Blue, Light Green, Black', image: 'assets/images/gift7.jpg', quantity: 0 },
    { id: 'VB8', name: 'USB (16/32GB) + Pen + Refill + Notebook', price: 17.99, details: 'Includes High-Quality Notebook & Fountain Pen', color: 'Blue, Green, Grey, Red', image: 'assets/images/gift8.jpg', quantity: 0 },
    { id: 'VB9', name: 'Stainless Steel Thermal Bottle (Hot & Cold)', price: 10.99, details: 'Insulation: Thermal, Capacity: 1L', color: 'Red, Teal, Gold, Steel', image: 'assets/images/gift9.jpg', quantity: 0 },
    { id: 'VB10', name: 'Stainless Steel Thermos Cup', price: 14.99, details: 'One Cup Flask with 3 Lids, Capacity: 500ml', color: 'Blue, Black, Gray, Light Pink, Steel, Green', image: 'assets/images/gift10.jpg', quantity: 0 },
    { id: 'VB11', name: 'Kids Learning Toys LCD Writing Boards', price: 3.99, details: 'Fun and Interactive Learning for Kids', color: 'Pink, Blue, Black', image: 'assets/images/gift11.jpg', quantity: 0 }
  ];
  
  cart: any[] = [];
  totalPrice = 0;

  addToCart(item: any) {
    let cartItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
    this.updateTotalPrice();
  }

  removeFromCart(item: any) {
    let cartItem = this.cart.find(cartItem => cartItem.id === item.id);
    if (cartItem) {
      cartItem.quantity--;
      if (cartItem.quantity === 0) {
        this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
      }
    }
    this.updateTotalPrice();
  }

  updateTotalPrice() {
    this.totalPrice = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  getCartQuantity(giftId: string): number {
    const cartItem = this.cart.find(item => item.id === giftId);
    return cartItem ? cartItem.quantity : 0;
  }
}
