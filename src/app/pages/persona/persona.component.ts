import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PersonaEdicionComponent } from './persona-edicion/persona-edicion.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PersonaEdicionComponent>,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  editarPersona(){
    this.dialogRef.close();
    this.dialog.open(PersonaEdicionComponent)
  }

  aceptar(){
    this.dialogRef.close();
  }
}
