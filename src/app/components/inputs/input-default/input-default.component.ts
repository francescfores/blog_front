import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.css']
})
export class InputDefaultComponent {

  private _statStyle = "";

  @Input()
  get statStyle(): string {
    return this._statStyle;
  }
  set statStyle(statStyle: string) {
    this._statStyle = statStyle === undefined ? "" : statStyle;
  }

  private _statLabel = "";

  @Input()
  get statLabel(): string {
    return this._statLabel;
  }
  set statLabel(statLabel: string) {
    this._statLabel = statLabel === undefined ? "" : statLabel;
  }

  private _statLabelStyle = "";

  @Input()
  get statLabelStyle(): string {
    return this._statLabelStyle;
  }
  set statLabelStyle(statLabelStyle: string) {
    this._statLabelStyle = statLabelStyle === undefined ? "" : statLabelStyle;
  }

  private _statInputStyle = "";

  @Input()
  get statInputStyle(): string {
    return this._statInputStyle;
  }
  set statInputStyle(statInputStyle: string) {
    this._statInputStyle = statInputStyle === undefined ? "" : statInputStyle;
  }

  private _statIconName = "";

  @Input()
  get statIconName(): string {
    return this._statIconName;
  }
  set statIconName(statIconName: string) {
    this._statIconName =
      statIconName === undefined ? "" : statIconName;
  }

  private _statIconStyle = "";

  @Input()
  get statIconStyle(): string {
    return this._statIconStyle;
  }
  set statIconStyle(statIconStyle: string) {
    this._statIconStyle =
      statIconStyle === undefined ? "" : statIconStyle;
  }

  private _statImageUrl = "";

  @Input()
  get statImageUrl(): string {
    return this._statImageUrl;
  }
  set statImageUrl(statImageUrl: string) {
    this._statImageUrl =
      statImageUrl === undefined ? "" : statImageUrl;
  }

  private _statImageStyle = "";

  @Input()
  get statImageStyle(): string {
    return this._statImageStyle;
  }
  set statImageStyle(statImageStyle: string) {
    this._statImageStyle =
      statImageStyle === undefined ? "" : statImageStyle;
  }

  constructor() {}

  ngOnInit(): void {}
}
