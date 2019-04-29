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
  
  { path: 'message', loadChildren: './message/message.module#MessagePageModule' },
  { path: 'course', loadChildren: './course/course.module#CoursePageModule' },
  { path: 'progress', loadChildren: './progress/progress.module#ProgressPageModule' },
  { path: 'discussion', loadChildren: './discussion/discussion.module#DiscussionPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'introduction-to-lms', loadChildren: './course/introduction-to-lms/introduction-to-lms.module#IntroductionToLMSPageModule' },
  { path: 'advance-features-of-talent-lms', loadChildren: './course/advance-features-of-talent-lms/advance-features-of-talent-lms.module#AdvanceFeaturesOfTalentLMSPageModule' },
  { path: 'content-and-talent-lms', loadChildren: './course/content-and-talent-lms/content-and-talent-lms.module#ContentAndTalentLMSPageModule' },
  { path: 'e-learning-basics', loadChildren: './course/e-learning-basics/e-learning-basics.module#ELearningBasicsPageModule' },  { path: 'event', loadChildren: './event/event.module#EventPageModule' }







];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
