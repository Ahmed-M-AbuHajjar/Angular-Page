import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 
   validateName(){
    let name = document.getElementById('name') as any;
    if(name.value == ''){
      document.getElementById('name-validate')?.classList.remove('d-none')
    } else {
      document.getElementById('name-validate')?.classList.add('d-none')
    }
  }
  validateEmail(){
    let email = document.getElementById('email') as any;
    if(email.value == ''){
      document.getElementById('email-validate')?.classList.remove('d-none')
    } else {
      document.getElementById('email-validate')?.classList.add('d-none')
    }
  }
  validatePhone(){
    let phone = document.getElementById('phone') as any;
    if(phone.value == ''){
      document.getElementById('phone-validate')?.classList.remove('d-none')
    } else {
      document.getElementById('phone-validate')?.classList.add('d-none')
    }
  }
  validatemessage(){
    let message = document.getElementById('message') as any;
    if(message.value == ''){
      document.getElementById('message-validate')?.classList.remove('d-none')
    } else {
      document.getElementById('message-validate')?.classList.add('d-none')
    }
  }
  validateForm(){
    
    this.validateName();
    this.validateEmail();
    this.validatePhone();
    this.validatemessage();
  }
  emailRegex(){
    let email = document.getElementById("email") as any;
    let regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if(regex.test(email.value) == true || email.value == ""){
      document.getElementById('email-rgx')?.classList.add('d-none')
    } else {
      document.getElementById('email-rgx')?.classList.remove('d-none')
    }
  }
}
