import { Routes } from "@angular/router";

import { MainComponent } from "./app/main/main.component";
import { NewIdeaComponent } from "./app/new-idea/new-idea.component";

export const appRoutes: Routes = [
    {path:'home', component: MainComponent},
    {path: 'newIdea', component: NewIdeaComponent},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path:'**', redirectTo: 'home', pathMatch: 'full'}
];