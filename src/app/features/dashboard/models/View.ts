import { ServiceSpend } from "./service-spend";

export interface View {
  id: number;
  name: string;
  services: ServiceSpend[];
}
