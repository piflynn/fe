import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@fe/api-interfaces';

@Component({
  selector: 'fe-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'ian';
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}
