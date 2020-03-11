import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { SecretMessage } from '../secret-message';

@Component({
  selector: 'app-secret-site',
  template: `
    <section>
        <h2>Secret site :)</h2>
        this is your secret: {{userMeta | json}}
    </section>
  `
})
export class SecretSiteComponent implements OnInit {

  userMeta: SecretMessage = {name: '', role: ''};

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getSecretMessage().subscribe((msg: SecretMessage) => {
      this.userMeta = msg;
    });
  }

}
