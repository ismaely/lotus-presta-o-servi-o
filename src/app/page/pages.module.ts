import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MenuComponent } from '.././menu/menu.component';
import { BodyComponent } from '.././body/body.component';
import { FooterComponent } from '.././footer/footer.component';
import { ManComponent } from '.././man/man.component';
import { BannerComponent } from '.././banner/banner.component';
import { BodyParallaxComponent } from '.././body-parallax/body-parallax.component';

import { ContactoComponent } from './contacto/contacto.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServicoComponent } from './servico/servico.component';




@NgModule({
  declarations: [
    MenuComponent,
    BodyComponent,
    FooterComponent,
    ManComponent,
    BannerComponent,
    BodyParallaxComponent,
    GalleryComponent,
    ServicoComponent,
    LoginComponent,
    ContactoComponent,
    DetalheComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
