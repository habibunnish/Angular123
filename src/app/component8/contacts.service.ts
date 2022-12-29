import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor( private httpClient:HttpClient) { }
  //getMethod
  getContacts(){
    return this.httpClient.get('http://localhost:3000/contacts');

  }
  getuserDetails(){
    return this.httpClient.get('http://localhost:3000/userDetails');
  }
  //postMethod
  createContact(createResource: any){
    const httpHeaders=new HttpHeaders();
    httpHeaders.append('content-type' , 'application/json');
    return this.httpClient.post('http://localhost:3000/contacts', createResource , { headers: httpHeaders });
  }

  //PUTMETHOD
  updateContact( EMAIL: string , updatedBody: any){

    return this.httpClient.put('http://localhost:3000/contacts'+ EMAIL , updatedBody)
  }

  deleteContact(EMAIL: string){
    const deleteEndPoint= 'http://localhost:3000/contacts' + EMAIL;
    return this.httpClient.delete(deleteEndPoint);
  }
}
