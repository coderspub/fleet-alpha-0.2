import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
declare var $: any;
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit {
  showEmailAlert: boolean = false;
  invalidOTP: boolean = false;
  emptyOTP: boolean = false;
  publicIp: string = "api.xcompass.ml";
  val: JSON;
  registered: boolean = false;
  spinner: boolean = true;
  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}
  signInReroute() {
    this.router.navigate(["/signin"]);
  }
  process(form: NgForm) {
    console.log(form.value); //get full object
    console.log(form.value.otp); //get only email value

    const data = {
      email_id: sessionStorage.getItem("email_id"),
      otp: form.value.otp
    };
    this.http
      .post("http://" + this.publicIp + "/VerifyOTP", data, {
        headers: new HttpHeaders().set("Content-type", "application/json")
      })
      .subscribe(
        d => {
          console.log(d);
          this.val = d as JSON;
          console.log(this.val);

          if (this.val["status"]) {
            $("#exampleModal").modal("hide");
            this.router.navigate(["/register"]);
          } else {
            this.invalidOTP = true;
            setTimeout(() => {
              this.invalidOTP = false;
            }, 1000);
          }
        },
        error => console.log(error)
      );

    // if(form.value.otp == 1234){
    //   $('#exampleModal').modal('hide')
    //   this.router.navigate(['/register']);
    // }
    // else if(form.value.otp == '' || undefined || null){
    //   this.emptyOTP = true;
    //   setTimeout(() => {
    //     this.emptyOTP = false;
    //   }, 1000);
    // }
    // else{
    //   this.invalidOTP = true;
    //   setTimeout(() => {
    //     this.invalidOTP = false;
    //   }, 1000);
    // }
  }

  register(form: NgForm) {
    const data = form.value;
    this.spinner = false;
    console.log(data);
    sessionStorage.setItem("email_id", form.value.email_id);
    this.http
      .post("http://" + this.publicIp + "/SignUpOTP", data, {
        headers: new HttpHeaders().set("Content-type", "application/json")
      })
      .subscribe(
        d => {
          console.log(d);
          this.val = d as JSON;
          this.spinner = true;
          if (this.val["status"]) {
            $("#exampleModal").modal("show");
          } else {
            this.registered = true;
            setTimeout(() => {
              this.registered = false;
            }, 3000);
          }
        },
        error => console.log(error)
      );
    // sessionStorage.setItem("email",form.value.email);
    // sessionStorage.setItem("passwrd",form.value.passwrd);
  }
  resendEmail() {
    console.log("sending email");
    this.showEmailAlert = true;
    setTimeout(() => {
      this.showEmailAlert = false;
    }, 1000);
  }
}
