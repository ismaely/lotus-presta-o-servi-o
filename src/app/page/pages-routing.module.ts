import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicoComponent } from './servico/servico.component';

const routes: Routes = [
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
  },
  {
    path: 'detalhe',
    component: DetalheComponent,
    data: {
      title: 'Detalhe'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
