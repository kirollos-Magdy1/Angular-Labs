import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
  selector: 'app-register-student',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register-student.component.html',
  styleUrl: './register-student.component.css',
})

export class RegisterStudentComponent {
  nameValMsg="Name min length of 3 litters";
  ageValMsg = "20 <= Age <= 30";
  emailValMsg = "email invalid";
  isFormSubmitted = false;

  myRegForm = new FormGroup({
    name:new FormControl(null,[Validators.required, Validators.minLength(3)]),
    age:new FormControl(null,[Validators.required, Validators.min(20), Validators.max(30)]),
    email:new FormControl(null,[Validators.required, Validators.email])

  })

  get NameValid(){
    return this.myRegForm.controls.name.valid
  }
  get AgeValid(){
    return this.myRegForm.controls.age.valid
  }
  get EmailValid(){
    return this.myRegForm.controls.email.valid
  }

  get formValid() {
    return this.myRegForm.valid;
  }
  

  get formTouched() {
    return !this.myRegForm.untouched
  }

  get nameTouched() {
    return !this.myRegForm.controls.name.untouched
  }

  get NameEmpty() {
    return !this.myRegForm.controls.name.value
  }
  get AgeEmpty() {  
    return !this.myRegForm.controls.age.value
  }
  
  get EmailEmpty() {  
    return !this.myRegForm.controls.email.value
  }

  get formDirty() {
    return this.myRegForm.dirty;
  }

  get FormSubmitted() {
    return this.isFormSubmitted;
  }


  submitData(){
    if(this.myRegForm.valid){
      console.log('valid');
      console.log(this.myRegForm);
      this.isFormSubmitted = true;
      this.myRegForm.controls.name.setValue(null);
      this.myRegForm.controls.age.setValue(null);
      this.myRegForm.controls.email.setValue(null);



    }else{
      console.log('Invalid');
      console.log(this.myRegForm);
      this.isFormSubmitted = true;
      
      if(!this.myRegForm.controls.name.valid) console.log(this.nameValMsg)
      if(!this.myRegForm.controls.age.valid) console.log(this.ageValMsg)
      if(!this.myRegForm.controls.email.valid) console.log(this.emailValMsg)


    }

  }
}