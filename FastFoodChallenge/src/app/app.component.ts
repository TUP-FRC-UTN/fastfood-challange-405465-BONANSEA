import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { POSComponent } from "./pos/pos.component";
import { KitchenComponent } from "./kitchen/kitchen.component";
import { DeliveryPointComponent } from "./delivery-point/delivery-point.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, POSComponent, KitchenComponent, DeliveryPointComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FastFoodChallenge';
}
