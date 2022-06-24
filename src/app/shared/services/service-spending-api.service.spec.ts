import { inject, TestBed } from "@angular/core/testing";
import { ServiceSpendingApiService } from "./service-spending-api.service";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";

fdescribe("SpendingFactoryService", () => {
  let httpTestingController: HttpTestingController;

  let data = [
    {
      id: 1,
      name: "my view",
      services: [
        "EARLY HELP AND SCHOOLS",
        "CUSTOMERS & CORPORATE SERVICES",
        "FINANCE SERVICES",
        "PUBLIC HEALTH",
        "PHYSICAL DIS & OLDER PEOPLE"
      ]
    },
    {
      id: 2,
      name: "Second view",
      services: ["COLLECTION FUND", "FINANCE SERVICES", "PUBLIC HEALTH", "ECONOMY AND ENVIRONMENT"]
    },
    {
      id: 3,
      name: "Third view",
      services: ["FINANCE SERVICES", "ECONOMY AND ENVIRONMENT", "PUBLIC HEALTH"]
    },
    {
      id: 4,
      name: "Four",
      services: ["PHYSICAL DIS & OLDER PEOPLE", "FINANCE CONTROL", "COLLECTION FUND"]
    },
    {
      id: 5,
      name: "This is view number five",
      services: []
    }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ServiceSpendingApiService]
    });
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it("should be created", () => {
    const service: ServiceSpendingApiService = TestBed.get(ServiceSpendingApiService);
    expect(service).toBeTruthy();
  });

  it("Should return not null", () => {
    const service: ServiceSpendingApiService = TestBed.get(ServiceSpendingApiService);

    service.getAllViews().subscribe(val => expect(val).toBeTruthy());

    const req = httpTestingController.expectOne("http://localhost:8080/views");
    expect(req.request.method).toEqual("GET");
    req.flush(data);
  });

  it("Should return 5 views", () => {
    const service: ServiceSpendingApiService = TestBed.get(ServiceSpendingApiService);

    service.getAllViews().subscribe(val => expect(val.length).toBe(5));

    const req = httpTestingController.expectOne("http://localhost:8080/views");
    req.flush(data);
  });

  it("Should return views 1", () => {
    const service: ServiceSpendingApiService = TestBed.get(ServiceSpendingApiService);

    const view1 = {
      id: 1,
      name: "my view",
      services: [
        "EARLY HELP AND SCHOOLS",
        "CUSTOMERS & CORPORATE SERVICES",
        "FINANCE SERVICES",
        "PUBLIC HEALTH",
        "PHYSICAL DIS & OLDER PEOPLE"
      ]
    };

    service.getViewById(1).subscribe(val => {
      expect(val.name).toBe("my view");
    });

    const req = httpTestingController.expectOne("http://localhost:8080/views/1");
    req.flush(view1);
  });

  it("Should call api with param and be post", () => {
    const service: ServiceSpendingApiService = TestBed.get(ServiceSpendingApiService);

    const view1 = "my view";

    service.createView(view1).subscribe();

    const req = httpTestingController.expectOne("http://localhost:8080/views");
    expect(req.request.body).toEqual({ name: view1 });
    expect(req.request.method).toEqual("POST");
  });

  it("Should call api with param and be put", () => {
    const service: ServiceSpendingApiService = TestBed.get(ServiceSpendingApiService);

    const view1 = {
      id: 1,
      name: "my view",
      services: [
        "EARLY HELP AND SCHOOLS",
        "CUSTOMERS & CORPORATE SERVICES",
        "FINANCE SERVICES",
        "PUBLIC HEALTH",
        "PHYSICAL DIS & OLDER PEOPLE"
      ]
    };

    service.updateView(view1).subscribe();

    const req = httpTestingController.expectOne("http://localhost:8080/views/1");
    expect(req.request.body).toEqual(view1);
    expect(req.request.method).toEqual("PUT");
  });
});
