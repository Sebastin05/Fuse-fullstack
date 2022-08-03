import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExampleComponent } from 'app/modules/admin/example/example.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { AddExampleComponent } from './add-example/add-example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FuseCardModule } from '@fuse/components/card';
import {MatDatepickerModule} from '@angular/material/datepicker';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    },
    {
        path     : 'add-example',
        component: AddExampleComponent
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
        AddExampleComponent
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
        CommonModule,
        MatTabsModule,
        MatCheckboxModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        ReactiveFormsModule,
        FuseCardModule,
        MatDatepickerModule
    ]
})
export class ExampleModule
{
}
