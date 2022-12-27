import { Component, OnInit } from '@angular/core';
import { ApprovalService } from 'src/app/approval.service';
@Component({
  selector: 'app-basic-check',
  templateUrl: './basic-check.component.html',
  styleUrls: ['./basic-check.component.css']
})
export class BasicCheckComponent implements OnInit {
  message:any="";
  approvalText:any="";
  constructor(private appService:ApprovalService){}
 ngOnInit(){ 
  this.appService.currrentApprovalStageMessage.subscribe(messag=>this.message=messag);
  }
  submit(){
    console.log(this.approvalText)
    this.appService.updateApprovalSTageMessage(this.approvalText)
  }
}
