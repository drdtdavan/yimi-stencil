import { Component } from '@stencil/core';


@Component({
  tag: 'app-teststuff',
  
})
export class AppTestStuff {

  CL(): any {
    let email: string;    
    let InpEmail=document.getElementById('InpEmail') as HTMLInputElement
    email=InpEmail.value;
    console.log(email);
  }
  render() {
    return(
    <ion-content>
    <ion-item>
    <ion-label position="floating">Email Address</ion-label>
    <ion-input id="InpEmail" />
   </ion-item>
   <ion-button color="tertiary" expand="block" strong ={true} onClick={() => this.CL()}>
          Console Log
        </ion-button>
   </ion-content>) 
  }
}
