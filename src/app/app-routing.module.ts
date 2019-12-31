import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TopiclistComponent } from "./topiclist/topiclist.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ProjectDisplayComponent } from "./project-display/project-display.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "topiclist", component: TopiclistComponent },
  { path: "project-display", component: ProjectDisplayComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
