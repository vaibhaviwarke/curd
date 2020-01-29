import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CURD';
  users;
  usr="";
  constructor(private _registrationService:ServiceService,private fb:FormBuilder ) { }
  // registrationForm=new FormGroup({
  //   EmpId : new FormControl(""),
  //   Name: new FormControl(""),
  //   EmpCode: new FormControl(''),
  //   Salary: new FormControl('')
  
  registrationForm=this.fb.group
  ({
    EmpId:[""],
    Name:[""],
    EmpCode:[""],
    Salary:[""]
});
deleteForm=this.fb.group
({
  delete:[""]
});

updateForm=this.fb.group
({
  EmpId1:[""],
  Name1:[""],
  EmpCode1:[""],
  Salary1:[""]
});
  ngOnInit() {}
register()
{
  let data =this.registrationForm.value;
  this._registrationService.createUser(data).subscribe(da=>{
    console.log("got result"+da)
  });
}

// updateUser()
// {
//   let data=this.updateForm.value;
//   this._registrationService.updateUser(data).subscribe(da=>{
//     console.log("got result"+da);

//   })
// }




deleteUser()
{
  this.usr=this.deleteForm.controls.delete.value;
  //console.log(this.usr);
  let a=this.usr.split(",");
  console.log(a);
  let u=a;
  this._registrationService.deleteUser(u).subscribe(data=>{
console.log("Deleted Succesfullyy")

  });
}
getUser()
{
  this._registrationService.getUser().subscribe(data=>
  {
    console.log(data);
    this.users=data;
});
}
updateUser()
{
  let data=this.updateForm.value;
  this._registrationService.updateUser(data).subscribe(da=>{
    console.log("got result"+da);

  })
}

}



