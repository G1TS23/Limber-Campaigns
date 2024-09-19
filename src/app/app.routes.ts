import { Routes } from '@angular/router';
import { CampagnesComponent } from './components/campagnes/campagnes.component';
import { HomeComponent } from './components/home/home.component';
import { WallsComponent } from './components/walls/walls.component';
import { ContentComponent } from './components/content/content.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ScenariosComponent } from './components/scenarios/scenarios.component';
import { ConversionComponent } from './components/conversion/conversion.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Walls', component: WallsComponent},
    {path: 'Content', component: ContentComponent},
    {path: 'Campagnes', component: CampagnesComponent},
    {path: 'Calendar', component: CalendarComponent},
    {path: 'Scenarios', component: ScenariosComponent},
    {path: 'Conversion', component: ConversionComponent},
    {path: 'Analytics', component: AnalyticsComponent}

];
