import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = "";
  pass = "";
  user : any;
  postdata = {}
  constructor(private http: HttpClient, public router: Router) {}

  ngOnInit() {
  }

  login_fun()
  {
    this.postdata={
      'add':'true',
      'user':{
        'email': this.email,
        'pass': this.pass
      }
    }

    this.http.post("http://127.0.0.1:8000/userlogin/", this.postdata).subscribe(data =>{
      // console.log(data);
      this.user = data;  
      console.log(this.user);
      if(this.user['status'] == 'User already exists')
      {
        this.router.navigate(['/home']);
      }
      else if(this.user['status'] == 'No user found')
      {
        this.router.navigate(['/signup']);
      }
    })

        
  }

}
