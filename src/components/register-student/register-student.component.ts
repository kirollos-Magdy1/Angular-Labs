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
  nameReq=""

  myRegForm = new FormGroup({
    name:new FormControl(null,[Validators.required]),
    age:new FormControl(null,[Validators.min(20), Validators.max(30)])
  })

  get NameValid(){
    return this.myRegForm.controls.name.valid
  }
  get AgeValid(){
    return this.myRegForm.controls.age.valid
  }

  submitData(){
    if(this.myRegForm.valid){
      console.log(this.myRegForm);
      console.log(this.myRegForm.value);
      console.log(this.myRegForm.valid);
      console.log("Name Valid: ",this.myRegForm.controls.name.valid);
      console.log("Age Valid: ",this.myRegForm.controls.age.valid);
    }else{
      this.nameReq = "Name Required"
    }

  }
}
//////////////////////////////////////////////////
