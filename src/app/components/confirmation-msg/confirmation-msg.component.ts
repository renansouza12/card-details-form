import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-confirmation-msg',
  templateUrl: './confirmation-msg.component.html',
  styleUrls: ['./confirmation-msg.component.scss']
})
export class ConfirmationMsgComponent {

  @Output() confirmation = new EventEmitter<string>();

  btnContinue():void{
    this.confirmation.emit();
  }
}
