import { TestBed } from "@angular/core/testing";

import { ProductDataService } from "./data-product.service";

describe("DataProductService", () => {
  let service: ProductDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductDataService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
