import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
 

  constructor( private httpClient:HttpClient) { }
  //getMethod
  getContacts(){
    const httpHeaders=new HttpHeaders()
    httpHeaders.append('content-type' , 'application/json');
  return this.httpClient.get('http://localhost:3000/contacts',{headers:httpHeaders});
                                                                                                 
  }                                                                                                                                                                                                                                                                            
 
  //postMethod
  createContact(createResource: any){
    const httpHeaders=new HttpHeaders();
    httpHeaders.append('content-type' , 'application/json');
    return this.httpClient.post('http://localhost:3000/contacts/', createResource , { headers: httpHeaders });
  }

  //PUTMETHOD
  updateContact( CONTACTId: string , updatedBody: any){
    return this.httpClient.put('http://localhost:3000/contacts/'+ CONTACTId , updatedBody);
  }

  //DELETEMETHOD
  deleteContact(FirstName: string){
    const deleteEndPoint= 'http://localhost:3000/contacts/' + FirstName;
    return this.httpClient.delete(deleteEndPoint);
  }

  //param using get contact by firstname
  getContactById(){
    const httpParams=new HttpParams({
      fromObject:{
        FirstName:'Akash'
      }
    });
    return this.httpClient.get('http://localhost:3000/contacts' , {params:httpParams});

  }
}
