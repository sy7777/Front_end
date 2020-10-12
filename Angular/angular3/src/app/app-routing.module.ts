// 路由配置模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
const routes: Routes = [
 {path:'home', component:HomeComponent},
 {path:'news', component:NewsComponent},
 {path:'product', component:ProductComponent},
//  {path:'newscontent', component:NewscontentComponent},
//  动态路由
 {path:'newscontent/:aid', component:NewscontentComponent},

//  匹配不到路由的时候，跳转的路由
 {path:'**',  //任一路由
  redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
