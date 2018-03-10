import { Component } from "@angular/core";

@Component({
  selector: 'app-logout',
  template: `
    <div class="col-md-8 col-md-offset-2">
      <button (click)="onLogout()" class="btn btn-danger">Logout</button>
    </div>
  `
})

export class LogoutComponent {

}