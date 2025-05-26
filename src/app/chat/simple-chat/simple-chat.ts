import { Component, signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbar } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-simple-chat',
  imports: [
    ReactiveFormsModule,
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
  chatForm: FormGroup;
  title = 'Simple Chat';
  messages = signal([
    { text: 'Como posso ajudar?', isBost: true }
  ]);

  constructor(private fb: FormBuilder) {
    this.chatForm = this.fb.group({
      messageText: ['']
    });
  }

  sendMessage() {
    if (this.chatForm.valid && this.chatForm.value.messageText?.trim()) {
      this.messages.update(messages => [...messages, { text: this.chatForm.value.messageText, isBost: false }]);
      this.chatForm.reset();
    }
  }
}
