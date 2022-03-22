import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-persona-edicion',
  templateUrl: './persona-edicion.component.html',
  styleUrls: ['./persona-edicion.component.css']
})
export class PersonaEdicionComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<PersonaEdicionComponent>,
  ) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.dialogRef.close();
  }

  aceptar(){
    this.dialogRef.close();
  }

}
