import { Injectable } from '@angular/core';
import { Order } from './order';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
private lstOrders: Order[] = [];
private orderSource = new BehaviorSubject<Order[]>([]);
currentOrder = new Subject<Order>();
  

addOrder(order: Order) {
  const actualOrders = this.orderSource.getValue();
  actualOrders.push(order);
  this.orderSource.next(actualOrders);
}


getOrders() {
  return this.orderSource.getValue();
}

setOrder(order: Order) {
  this.currentOrder.next(order);  
}
}
