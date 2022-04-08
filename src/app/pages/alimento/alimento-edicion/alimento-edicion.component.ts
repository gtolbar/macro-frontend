import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Alimento } from 'src/app/_model/alimento';
import { AlimentoService } from 'src/app/_service/alimento.service';
import { ConsultaAlimentoService } from 'src/app/_service/consultaAlimento.service';

@Component({
  selector: 'app-alimento-edicion',
  templateUrl: './alimento-edicion.component.html',
  styleUrls: ['./alimento-edicion.component.css']
})
export class AlimentoEdicionComponent implements OnInit {

  id:number;
  form: FormGroup;

  alimento:Alimento;

  constructor(
  @Inject(MAT_DIALOG_DATA) private data: Alimento,
  private dialogRef: MatDialogRef<AlimentoEdicionComponent>,
  private alimentoService:AlimentoService,
  private consultaAlimentoService:ConsultaAlimentoService

  ) { }

  ngOnInit(): void {
   this.form = new FormGroup({
    'id':new FormControl(0),
    'nombre':new FormControl(''),
    'proteina':new FormControl(''),
    'carbohidrato':new FormControl(''),
    'grasa':new FormControl(''),
    'cantidad':new FormControl('')
   });

   if (this.data!==null) {
    this.id=this.data.id;
    this.initForm();
   }

  }

  initForm(){
    this.alimentoService.listarPorId(this.id).subscribe(data=>{
      this.form = new FormGroup({
        'id':new FormControl(data.id),
        'nombre':new FormControl(data.nombre),
        'proteina':new FormControl(data.proteina),
        'carbohidrato':new FormControl(data.carbohidrato),
        'grasa':new FormControl(data.grasa),
        'cantidad':new FormControl(data.cantidad)
       });
    });
  }

  operar(){
    let formData = new Alimento;
    formData.id = this.form.value['id'];
    formData.nombre = this.form.value['nombre'];
    formData.proteina = this.form.value['proteina'];
    formData.carbohidrato = this.form.value['carbohidrato'];
    formData.grasa = this.form.value['grasa'];
    formData.cantidad = this.form.value['cantidad'];

    if (this.data!==null) {
      this.alimentoService.modificar(formData).subscribe(()=>{
        this.consultaAlimentoService.consultaAlimentos().subscribe(data=>{
          this.consultaAlimentoService.setConsultaAlimentoCambio(data);
          this.consultaAlimentoService.setMensajeCambio("SE EDITO CON EXITO");
        });
      });
    }else{
      this.alimentoService.registrar(formData).subscribe(()=>{
        this.consultaAlimentoService.consultaAlimentos().subscribe(data=>{
          this.consultaAlimentoService.setConsultaAlimentoCambio(data);
          this.consultaAlimentoService.setMensajeCambio("SE REGISTRO CON EXITO");
        });
      });
    }


    this.dialogRef.close();
  }

  cancelar(){
    this.dialogRef.close();
  }

}
