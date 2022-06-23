import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-form-new-view",
  templateUrl: "./form-new-view.component.html",
  styleUrls: ["./form-new-view.component.scss"]
})
export class FormNewViewComponent implements OnInit {
  form: FormGroup;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ["", [Validators.required]]
    });
  }

  get name() {
    return this.form.get("name");
  }

  onSubmit() {
    const name: string = this.form.value;

    this.newItemEvent.emit(name);
  }
}
