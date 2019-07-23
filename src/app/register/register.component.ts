import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ServerService } from "../server.service";
import Swal from 'sweetalert2';
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  status: boolean = false;
  loader: boolean = true;
  spinner: boolean = true;
  constructor(private http: HttpClient, private router: Router,private server : ServerService) {}

  ngOnInit() {}
 
  userRegister(form: NgForm) {
    this.spinner = false;
    if (form.valid) {
      this.server.userRegister(form.value).subscribe((res:any)=>{
        if(res['status']){
          Swal.fire({
           
            type: 'success',
            title: 'Sign in to continue',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(["/signin"]);
        }
      },(error)=>{
        console.log(error);
      })

  }
}
}
