import { Directive, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../services/folderview.service";
export class NgxFolderviewSelectDirective {
    constructor(ngxFolderviewService, renderer2) {
        this.ngxFolderviewService = ngxFolderviewService;
        this.renderer2 = renderer2;
    }
    onClick(element) {
        this.ngxFolderviewService.setSelectedFolder(this.folder.id, element);
    }
    onDblClick() {
        this.folder.isEditMode = true;
    }
}
NgxFolderviewSelectDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewSelectDirective, deps: [{ token: i1.NgxFolderViewService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NgxFolderviewSelectDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NgxFolderviewSelectDirective, selector: "[ngxFolderviewSelect]", inputs: { folder: "folder" }, host: { listeners: { "click": "onClick($event.target)", "dblclick": "onDblClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewSelectDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxFolderviewSelect]'
                }]
        }], ctorParameters: function () { return [{ type: i1.NgxFolderViewService }, { type: i0.Renderer2 }]; }, propDecorators: { folder: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event.target']]
            }], onDblClick: [{
                type: HostListener,
                args: ['dblclick']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWZvbGRlcnZpZXctc2VsZWN0LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1mb2xkZXJ2aWV3L3NyYy9saWIvZGlyZWN0aXZlcy9uZ3gtZm9sZGVydmlldy1zZWxlY3QuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQzs7O0FBTzFFLE1BQU0sT0FBTyw0QkFBNEI7SUFHdkMsWUFBb0Isb0JBQTBDLEVBQVUsU0FBb0I7UUFBeEUseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBSSxDQUFDO0lBRXZELE9BQU8sQ0FBQyxPQUF3QjtRQUN4RSxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDdEUsQ0FBQztJQUV5QixVQUFVO1FBQ2xDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDOzt5SEFYVSw0QkFBNEI7NkdBQTVCLDRCQUE0QjsyRkFBNUIsNEJBQTRCO2tCQUh4QyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSx1QkFBdUI7aUJBQ2xDO21JQUVVLE1BQU07c0JBQWQsS0FBSztnQkFJb0MsT0FBTztzQkFBaEQsWUFBWTt1QkFBQyxPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBSWQsVUFBVTtzQkFBbkMsWUFBWTt1QkFBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIElucHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neEZvbGRlck5vZGUgfSBmcm9tICcuLi9tb2RlbHMvbmd4LWZvbGRlci1ub2RlJztcbmltcG9ydCB7IE5neEZvbGRlclZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZm9sZGVydmlldy5zZXJ2aWNlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neEZvbGRlcnZpZXdTZWxlY3RdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hGb2xkZXJ2aWV3U2VsZWN0RGlyZWN0aXZlIHtcbiAgQElucHV0KCkgZm9sZGVyOiBOZ3hGb2xkZXJOb2RlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmd4Rm9sZGVydmlld1NlcnZpY2U6IE5neEZvbGRlclZpZXdTZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyMjogUmVuZGVyZXIyKSB7IH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50LnRhcmdldCddKSBvbkNsaWNrKGVsZW1lbnQ6IEhUTUxCYXNlRWxlbWVudCkge1xuICAgIHRoaXMubmd4Rm9sZGVydmlld1NlcnZpY2Uuc2V0U2VsZWN0ZWRGb2xkZXIodGhpcy5mb2xkZXIuaWQsIGVsZW1lbnQpXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdkYmxjbGljaycpIG9uRGJsQ2xpY2soKSB7XG4gICAgdGhpcy5mb2xkZXIuaXNFZGl0TW9kZSA9IHRydWU7XG4gIH1cbn1cbiJdfQ==