import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionarProductosComponent } from './funcion_productos/gestionar-productos/gestionar-productos.component';
import { GestionarComprasComponent } from './funcion_compras/gestionar-compras/gestionar-compras.component';
import { GestionarPagosComponent } from './funcion_pagos/gestionar-pagos/gestionar-pagos.component';
import { GestionarUsuariosComponent } from './funcion_usuarios/gestionar-usuarios/gestionar-usuarios.component';


@NgModule({
  declarations: [
    AppComponent,
    GestionarProductosComponent,
    GestionarComprasComponent,
    GestionarPagosComponent,
    GestionarUsuariosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
