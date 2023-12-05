import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss','details-form-card.component.scss',
  'details-form-card.responsive.component.scss','details-form.responsive.component.scss']
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
      month:['', [Validators.required,Validators.pattern('^(0[1-9]|1[0-2])$')]],
      year:['', [Validators.required ,this.yearValidation]],
      cvc:['', [Validators.required,this.cvcValidation]],
  });


  displayForm:boolean = true;
  confirmationMsg:boolean = false;

  isSubmitted!:boolean;
  constructor(private fb: FormBuilder){}
  
  submit():void{
    console.log("submitted",this.registerForm.value,this.registerForm.invalid);

    if(!this.registerForm.invalid){
      this.displayForm = false;
      this.confirmationMsg = true;
    }
    this.isSubmitted = true;
  }

  btnConfirmation():void{
    console.log('clicked');
    this.displayForm = true;
    this.confirmationMsg = false;

    this.name = '';
    this.cardNumber = '';
    this.month = '';
    this.year = '';
    this.cvc = '';
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
  digitsLimit(maxDigits:Number){
    return (control:any) => {
      const inputValue = control.value.toString();
      if (inputValue.length > maxDigits) {
        return { maxDigits: true };
      }
      return null;
    };
  } 
  
  
}
