import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class ProductDataService {
  constructor(private http: HttpClient) {}
  run() {
    console.log("service!!!");
  }

  getData() {
    return this.http.get("http://localhost:3000/product");
  }
}
