import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes :Routes=[
    {
        path:'insurance',
        loadChildren:()=>import('./feature_modules/insurance/insurance.module').then(m=>m.InsuranceModule)
    },
    {
        path: 'claim',
        loadChildren: () => import('./feature_modules/claim/claim.module').then(m => m.ClaimModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
