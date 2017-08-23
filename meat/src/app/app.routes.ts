import { Routes } from "@angular/router";
import { HomeComponent } from "app/home/home.component";
import { AboutComponent } from "app/about/about.component";
import { RestauranteComponent } from "app/restaurante/restaurante.component";
import { PedidoComponent } from "app/pedido/pedido.component";

export const ROUTES: Routes = [
     {path:'',component :HomeComponent },
     {path:'About',component :AboutComponent },
     {path:'restaurante',component :RestauranteComponent },
     {path:'Pedido',component :PedidoComponent }


]