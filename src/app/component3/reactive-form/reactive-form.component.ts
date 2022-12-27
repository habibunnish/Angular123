import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UniqueAlterEgoValidator } from '../alter-ego.directive';
import { forbiddenNameValidator} from '../forbidden-name.directive';
import { identityRevealedValidator } from '../identity-revealed.directive';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  Genders= ['Female','Male','Transgender'];  
  name={ FirstName :'Mr/Ms', LastName :'lastname' , Gender :this.Genders[0] ,address :' current address your'};
  newForm!:FormGroup;

  ngOnInit(){
    this.newForm=new FormGroup({
      FirstName:new FormControl(this.name.FirstName,[
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i)    
      ]),
      alterEgo:new FormControl(this.name.LastName ,{
        asyncValidators:[this.alterEgoValidator.validate.bind(this.alterEgoValidator)],
        updateOn :'blur'
      }),
      Gender:new FormControl(this.name.Gender,Validators.required)
    },{validators:identityRevealedValidator});
  }
  get FirstName(){
    return this.newForm.get('FirstName')!;
  }
  get LastName(){
    return this.newForm.get('LastName')!;
  }

  get Gender(){
    return this.newForm.get('Gender')!;
  }
  get Address(){
    return this.newForm.get('Address')!;
  }
  constructor(private alterEgoValidator :UniqueAlterEgoValidator){}

}
