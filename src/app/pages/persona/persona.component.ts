import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Persona } from 'src/app/_model/persona';
import { PersonaService } from 'src/app/_service/persona.service';
import { PersonaEdicionComponent } from './persona-edicion/persona-edicion.component';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  fotoUrl:String;
  persona:Persona;

  constructor(
    private dialogRef: MatDialogRef<PersonaEdicionComponent>,
    public dialog: MatDialog,
    private personaService:PersonaService,
    private snackBar:MatSnackBar,
    ) { }

  ngOnInit(): void {

    this.personaService.listarPorId(1).subscribe(data=>{
      this.actualizarPerfil(data);
    });

    this.personaService.getMensajeCambio().subscribe((data:string) => {
      this.snackBar.open(data, 'AVISO', {
        duration: 2000,
        verticalPosition: "bottom",
        horizontalPosition: "center"
      });
    });
  }

  actualizarPerfil(data:Persona){
    this.persona=data;
  }

  editarPersona(){
    this.dialogRef.close();
    this.dialog.open(PersonaEdicionComponent,{data:this.persona});
  }

  aceptar(){
    this.dialogRef.close();
  }
}
