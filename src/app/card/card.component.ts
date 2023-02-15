import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  user: User = new User('Dirk le Chevalier', 30, 'Il y a le Dragon, qui a kidnappé une princesse.', '../../assets/img/guer.png');

  resetQuote() {
    this.user.quote = '';
  }
}
