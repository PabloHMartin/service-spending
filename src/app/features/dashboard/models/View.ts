import { ServiceSpendDto } from "src/app/shared/models/Service-spendDTO";
import { ServiceSpend } from "./service-spend";

export interface View {
  id: number;
  name: string;
  services: ServiceSpendDto[];
}
