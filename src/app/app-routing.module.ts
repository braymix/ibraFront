import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { CreaNuovoArticoloComponent } from './crea-nuovo-articolo/crea-nuovo-articolo.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DescrizioneProdottoComponent } from './descrizione-prodotto/descrizione-prodotto.component';

const routes: Routes = [{
  path: "",
  component: ShopComponent
  },
  {
    path: "art",
    component: CreaNuovoArticoloComponent
  },
  {
    path: "aboutUs",
    component: AboutUsComponent
  },
  {
    path: "descrizione/:nome",
    component: DescrizioneProdottoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
