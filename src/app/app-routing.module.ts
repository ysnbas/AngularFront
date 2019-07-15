import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyHomePageComponent} from './my-home-page/my-home-page.component';
import {MyCenterComponent} from './my-center/my-center.component';

const routes: Routes = [
  {path: 'home', component: MyHomePageComponent},
  {path: '', component: MyCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
