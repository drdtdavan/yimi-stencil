import { Component, State } from "@stencil/core";
import { DB } from "../../services/database";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @State() c: any;
  componentDidLoad() {
    this.renderTopics();
  }
  renderTopics() {
    let tempC = [];

    DB.getTopics()
      .then(QS => {
        QS.docs.map(doc => {
          tempC.push(
            <ion-card>
              <ion-card-header>
                <ion-item>
                  <ion-avatar slot="start">
                    <img src={doc.data().profileUrl} />
                  </ion-avatar>
                  <div>
                    <h2><span>{doc.data().nickname}</span></h2>
                    <h4>{doc.data().school}</h4>
                  </div>
                </ion-item>
              </ion-card-header>
            </ion-card>
          );
        });
        this.c = tempC;
        console.log(tempC);
      })
      .catch(error => console.log(error));
  }
  render() {
    return <div>{this.c}</div>;
  }
}
