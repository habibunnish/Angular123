import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  submit(){
    console.log("form submitted" )
  }
onSubmit(){
  console.log("new form done")
}
}
