import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-view-card",
  templateUrl: "./view-card.component.html",
  styleUrls: ["./view-card.component.scss"]
})
export class ViewCardComponent implements OnInit {
  @Input() title: string;

  constructor() {}

  ngOnInit() {}
}
