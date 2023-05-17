import {Component, ElementRef, Input, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input-default',
  templateUrl: './input-default.component.html',
  styleUrls: ['./input-default.component.css']
})
export class InputDefaultComponent {
  @ViewChild('dynamicInput', { static: false }) dynamicInput!: ElementRef<HTMLInputElement>;
  focusInput() {
    console.log('eeeeeeeeee')
    this.dynamicInput.nativeElement.focus();
  }

  private _variant = 'outsite';

  @Input()
  get variant(): string {
    return this._variant;
  }
  set variant(variant: string) {
    this._variant = variant === undefined ? '' : variant;
  }

  private _rounded = 'lg';

  @Input()
  get rounded(): string {
    return this._rounded;
  }
  set rounded(rounded: string) {
    this._rounded = rounded === undefined ? '' : rounded;
  }

  private _size = 'lg';

  @Input()
  get size(): string {
    return this._size;
  }
  set size(size: string) {
    this._size = size === undefined ? '' : size;
  }

  private _disabled = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(disabled: boolean) {
    this._disabled = disabled === undefined ? false : disabled;
  }

  private _helperText = '';

  @Input()
  get helperText(): string {
    return this._helperText;
  }
  set helperText(helperText: string) {
    this._helperText = helperText === undefined ? '' : helperText;
  }

  private _helperLink = '';

  @Input()
  get helperLink(): string {
    return this._helperLink;
  }
  set helperLink(helperLink: string) {
    this._helperLink = helperLink === undefined ? '' : helperLink;
  }

  private _helperLinkText = '';

  @Input()
  get helperLinkText(): string {
    return this._helperLinkText;
  }
  set helperLinkText(helperLinkText: string) {
    this._helperLinkText = helperLinkText === undefined ? '' : helperLinkText;
  }


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

  private _statButtonStyle = "";

  @Input()
  get statButtonStyle(): string {
    return this._statButtonStyle;
  }
  set statButtonStyle(statButtonStyle: string) {
    this._statButtonStyle =
      statButtonStyle === undefined ? "" : statButtonStyle;
  }


  private _statButtonLabel = "";

  @Input()
  get statButtonLabel(): string {
    return this._statButtonLabel;
  }
  set statButtonLabel(statButtonLabel: string) {
    this._statButtonLabel =
      statButtonLabel === undefined ? "" : statButtonLabel;
  }

  private _statButtonIconStyle = "";

  @Input()
  get statButtonIconStyle(): string {
    return this._statButtonIconStyle;
  }
  set statButtonIconStyle(statButtonIconStyle: string) {
    this._statButtonIconStyle =
      statButtonIconStyle === undefined ? "" : statButtonIconStyle;
  }

  private _statButtonImageUrl = "";

  @Input()
  get statButtonImageUrl(): string {
    return this._statButtonImageUrl;
  }
  set statButtonImageUrl(statButtonImageUrl: string) {
    this._statButtonImageUrl =
      statButtonImageUrl === undefined ? "" : statButtonImageUrl;
  }

  private _statButtonImageStyle = "";

  @Input()
  get statButtonImageStyle(): string {
    return this._statButtonImageStyle;
  }
  set statButtonImageStyle(statButtonImageStyle: string) {
    this._statButtonImageStyle =
      statButtonImageStyle === undefined ? "" : statButtonImageStyle;
  }

  constructor() {}

  ngOnInit(): void {}
}
