import { Component } from "@stencil/core";

@Component({
  tag: "app-tabs"
})
export class AppTabs {
 
  componentDidLoad() {}
  render() {
    return (
    
        <ion-tabs tabbarLayout="icon-start" tabbarPlacement="bottom">

          <ion-tab  label="Home" icon="home" component="app-home"></ion-tab>
          <ion-tab  label="Addition" icon="add" component="app-start"></ion-tab>
        </ion-tabs>
    
    );
  }
}
