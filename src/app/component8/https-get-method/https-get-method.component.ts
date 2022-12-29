import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-https-get-method',
  templateUrl: './https-get-method.component.html',
  styleUrls: ['./https-get-method.component.css']
})
export class HttpsGetMethodComponent implements OnInit{
deleteContact(arg0: number) {
throw new Error('Method not implemented.');
}

  constructor(private contactsService:ContactsService){}
  msgTrue=false;
  // MsgTrue=false;
  contactList:any;
  UserDetails:any;


  ngOnInit(): void {
    this.contactList=this.contactsService.getContacts().subscribe(data=>{
      this.contactList=data;
    this.UserDetails=this.contactsService.getuserDetails().subscribe(data=>{
      this.UserDetails=data;
    })
    });
  }

  addNewContact(form: { value: { FIRSTNAME: any; LASTNAME: any; EMAIL: any; }; }){
    // const newFormData={
    //   FirstName:"Bubbly",
    //   LastName:"SINGH",
    //   Email:"habicute111@gmail.com"
    // };

      console.log(form.value.FIRSTNAME);
      console.log(form.value.LASTNAME);
      console.log(form.value.EMAIL);

      const newFormData={FIRSTNAME:form.value.FIRSTNAME ,LASTNAME:form.value.LASTNAME, EMAIL:form.value.EMAIL}
    
   this.contactsService.createContact(newFormData).subscribe(data=>{
      console.log(data);
      this.msgTrue=true;
    })
  }
  
  updateContact(EMAIL: any){
    const newFormData={FIRSTNAME:"bubb" ,LASTNAME:'bo', EMAIL:"habi#123"}
    this.contactsService.updateContact(EMAIL ,newFormData).subscribe(data=>{
      console.log(data);
      this.msgTrue=true;
    })
  }
delteContact(EMAIL: any){
  this.contactsService.deleteContact(EMAIL);
}
  
}
