import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class NgxFolderViewService {
    setSelectedFolder(id, htmlElement) {
        this.selectedFolderId = id;
        this.selectedFolderHTMLElement?.classList.remove('selected');
        this.selectedFolderHTMLElement = htmlElement;
        this.selectedFolderHTMLElement.classList.add('selected');
    }
    getSelectedFolderId() {
        return this.selectedFolderId;
    }
}
NgxFolderViewService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderViewService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxFolderViewService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderViewService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderViewService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9sZGVydmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWZvbGRlcnZpZXcvc3JjL2xpYi9zZXJ2aWNlcy9mb2xkZXJ2aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHM0MsTUFBTSxPQUFPLG9CQUFvQjtJQU83QixpQkFBaUIsQ0FBQyxFQUFPLEVBQUUsV0FBNEI7UUFDbkQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMseUJBQXlCLEVBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMseUJBQXlCLEdBQUcsV0FBVyxDQUFDO1FBQzdDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFRCxtQkFBbUI7UUFDZixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztJQUNqQyxDQUFDOztpSEFoQlEsb0JBQW9CO3FIQUFwQixvQkFBb0IsY0FEUCxNQUFNOzJGQUNuQixvQkFBb0I7a0JBRGhDLFVBQVU7bUJBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTmd4Rm9sZGVyVmlld1NlcnZpY2Uge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAVE9ETyBtb2RlbHNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZEZvbGRlcklkOiBhbnk7XHJcbiAgICBwcml2YXRlIHNlbGVjdGVkRm9sZGVySFRNTEVsZW1lbnQ6IEhUTUxCYXNlRWxlbWVudDtcclxuXHJcbiAgICBzZXRTZWxlY3RlZEZvbGRlcihpZDogYW55LCBodG1sRWxlbWVudDogSFRNTEJhc2VFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZvbGRlcklkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEZvbGRlckhUTUxFbGVtZW50Py5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGb2xkZXJIVE1MRWxlbWVudCA9IGh0bWxFbGVtZW50O1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRGb2xkZXJIVE1MRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNlbGVjdGVkRm9sZGVySWQoKTogYW55IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZEZvbGRlcklkO1xyXG4gICAgfVxyXG59Il19