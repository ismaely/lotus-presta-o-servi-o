import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManComponent } from './man/man.component';
import { MenuComponent } from './menu/menu.component';
import { ServicoComponent } from './page/servico/servico.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { ContactoComponent } from './page/contacto/contacto.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ManComponent,
    data: {
      title: 'Index'
    }

  },
  {
    path: 'servico',
    component: ServicoComponent,
    data: {
      title: 'Serviços'
    }
  },
  {
    path: 'galeria',
    component: GalleryComponent,
    data: {
      title: 'Galeria'
    }
  },
  {
    path: 'contacto',
    component: ContactoComponent,
    data: {
      title: 'Contacto'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
