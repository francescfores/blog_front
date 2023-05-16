import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-pricing",
  templateUrl: "./card-pricing.component.html",
})
export class CardPricingComponent implements OnInit {
  @Input()

  @Input()
  get statItems(): string[] {
    return this._statItems;
  }
  set statItems(statItems: string[]) {
    this._statItems = statItems || [];
  }

  private _statItems: string[] = [];

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
  get statSubtitle(): string {
    return this._statSubtitle;
  }
  set statSubtitle(statSubtitle: string) {
    this._statSubtitle = statSubtitle === undefined ? "" : statSubtitle;
  }
  private _statSubtitle = "";

  @Input()
  get statDescripiron(): string {
    return this._statDescripiron;
  }
  set statDescripiron(statDescripiron: string) {
    this._statDescripiron =
      statDescripiron === undefined ? "" : statDescripiron;
  }
  private _statDescripiron = "";

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
  get statButtonLeft(): boolean {
    return this._statButtonLeft;
  }
  set statButtonLeft(statButtonLeft: boolean) {
    this._statButtonLeft =
      statButtonLeft === undefined ? false : statButtonLeft;
  }
  private _statButtonLeft = false;

  @Input()
  get statButtonLeftStyle(): string {
    return this._statButtonLeftStyle;
  }
  set statButtonLeftStyle(statButtonLeftStyle: string) {
    this._statButtonLeftStyle =
      statButtonLeftStyle === undefined ? '' : statButtonLeftStyle;
  }
  private _statButtonLeftStyle = '';

  @Input()
  get statButtonLeftTitle(): string {
    return this._statButtonLeftTitle;
  }
  set statButtonLeftTitle(statButtonLeftTitle: string) {
    this._statButtonLeftTitle =
      statButtonLeftTitle === undefined ? '' : statButtonLeftTitle;
  }
  private _statButtonLeftTitle = '';

  @Input()
  get statButtonLeftIcon(): string {
    return this._statButtonLeftIcon;
  }
  set statButtonLeftIcon(statButtonLeftIcon: string) {
    this._statButtonLeftIcon =
      statButtonLeftIcon === undefined ? '' : statButtonLeftIcon;
  }
  private _statButtonLeftIcon = '';

  @Input()
  get statButtonLeftIconPosition(): string {
    return this._statButtonLeftIconPosition;
  }
  set statButtonLeftIconPosition(statButtonLeftIconPosition: string) {
    this._statButtonLeftIconPosition =
      statButtonLeftIconPosition === undefined ? '' : statButtonLeftIconPosition;
  }
  private _statButtonLeftIconPosition = '';

  @Input()
  get statButtonRight(): boolean {
    return this._statButtonRight;
  }
  set statButtonRight(statButtonRight: boolean) {
    this._statButtonRight =
      statButtonRight === undefined ? false : statButtonRight;
  }
  private _statButtonRight = false;

  @Input()
  get statButtonRightStyle(): string {
    return this._statButtonRightStyle;
  }
  set statButtonRightStyle(statButtonRightStyle: string) {
    this._statButtonRightStyle =
      statButtonRightStyle === undefined ? '' : statButtonRightStyle;
  }
  private _statButtonRightStyle = '';

  @Input()
  get statButtonRightTitle(): string {
    return this._statButtonRightTitle;
  }
  set statButtonRightTitle(statButtonRightTitle: string) {
    this._statButtonRightTitle =
      statButtonRightTitle === undefined ? '' : statButtonRightTitle;
  }
  private _statButtonRightTitle = '';

  @Input()
  get statButtonRightIconPosition(): string {
    return this._statButtonRightIconPosition;
  }
  set statButtonRightIconPosition(statButtonRightIconPosition: string) {
    this._statButtonRightIconPosition =
      statButtonRightIconPosition === undefined ? '' : statButtonRightIconPosition;
  }
  private _statButtonRightIconPosition = '';

  @Input()
  get statButtonRightIcon(): string {
    return this._statButtonRightIcon;
  }
  set statButtonRightIcon(statButtonRightIcon: string) {
    this._statButtonRightIcon =
      statButtonRightIcon === undefined ? '' : statButtonRightIcon;
  }
  private _statButtonRightIcon = '';

  @Input()
  get statImg(): string {
    return this._statImg;
  }
  set statImg(statImg: string) {
    this._statImg =
      statImg === undefined ? '' : statImg;
  }
  private _statImg = '';

  @Input()
  get statImgPosition(): string {
    return this._statImgPosition;
  }
  set statImgPosition(statImgPosition: string) {
    this._statImgPosition =
      statImgPosition === undefined ? '' : statImgPosition;
  }
  private _statImgPosition = '';

  @Input()
  get statImgStyle(): string {
    return this._statImgStyle;
  }
  set statImgStyle(statImgStyle: string) {
    this._statImgStyle =
      statImgStyle === undefined ? '' : statImgStyle;
  }
  private _statImgStyle = '';

  constructor() {}

  ngOnInit(): void {}
}
