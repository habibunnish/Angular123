import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-https-get-method',
  templateUrl: './https-get-method.component.html',
  styleUrls: ['./https-get-method.component.css']
})
export class HttpsGetMethodComponent implements OnInit{


  constructor(private contactsService:ContactsService){}
  msgTrue=false;
  contactList:any;

  //get
  ngOnInit(): void {
    this.contactList=this.contactsService.getContacts().subscribe(data=>{
      this.contactList=data;
    });
  }

  //post
  addNewContact(){
    const newFormData={
      FirstName:"amarnath",
      LastName:"Arumugam",
      Email:"amar@3456gmail.com"
    };
      this.contactsService.createContact(newFormData).subscribe(data=>{
      console.log(data);
      this.msgTrue=true;
    })
  }
  
  //put
  updateContact(CONTACTId: any){
    const newFormData={FirstName:'najma' ,LastName:'Khatoon', Email:"najma@498"}
    this.contactsService.updateContact(CONTACTId ,newFormData).subscribe(data=>{
      console.log(data);
      this.msgTrue=true;
    })
  }

  //delete
  deleteContact(FirstName: any){
     this.contactsService.deleteContact(FirstName).subscribe(data=>{
      console.log(data);
      this.msgTrue=true;
     });
}
//param example
getContact(){
  this.contactsService.getContactById().subscribe(data=>{
    console.log(data)

  })
}
  
}
