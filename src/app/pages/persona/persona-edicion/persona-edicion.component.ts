import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Persona } from 'src/app/_model/persona';
import { PersonaService } from 'src/app/_service/persona.service';

@Component({
  selector: 'app-persona-edicion',
  templateUrl: './persona-edicion.component.html',
  styleUrls: ['./persona-edicion.component.css']
})
export class PersonaEdicionComponent implements OnInit {

  id:number;
  form:FormGroup;

  persona:Persona;

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: Persona,
    private dialogRef: MatDialogRef<PersonaEdicionComponent>,
    private personaService:PersonaService
  ) { }

  ngOnInit(): void {
    this.persona=this.data;
    this.form = new FormGroup({
      'id':new FormControl(0),
      'nombre':new FormControl(''),
      'edad':new FormControl(''),
      'altura':new FormControl(''),
      'peso':new FormControl(''),
      'fotoUrl':new FormControl(''),
      'idUsuario':new FormControl(''),
      'idPeriodo':new FormControl(''),
     });

     if (this.data!==null) {
       this.id=this.data.id;
       this.initForm();
     }
  }

  cancelar(){
    this.dialogRef.close();
  }

  operar(){
    let formData=new Persona;
    formData.id = this.form.value['id'];
    formData.nombre = this.form.value['nombre'];
    formData.edad = this.form.value['edad'];
    formData.altura = this.form.value['altura'];
    formData.peso = this.form.value['peso'];
    formData.fotoUrl = this.form.value['fotoUrl'];
    formData.idUsuario = this.form.value['idUsuario'];
    formData.idPeriodo = this.form.value['idPeriodo'];

    if (this.data!==null) {
      this.personaService.modificar(formData).subscribe(()=>{
        this.personaService.setMensajeCambio("SE EDITO CON EXITO");
      });
    }
    this.dialogRef.close();
  }

  initForm(){
    this.personaService.listarPorId(this.id).subscribe(data=>{
      this.form = new FormGroup({
        'id':new FormControl(data.id),
        'nombre':new FormControl(data.nombre),
        'edad':new FormControl(data.edad),
        'altura':new FormControl(data.altura),
        'peso':new FormControl(data.peso),
        'fotoUrl':new FormControl(data.fotoUrl),
        'idUsuario':new FormControl(data.idUsuario),
        'idPeriodo':new FormControl(data.idPeriodo),
       });
    });
  }

  seleccionarArchivo(e: any) {

  }
}
