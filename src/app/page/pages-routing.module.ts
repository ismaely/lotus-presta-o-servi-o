import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstrucaoCivilComponent } from './construcao-civil/construcao-civil.component';
import { ConstrucaoManutencaoPscinaComponent } from './construcao-manutencao-pscina/construcao-manutencao-pscina.component';
import { ContactoComponent } from './contacto/contacto.component';
import { CriacaoManutencaoJardimComponent } from './criacao-manutencao-jardim/criacao-manutencao-jardim.component';
import { DesinfestacaoLimpezaComponent } from './desinfestacao-limpeza/desinfestacao-limpeza.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicoComponent } from './servico/servico.component';

CriacaoManutencaoJardimComponent

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
  },
  {
    path: 'criacao-manutencao-jardim',
    component: CriacaoManutencaoJardimComponent,
    data: {
      title: 'Criação e Manutenção de Jardim'
    }
  },
  {
    path: 'construcao-manutencao-pscina',
    component: ConstrucaoManutencaoPscinaComponent,
    data: {
      title: 'Construção Manutencao Pscina'
    }
  },
  {
    path: 'construcao-civil',
    component: ConstrucaoCivilComponent,
    data: {
      title: 'Construção Civil'
    }
  },
  {
    path: 'desinfestação-limpeza',
    component: DesinfestacaoLimpezaComponent,
    data: {
      title: 'Desinfestação-e-Limpeza'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
