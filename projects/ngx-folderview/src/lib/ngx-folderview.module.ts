import { NgModule } from '@angular/core';
import { NgxFolderviewComponent } from './ngx-folderview.component';
import { NgxFolderviewItemComponent } from './components/ngx-folderview-item/ngx-folderview-item.component';
import { CommonModule } from '@angular/common';
import { NgxFolderViewService } from './services/folderview.service';
import { NgxFolderviewSelectDirective } from './directives/ngx-folderview-select.directive';
import { NgxFolderViewEventService } from './services/folderview-event.service';
import { FormsModule } from '@angular/forms';
import { NgxFolderviewInputControllerDirective } from './directives/ngx-folderview-input-controller.directive';



@NgModule({
  declarations: [
    NgxFolderviewComponent,
    NgxFolderviewItemComponent,
    NgxFolderviewSelectDirective,
    NgxFolderviewInputControllerDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NgxFolderviewComponent
  ],
  providers: [
    NgxFolderViewService,
    NgxFolderViewEventService
  ]
})
export class NgxFolderviewModule { }
