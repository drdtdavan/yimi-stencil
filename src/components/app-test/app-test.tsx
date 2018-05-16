import { Component } from "@stencil/core";

@Component({
  tag: "app-test",
  styleUrl: 'app-test.scss'
})
export class AppTest {
  render() {
    return (
       <ion-card  ><span> hello</span></ion-card>
    );
  }
}
