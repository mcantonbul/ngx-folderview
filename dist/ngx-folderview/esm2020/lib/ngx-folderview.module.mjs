import { NgModule } from '@angular/core';
import { NgxFolderviewComponent } from './ngx-folderview.component';
import { NgxFolderviewItemComponent } from './components/ngx-folderview-item/ngx-folderview-item.component';
import { CommonModule } from '@angular/common';
import { NgxFolderViewService } from './services/folderview.service';
import { NgxFolderviewSelectDirective } from './directives/ngx-folderview-select.directive';
import { NgxFolderViewEventService } from './services/folderview-event.service';
import { FormsModule } from '@angular/forms';
import { NgxFolderviewInputControllerDirective } from './directives/ngx-folderview-input-controller.directive';
import * as i0 from "@angular/core";
export class NgxFolderviewModule {
}
NgxFolderviewModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxFolderviewModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewModule, declarations: [NgxFolderviewComponent,
        NgxFolderviewItemComponent,
        NgxFolderviewSelectDirective,
        NgxFolderviewInputControllerDirective], imports: [CommonModule,
        FormsModule], exports: [NgxFolderviewComponent] });
NgxFolderviewModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewModule, providers: [
        NgxFolderViewService,
        NgxFolderViewEventService
    ], imports: [[
            CommonModule,
            FormsModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewModule, decorators: [{
            type: NgModule,
            args: [{
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
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvbGRlcnZpZXcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZvbGRlcnZpZXcvc3JjL2xpYi9uZ3gtZm9sZGVydmlldy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxnRUFBZ0UsQ0FBQztBQUM1RyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDckUsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDNUYsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxxQ0FBcUMsRUFBRSxNQUFNLHdEQUF3RCxDQUFDOztBQXVCL0csTUFBTSxPQUFPLG1CQUFtQjs7Z0hBQW5CLG1CQUFtQjtpSEFBbkIsbUJBQW1CLGlCQWpCNUIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQiw0QkFBNEI7UUFDNUIscUNBQXFDLGFBR3JDLFlBQVk7UUFDWixXQUFXLGFBR1gsc0JBQXNCO2lIQU9iLG1CQUFtQixhQUxuQjtRQUNULG9CQUFvQjtRQUNwQix5QkFBeUI7S0FDMUIsWUFWUTtZQUNQLFlBQVk7WUFDWixXQUFXO1NBQ1o7MkZBU1UsbUJBQW1CO2tCQW5CL0IsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0QiwwQkFBMEI7d0JBQzFCLDRCQUE0Qjt3QkFDNUIscUNBQXFDO3FCQUN0QztvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3FCQUNaO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7cUJBQ3ZCO29CQUNELFNBQVMsRUFBRTt3QkFDVCxvQkFBb0I7d0JBQ3BCLHlCQUF5QjtxQkFDMUI7aUJBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4Rm9sZGVydmlld0NvbXBvbmVudCB9IGZyb20gJy4vbmd4LWZvbGRlcnZpZXcuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEZvbGRlcnZpZXdJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL25neC1mb2xkZXJ2aWV3LWl0ZW0vbmd4LWZvbGRlcnZpZXctaXRlbS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5neEZvbGRlclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9mb2xkZXJ2aWV3LnNlcnZpY2UnO1xuaW1wb3J0IHsgTmd4Rm9sZGVydmlld1NlbGVjdERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9uZ3gtZm9sZGVydmlldy1zZWxlY3QuZGlyZWN0aXZlJztcbmltcG9ydCB7IE5neEZvbGRlclZpZXdFdmVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2ZvbGRlcnZpZXctZXZlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5neEZvbGRlcnZpZXdJbnB1dENvbnRyb2xsZXJEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZXMvbmd4LWZvbGRlcnZpZXctaW5wdXQtY29udHJvbGxlci5kaXJlY3RpdmUnO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTmd4Rm9sZGVydmlld0NvbXBvbmVudCxcbiAgICBOZ3hGb2xkZXJ2aWV3SXRlbUNvbXBvbmVudCxcbiAgICBOZ3hGb2xkZXJ2aWV3U2VsZWN0RGlyZWN0aXZlLFxuICAgIE5neEZvbGRlcnZpZXdJbnB1dENvbnRyb2xsZXJEaXJlY3RpdmVcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTmd4Rm9sZGVydmlld0NvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZ3hGb2xkZXJWaWV3U2VydmljZSxcbiAgICBOZ3hGb2xkZXJWaWV3RXZlbnRTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTmd4Rm9sZGVydmlld01vZHVsZSB7IH1cbiJdfQ==