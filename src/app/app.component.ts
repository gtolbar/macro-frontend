import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PersonaComponent } from './pages/persona/persona.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sencillo-frontend';
  constructor(
    public dialog: MatDialog
    ) {}

  openDialog() {
    this.dialog.open(PersonaComponent);
  }
}
