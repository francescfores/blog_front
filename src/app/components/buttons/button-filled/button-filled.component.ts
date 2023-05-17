import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button-filled",
  templateUrl: "./button-filled.component.html",
})
export class ButtonFilledComponent implements OnInit {
  @Input() style = "";
  @Input() variant = "filled";
  @Input() disabled = false;
  @Input() title = "Button";
  @Input() rounded = "rounded-md";
  @Input() text = "text-xs text-white";
  @Input() font = "font-semibold";
  @Input() color = "bg-primary";
  @Input() padding = "px-4 py-2";
  @Input() margin = "";
  @Input() outline = "";
  @Input() hover = "";
  @Input() focus = "";
  @Input() active = "";
  @Input() transition = "";
  @Input() icon = "";
  @Input() iconPosition = "";
  @Input() imageStyle = "";
  @Input() imageUrl = "";
  @Input() imagePosition = "";

  constructor() {}

  ngOnInit(): void {}
}
