import { Component, inject } from '@angular/core';
import { OrderService } from '../models/order.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {



  private orderService = inject(OrderService);
 lstOrders: Order[] = [];

  ngOnInit(): void {
    console.log(this.orderService.getOrders());
    this.lstOrders = this.orderService.getOrders();
  }

  deliverOrder(order: Order) {
    order.status = 'delivered';
    console.log(this.orderService.getOrders());
    this.orderService.setOrder(order);
    
    }
  
}
