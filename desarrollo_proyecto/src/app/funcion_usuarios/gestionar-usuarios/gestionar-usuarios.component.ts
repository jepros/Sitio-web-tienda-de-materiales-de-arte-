import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

declare var validardatosusuario:any;

@Component({
  selector: 'app-gestionar-usuarios',
  templateUrl: './gestionar-usuarios.component.html',
  styleUrls: ['./gestionar-usuarios.component.css']
})
export class GestionarUsuariosComponent implements OnInit {

 vali='';

  datosformulario = new FormGroup({
    sexo_usuario: new FormControl(''),
    cedula_usuario: new FormControl(''),
    nombre_usuario: new FormControl(''),
    email_usuario: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),

  });

  altausuario(){
    
    let sexo=this.datosformulario.value.sexo_usuario;
    
     this.vali= validardatosusuario(sexo);
    //alert(sexo);
    //alert(this.datosformulario.value.cedula_usuario);
  }

  constructor() { }

  ngOnInit(): void {
  }}

