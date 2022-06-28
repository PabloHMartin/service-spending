import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ServiceSpendDto } from "src/app/shared/models/Service-spendDTO";
import { ViewDto } from "src/app/shared/models/viewDTO";
import { View } from "../models/View";

@Injectable({
  providedIn: "root"
})
export class SpendingFactoryService {
  constructor() {}

  build(serviceDTO: ServiceSpendDto[], viewDTO: ViewDto[]): View[] {
    return viewDTO.map(view => {
      return {
        id: view.id,
        name: view.name,
        services: this.mapServices(serviceDTO, view.services)
      };
    });
  }

  buildSingleView(serviceDTO: ServiceSpendDto[], viewDTO: ViewDto): View {
    return {
      id: viewDTO.id,
      name: viewDTO.name,
      services: this.mapServices(serviceDTO, viewDTO.services).reverse()
    };
  }

  mapServices(serviceDTO: ServiceSpendDto[], serviceIds: string[]): ServiceSpendDto[] {
    let services: ServiceSpendDto[] = [];
    const servicesMap = new Map<string, ServiceSpendDto>(
      serviceDTO.map(service => [service.service, service] as [string, ServiceSpendDto])
    );
    // ['COLLECTION FUND", {	"service": "COLLECTION FUND","spending": 933675.0}]
    serviceIds.forEach(id => {
      if (servicesMap.has(id)) {
        services.push(servicesMap.get(id));
      }
    });
    return services;
  }

  viewToViewDto(view: View): ViewDto {
    let servicesDto = view.services.map(service => service.service).reverse();
    let viewDto: ViewDto = {
      id: view.id,
      name: view.name,
      services: servicesDto
    };
    return viewDto;
  }
}
