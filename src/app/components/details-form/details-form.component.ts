import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss']
})
export class DetailsFormComponent {
  name!:string;
  cardNumber!:string;
  month!:string;
  year!:string;
  cvc!:string;

  registerForm = this.fb.group({
      name:['', Validators.required],
      number:['',[Validators.required,this.cardNumberValidation]],
      month:['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])$')]],
      year:['', [Validators.required ,this.yearValidation]],
      cvc:['', [Validators.required,this.cvcValidation]],
  });

  isSubmitted!:boolean;
  constructor(private fb: FormBuilder){}
  
  submit():void{
    console.log("submitted",this.registerForm.value,this.registerForm.invalid);

    this.isSubmitted = true;
  }

  cardNumberValidation(control: { value: any; }) {
    const input = control.value;
  

    if (!/^(\d{4}\s){3}\d{4}$/.test(input)) {
      return { 'invalidPattern': true };
    }
  
    return null;
  }
  yearValidation(control: { value: any; }){
    const year = control.value;


    if (!/^\d{2}$/.test(year)) {
      return { 'invalidTwoDigitYear': true };
    }

    return null;
  }

  cvcValidation(control: { value: any; }){
    const cvcValue = control.value;


    if (!/^\d{3}$/.test(cvcValue)) {
      return { 'invalidThreeDigitCvc': true };
    }
    return null;
  }
  
  
}
