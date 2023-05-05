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
    {
        path: 'getQuote',
        loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
    },
    {
        path:'signIn',
        loadChildren: () => import('./feature_modules/sign-in-module/sign-in.module').then(m => m.SignInModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
