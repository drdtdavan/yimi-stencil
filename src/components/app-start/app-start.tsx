import { Component, State, Element, Prop } from "@stencil/core";
import { DB } from "../../services/database";

@Component({
  tag: "app-start"
})
export class AppStart {
  displayError(error: any): any {
    this.toastCtrl
    .create({
      position:"top",
      message: error.message,
      showCloseButton: true      
    })
    .then(toast => {
      toast.present();
    });
  }
  @Prop({ connect: "ion-toast-controller" })
  toastCtrl: HTMLIonToastControllerElement;
  @Element() el: HTMLElement;
  @State() c: any;
  renderLoginOrRegister(): any {
    this.c = (
      <div>
        <ion-button expand="block" onClick={() => this.renderLogin()}>
          Login
        </ion-button>
        <ion-button color="danger" expand="block" onClick={() => this.renderRegister()}>
          Register
        </ion-button>
      </div>
    );
  }

  navToTabs(): any {
    this.el.closest("ion-nav").push("app-tabs");
  }

  login() {
    let email = (document.getElementById("IEmail") as HTMLInputElement).value;
    let password = (document.getElementById("IPassword") as HTMLInputElement).value;
    this.c = (
      <div>
        <ion-spinner />
        <h1>Loading...</h1>
      </div>
    );
    DB.signIn(email, password).then(user => {
      if (user) this.navToTabs();
    }).catch((error)=>{this.displayError(error);this.renderLoginOrRegister()});
  }

  register() {}

  renderRegister() {
    this.c = (
      <div>
        <ion-item>
          <ion-label position="floating">Email Address</ion-label>
          <ion-input id="IEmail" />
        </ion-item>
        <ion-item>
          <ion-label position="floating">PassWord</ion-label>
          <ion-input id="IPassword" />
        </ion-item>
        <ion-button color="secondary" onClick={() => this.register()}>
          Register
        </ion-button>
        <br />
      </div>
    );
  }

  renderLogin() {
    this.c = (
      <div>
        <ion-item>
          <ion-label position="floating">Email Address</ion-label>
          <ion-input id="IEmail" />
        </ion-item>
        <ion-item>
          <ion-label position="floating">PassWord</ion-label>
          <ion-input id="IPassword" />
        </ion-item>
        <ion-button color="secondary" onClick={() => this.login()}>
          Login
        </ion-button>
        <br />
      </div>
    );
  }

  componentDidLoad() {
    this.c = (
      <div>
        <ion-spinner />
        <h1>Loading...</h1>
      </div>
    );
    DB.init();
    DB.authState().onAuthStateChanged(user => {
      if (user) {
        this.navToTabs();
      } else {
        this.renderLoginOrRegister();
      }
    });
  }

  render() {
    return this.c;
  }
}
