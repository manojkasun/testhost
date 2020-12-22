import { Component, TemplateRef, Input } from "@angular/core";
@Component({
  selector: "app-my-button",
  templateUrl: "./my-button.component.html",
  styleUrls: ["./my-button.component.scss"],
})
export class MyButtonComponent {
  @Input() buttonText = "Add to Cart";

  constructor() {}

  openModal(template: TemplateRef<any>) {
    alert("Product added to the cart success!!!");
  }
}
