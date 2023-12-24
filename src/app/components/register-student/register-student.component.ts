import { compileNgModule } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

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
  submitted = false;
  nameInitialValue = null;

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

  

  get isSubmitted(){
    return this.submitted;
  }


  get nameValChanged() {
    
    return this.myRegForm.controls.name.dirty;
  }

  get ageValChanged() {
    return this.myRegForm.controls.age.dirty;

  }


  get emailValChanged() {
    return this.myRegForm.controls.email.dirty;

  }
  


  // get nameStateChanged() {
  //   const nameControl = this.myRegForm.controls.name;
  //   return nameControl.value != this.nameInitialValue;
  // }


  submitData(){
    this.submitted = true;
    if(this.myRegForm.valid){
      console.log(this.myRegForm);      
      this.myRegForm.reset();
      this.submitted = false;


    }else{
      console.log('Invalid');
      // this.NameValid();
      if(!this.myRegForm.controls.name.valid) console.log(this.nameValMsg)
      if(!this.myRegForm.controls.age.valid) console.log(this.ageValMsg)
      if(!this.myRegForm.controls.email.valid) console.log(this.emailValMsg)


    }

  }
}