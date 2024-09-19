import { Component, inject } from '@angular/core';
import { OrderService } from '../models/order.service';
import { FormsModule, NgForm } from '@angular/forms';
import { Order } from '../models/order';

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class POSComponent {

  private orderService = inject(OrderService);
 order: Order = new Order(0, '', '', new Date(), 'pending');

  sendOrder(from:NgForm) {
    const order = {...this.order};
    this.orderService.addOrder(order);
    console.log('Order sent', order);
    from.reset();
  }

  
}
