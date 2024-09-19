import { Component, inject } from '@angular/core';
import { OrderService } from '../models/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  private orderService = inject(OrderService);
 lstOrders: Order[] = [];

  ngOnInit(): void {
    console.log(this.orderService.getOrders());
    this.lstOrders = this.orderService.getOrders();
  }
  
  cookOrder(order: Order) {
    order.status = 'cooking';
    console.log(this.orderService.getOrders());
    this.orderService.setOrder(order);

    
  }



  toDelivery() {

    this.lstOrders.forEach(order => {
      if (order.status === 'cooking') {
        order.status = 'to deliver';
        this.orderService.setOrder(order);

      }
    });
  }


}
