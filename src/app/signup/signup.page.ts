import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ShoppingService } from '../services/shopping.service';


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

  constructor(private http: HttpClient, public router: Router, public toastC: ToastController,public service: ShoppingService) {}

  ngOnInit() {
  }

  signup_fun()
  {
    if(this.pass == this.repass){

      if(this.email != "" && this.pass != "" && this.username != "" && this.name != "" && this.number != "" && this.repass != ""){
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
    
        this.http.post("http://127.0.0.1:8000/api/usersignup/", this.postdata).subscribe(data =>{
          console.log(data);
          this.user = data;
          if(this.user['status'] == 'User already exists')
          {
            this.presentToast("You Already Have An Account! \tLogin Here.....")
            this.router.navigate(['/login']);
          }
          else if(this.user['status'] == 'User Added')
          {
            this.presentToast("Registered Successfully!");
            this.service.current_mail = this.email;
            this.service.current_pass = this.pass;
            this.router.navigate(['/home']);
          }          
        });
      }
      else{
        this.presentToast("Fill every Detail!")
      }
    }
    else
    {
      this.presentToast("Password should match in both Places!")
    }
  }
   
  async presentToast(msg){
    const toast =  await this.toastC.create({
      message: msg,
      duration: 2000,
      position: "top",
      color: "dark",
      cssClass: 'customclass'
    });
    toast.present();
  }

}
