import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import {
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule
} from "@angular/material";
import { FlexModule } from "@angular/flex-layout";
import { CardComponent } from "./components/card/card.component";
import { HeaderComponent } from "./components/header/header.component";
import { ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { RouterModule } from "@angular/router";

const components = [CardComponent, HeaderComponent];

const modules = [
  CommonModule,
  MatToolbarModule,
  MatCardModule,
  FlexModule,
  MatSidenavModule,
  MatIconModule,
  MatFormFieldModule,
  ReactiveFormsModule,
  MatInputModule,
  MatButtonModule,
  DragDropModule,
  RouterModule
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components, ...modules]
})
export class SharedModule {}
