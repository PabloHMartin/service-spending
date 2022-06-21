import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatToolbarModule } from "@angular/material";
import { FlexModule } from "@angular/flex-layout";
import { CardComponent } from "./components/card/card.component";
import { HeaderComponent } from "./components/header/header.component";

const components = [CardComponent, HeaderComponent];

const modules = [CommonModule, MatToolbarModule, MatCardModule, FlexModule];

@NgModule({
  declarations: [...components, HeaderComponent],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule {}
