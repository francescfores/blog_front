import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer-auth",
  templateUrl: "./footer-auth.component.html",
})
export class FooterAuthComponent implements OnInit {
  date = new Date().getFullYear();
  constructor() {}

  ngOnInit(): void {}
}
