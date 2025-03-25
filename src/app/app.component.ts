import { Component } from '@angular/core';
import { UserAnalyticsComponent } from './user-analytics/user-analytics.component';

@Component({
  selector: 'app-root',
  imports: [UserAnalyticsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'microfrontend_remote';
}
