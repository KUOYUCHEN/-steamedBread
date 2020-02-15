import { Component, OnInit } from "@angular/core";
import { ProductDataService } from "./data-product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  data;

  constructor(public proData: ProductDataService) {}

  ngOnInit(): void {
    this.proData.getData().subscribe(result => {
      this.data = result;
    });
    this.proData.run();
  }
}
