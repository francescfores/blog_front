import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button-default",
  templateUrl: "./button-default.component.html",
})
export class ButtonDefaultComponent implements OnInit {
  @Input()
  get statStyle(): string {
    return this._statStyle;
  }
  set statStyle(statStyle: string) {
    this._statStyle = statStyle === undefined ? "" : statStyle;
  }
  private _statStyle = "";


  @Input()
  get statTitle(): string {
    return this._statTitle;
  }
  set statTitle(statTitle: string) {
    this._statTitle = statTitle === undefined ? "" : statTitle;
  }
  private _statTitle = "";

  @Input()
  get statIconName(): string {
    return this._statIconName;
  }
  set statIconName(statIconName: string) {
    this._statIconName =
      statIconName === undefined ? "" : statIconName;
  }
  private _statIconName = "";

  @Input()
  get statIconColor(): string {
    return this._statIconColor;
  }
  set statIconColor(statIconColor: string) {
    this._statIconColor =
      statIconColor === undefined ? "" : statIconColor;
  }
  private _statIconColor = "";

  @Input()
  get statIconPosition(): string {
    return this._statIconPosition;
  }
  set statIconPosition(statIconPosition: string) {
    this._statIconPosition =
      statIconPosition === undefined ? "" : statIconPosition;
  }
  private _statIconPosition = "";

  constructor() {}

  ngOnInit(): void {}
}
