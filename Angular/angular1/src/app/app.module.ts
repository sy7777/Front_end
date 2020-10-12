import { HttpserviceService } from './../../../../../angular/src/app/services/httpservice.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
/* 这个文件是angular根模块，告诉angular如何组装应用 */

// BrowserModule,浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
// NgModule浏览器核心模块
import { NgModule } from '@angular/core';
// 根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TransitionComponent } from './components/transition/transition.component';

// import { FormsModule } from "@angular/forms";
// @NgModule装饰器， @NgModule接受一个元数据对象，告诉angular如何编译和启动应用
@NgModule({
  declarations: [ //配置当前项目运行的组件
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, TransitionComponent
  ],
  imports: [  //配置当前项目运行依赖的其他模块
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    HttpserviceService
  ],
  providers: [],  //配置当前项目所需的服务
  bootstrap: [AppComponent]
})

/* 根模块不需要导出任何东西，因为其他组件不需要导入根模块 */
export class AppModule { }
