import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
 
  {
    path: 'tab4',
    loadChildren: () => import('./tab4/tab4.module').then( m => m.Tab4PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'roupas',
    loadChildren: () => import('./pages/roupas/roupas.module').then( m => m.RoupasPageModule)
  },
  {
    path: 'faleconosco',
    loadChildren: () => import('./pages/faleconosco/faleconosco.module').then( m => m.FaleconoscoPageModule)
  },
  {
    path: 'roupafem',
    loadChildren: () => import('./pages/roupafem/roupafem.module').then( m => m.RoupafemPageModule)
  },
  {
    path: 'roupamasc',
    loadChildren: () => import('./pages/roupamasc/roupamasc.module').then( m => m.RoupamascPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
