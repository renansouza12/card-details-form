# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./../../../assets/img/screenshot.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://gregarious-crumble-17bc55.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [Angular](https://angular.io/) - JS library
- [Sass](https://sass-lang.com/) - Css librar

### What I learned

I learned how to use ReactiveForms , how to import the module how to create in the  component.ts and link to component.html . How to add Validators and create custom Validators and display an erro message.

```app.module.ts
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
 
```
```details-form.component.html
    <form [formGroup]="registerForm">
          <input  name="name" formControlName="name" [class.invalid]="registerForm.get('name')?.invalid && 
            (registerForm.get('name')?.dirty || 
            registerForm.get('name')?.touched || isSubmitted)">

     <span class="erro" *ngIf="registerForm.get('name')?.invalid && 
            (registerForm.get('name')?.dirty || 
            registerForm.get('name')?.touched || isSubmitted)">Erro message</span>
    </form>

```
```details-form.component.ts
     registerForm = this.fb.group({
      name:['', Validators.required],
  });
}
```


### Useful resources

- [Reactive form Angular](https://angular.io/guide/reactive-forms) - This helped me giving me a view about the reactive form.
- [Video about reactive forms Angular](https://www.youtube.com/watch?v=U9Xo0wXZIAg) - This video helped me to understand how the reactive forms works and how to add validators and display a custom erro message.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Renan Souza](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)

