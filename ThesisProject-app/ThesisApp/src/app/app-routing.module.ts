import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'role', loadChildren: './role/role.module#RolePageModule' },
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'course', loadChildren: './course/course.module#CoursePageModule' },
  { path: 'progress', loadChildren: './progress/progress.module#ProgressPageModule' },
  { path: 'discussion', loadChildren: './discussion/discussion.module#DiscussionPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'introduction-to-lms', loadChildren: './introduction-to-lms/introduction-to-lms.module#IntroductionToLMSPageModule' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
