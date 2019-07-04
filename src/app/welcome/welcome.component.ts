import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  loader: boolean = true;
  constructor(private router: Router) {}

  ngOnInit() {
    console.log("started");
    setTimeout(() => {
      this.loader = false;
    }, 6000);
    console.log("ended");
  }

  signin() {
    this.router.navigate(["/signin"]);
  }
  signup() {
    this.router.navigate(["/signup"]);
  }
}
