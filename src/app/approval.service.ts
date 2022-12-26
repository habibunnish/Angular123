import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {
   
  private approvalStageMessage=new BehaviorSubject('Basic approval is required !');
  currrentApprovalStageMessage=this.approvalStageMessage.asObservable();
  constructor() { }

updateApprovalSTageMessage(message:any){
  this.approvalStageMessage.next(message)
}

}