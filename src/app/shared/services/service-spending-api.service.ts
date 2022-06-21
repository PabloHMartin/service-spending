import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ServiceSpendDto } from "../models/Service-spendDTO";
import { ViewDto } from "../models/viewDTO";

const API_URI = "http://localhost:8080/";

@Injectable({
  providedIn: "root"
})
export class ServiceSpendingApiService {
  constructor(private readonly http: HttpClient) {}

  public getAllServicesInView(id: number): Observable<Array<ServiceSpendDto>> {
    return this.http.get<Array<ServiceSpendDto>>(`${API_URI}/spending/view/${id}`);
  }

  public getAllServices(): Observable<Array<ServiceSpendDto>> {
    return this.http.get<Array<ServiceSpendDto>>(`${API_URI}/spending/service`);
  }

  public getAllViews(): Observable<Array<ViewDto>> {
    return this.http.get<Array<ViewDto>>(`${API_URI}/views`);
  }

  public getViewById(id: number): Observable<ViewDto> {
    return this.http.get<ViewDto>(`${API_URI}/views/${id}`);
  }

  public createView(view: ViewDto): Observable<ViewDto> {
    return this.http.post<ViewDto>(`${API_URI}/views`, view);
  }

  public updateView(view: ViewDto): Observable<ViewDto> {
    return this.http.put<ViewDto>(`${API_URI}/views/${view.id}`, view);
  }

  public deleteView(id: number): void {
    this.http.delete<ViewDto>(`${API_URI}/view/${id}`);
  }
}
