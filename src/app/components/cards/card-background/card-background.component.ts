import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-card-background",
  templateUrl: "./card-background.component.html",
})
export class CardBackgroundComponent implements OnInit {

  @Input()
  get style(): string {
    return this._style;
  }
  set style(style: string) {
    this._style = style === undefined ? "" : style;
  }
  private _style = "";

  @Input()
  get title(): string {
    return this._title;
  }
  set title(title: string) {
    this._title = title === undefined ? "" : title;
  }
  private _title = "";

  @Input()
  get subtitle(): string {
    return this._subtitle;
  }
  set subtitle(subtitle: string) {
    this._subtitle = subtitle === undefined ? "" : subtitle;
  }
  private _subtitle = "";

  @Input()
  get descripiron(): string {
    return this._descripiron;
  }
  set descripiron(descripiron: string) {
    this._descripiron =
      descripiron === undefined ? "" : descripiron;
  }
  private _descripiron = "";

  @Input()
  get IconName(): string {
    return this._IconName;
  }
  set IconName(IconName: string) {
    this._IconName =
      IconName === undefined ? "" : IconName;
  }
  private _IconName = "";

  @Input()
  get IconColor(): string {
    return this._IconColor;
  }
  set IconColor(IconColor: string) {
    this._IconColor =
      IconColor === undefined ? "" : IconColor;
  }
  private _IconColor = "";

  @Input()
  get buttonLeft(): boolean {
    return this._buttonLeft;
  }
  set buttonLeft(buttonLeft: boolean) {
    this._buttonLeft =
      buttonLeft === undefined ? false : buttonLeft;
  }
  private _buttonLeft = false;

  @Input()
  get buttonLeftStyle(): string {
    return this._buttonLeftStyle;
  }
  set buttonLeftStyle(buttonLeftStyle: string) {
    this._buttonLeftStyle =
      buttonLeftStyle === undefined ? '' : buttonLeftStyle;
  }
  private _buttonLeftStyle = '';

  @Input()
  get buttonLeftTitle(): string {
    return this._buttonLeftTitle;
  }
  set buttonLeftTitle(buttonLeftTitle: string) {
    this._buttonLeftTitle =
      buttonLeftTitle === undefined ? '' : buttonLeftTitle;
  }
  private _buttonLeftTitle = '';

  @Input()
  get buttonLeftIcon(): string {
    return this._buttonLeftIcon;
  }
  set buttonLeftIcon(buttonLeftIcon: string) {
    this._buttonLeftIcon =
      buttonLeftIcon === undefined ? '' : buttonLeftIcon;
  }
  private _buttonLeftIcon = '';

  @Input()
  get buttonLeftIconPosition(): string {
    return this._buttonLeftIconPosition;
  }
  set buttonLeftIconPosition(buttonLeftIconPosition: string) {
    this._buttonLeftIconPosition =
      buttonLeftIconPosition === undefined ? '' : buttonLeftIconPosition;
  }
  private _buttonLeftIconPosition = '';

  @Input()
  get buttonRight(): boolean {
    return this._buttonRight;
  }
  set buttonRight(buttonRight: boolean) {
    this._buttonRight =
      buttonRight === undefined ? false : buttonRight;
  }
  private _buttonRight = false;

  @Input()
  get buttonRightStyle(): string {
    return this._buttonRightStyle;
  }
  set buttonRightStyle(buttonRightStyle: string) {
    this._buttonRightStyle =
      buttonRightStyle === undefined ? '' : buttonRightStyle;
  }
  private _buttonRightStyle = '';

  @Input()
  get buttonRightTitle(): string {
    return this._buttonRightTitle;
  }
  set buttonRightTitle(buttonRightTitle: string) {
    this._buttonRightTitle =
      buttonRightTitle === undefined ? '' : buttonRightTitle;
  }
  private _buttonRightTitle = '';

  @Input()
  get buttonRightIconPosition(): string {
    return this._buttonRightIconPosition;
  }
  set buttonRightIconPosition(buttonRightIconPosition: string) {
    this._buttonRightIconPosition =
      buttonRightIconPosition === undefined ? '' : buttonRightIconPosition;
  }
  private _buttonRightIconPosition = '';

  @Input()
  get buttonRightIcon(): string {
    return this._buttonRightIcon;
  }
  set buttonRightIcon(buttonRightIcon: string) {
    this._buttonRightIcon =
      buttonRightIcon === undefined ? '' : buttonRightIcon;
  }
  private _buttonRightIcon = '';

  @Input()
  get img(): string {
    return this._img;
  }
  set img(img: string) {
    this._img =
      img === undefined ? '' : img;
  }
  private _img = '';

  @Input()
  get ImgStyle(): string {
    return this._ImgStyle;
  }
  set ImgStyle(ImgStyle: string) {
    this._ImgStyle =
      ImgStyle === undefined ? '' : ImgStyle;
  }
  private _ImgStyle = '';

  constructor() {}

  ngOnInit(): void {}
}
