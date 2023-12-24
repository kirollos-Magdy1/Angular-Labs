import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private myClient:HttpClient) {}
  // private URL_DB = "https://jsonplaceholder.typicode.com/users";
  private URL_DB = "http://localhost:3000/users";
  // private Students_DB = "http://localhost:3000/students";
  // private Instructors_DB = "http://localhost:3000/instructors";
  // http://localhost:3000/students

  getAllStudents(){
    return this.myClient.get(this.URL_DB);
  }

  getStudentByID(id:number){
    return this.myClient.get(this.URL_DB+"/"+id);
  }

  AddNewStudent(newStd:any){
    return this.myClient.post(this.URL_DB,newStd);
  }
}
