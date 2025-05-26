import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-simple-chat',
  imports: [
    MatCardModule,
    MatToolbar,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './simple-chat.html',
  styleUrl: './simple-chat.scss'
})
export class SimpleChat {
  constructor() { }

  title = 'Simple Chat';
  messages = signal([
    { text: 'Como posso ajudar?', isBost: true }
  ]);

}
