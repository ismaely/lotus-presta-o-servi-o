import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { ManComponent } from './man/man.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { ServicoComponent } from './page/servico/servico.component';
import { ContactoComponent } from './page/contacto/contacto.component';
import { BodyParallaxComponent } from './body-parallax/body-parallax.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalheComponent } from './page/detalhe/detalhe.component';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BodyComponent,
    FooterComponent,
    ManComponent,
    BannerComponent,
    GalleryComponent,
    ServicoComponent,
    ContactoComponent,
    BodyParallaxComponent,
    DetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
