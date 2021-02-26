import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  email = "";
  pass = "";
  username = "";
  name = "";
  number = "";
  repass = "";
  user : any;
  postdata = {}

  constructor(private http: HttpClient, public router: Router) {}

  ngOnInit() {
  }

  signup_fun()
  {
    if(this.pass == this.repass){
      
      this.postdata = 
      {
        'add':'true',
        'user':
        {
          'email': this.email,
          'pass': this.pass,
          'username': this.username,
          'name': this.name,
          'number': this.number
        }
      }
  
      this.http.post("http://127.0.0.1:8000/usersignup/", this.postdata).subscribe(data =>{
        console.log(data);
        this.user = data;
        if(this.user['status'] == 'User already exists')
        {
          this.router.navigate(['/login']);
        }
        else if(this.user['status'] == 'User Added')
        {
          this.router.navigate(['/home']);
        }          
      })
    }
    else
    {
      console.log("password should match in both places");
    }
  } 

}
