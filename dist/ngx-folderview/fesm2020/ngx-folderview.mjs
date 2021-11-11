import * as i0 from '@angular/core';
import { Injectable, Component, Input, Directive, HostListener, EventEmitter, Output, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i6 from '@angular/forms';
import { FormsModule } from '@angular/forms';

class NgxFolderviewHelper {
    static newGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

class NgxFolderViewService {
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

class NgxFolderViewEventService {
    constructor() {
        this.folderCollapsed = new Subject();
        this.folderExpanded = new Subject();
        this.newFolder = new Subject();
        this.newSubFolder = new Subject();
        this.removeFolder = new Subject();
        this.folderMoveUp = new Subject();
        this.folderMoveDown = new Subject();
    }
}
NgxFolderViewEventService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderViewEventService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
NgxFolderViewEventService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderViewEventService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderViewEventService, decorators: [{
            type: Injectable,
            args: [{ providedIn: "root" }]
        }] });

class NgxFolderviewItemComponent {
    constructor(ngxFolderviewEventService) {
        this.ngxFolderviewEventService = ngxFolderviewEventService;
        this.onCollapseExpand = () => {
            this.folder.collapsed = !this.folder.collapsed;
            if (this.folder.collapsed) {
                this.ngxFolderviewEventService.folderCollapsed.next(this.folder);
            }
            else {
                this.ngxFolderviewEventService.folderExpanded.next(this.folder);
            }
        };
        this.onClickRemove = () => {
            this.ngxFolderviewEventService.removeFolder.next(this.folder);
        };
        this.onClickMoveDown = () => {
            this.ngxFolderviewEventService.folderMoveDown.next(this.folder);
        };
        this.onClickMoveUp = () => {
            this.ngxFolderviewEventService.folderMoveUp.next(this.folder);
        };
        this.onClickNewFolder = () => {
            this.ngxFolderviewEventService.newFolder.next(this.folder);
        };
        this.onClickNewSubFolder = () => {
            this.ngxFolderviewEventService.newSubFolder.next(this.folder);
        };
    }
}
NgxFolderviewItemComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewItemComponent, deps: [{ token: NgxFolderViewEventService }], target: i0.ɵɵFactoryTarget.Component });
NgxFolderviewItemComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NgxFolderviewItemComponent, selector: "ngx-folderview-item", inputs: { folder: "folder", template: "template", isTopFolder: "isTopFolder" }, ngImport: i0, template: "<div class=\"ngx-folderview-item\">\n    <ng-template [ngTemplateOutlet]=\"template\"\n        [ngTemplateOutletContext]=\"{folder: folder, onCollapseExpand: onCollapseExpand, onClickRemove: onClickRemove, onClickMoveUp:onClickMoveUp, onClickMoveDown:onClickMoveDown, isTopFolder:isTopFolder}\">\n    </ng-template>\n    <div *ngIf=\"(isTopFolder && !folder.collapsed) || (!folder.collapsed && folder.children?.length > 0)\">\n        <ngx-folderview-item *ngFor=\"let folder of folder.children\" [folder]=\"folder\" [template]=\"template\"></ngx-folderview-item>\n        <div class=\"end-of-leaf\">\n            <img (click)=\"onClickNewFolder()\" src=\"./assets/collapse.png\" alt=\"image\">\n            <img (click)=\"onClickNewSubFolder()\" src=\"./assets/save.png\" alt=\"save\">\n        </div>\n    </div>\n</div>", styles: [".ngx-folderview-item{display:block}.ngx-folderview-item .ngx-folderview-item{margin-left:2rem}.ngx-folderview-item .end-of-leaf{margin-left:2rem}.ngx-folderview-item .end-of-leaf>img{width:1.5rem;height:1.5rem}\n"], components: [{ type: NgxFolderviewItemComponent, selector: "ngx-folderview-item", inputs: ["folder", "template", "isTopFolder"] }], directives: [{ type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewItemComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-folderview-item', template: "<div class=\"ngx-folderview-item\">\n    <ng-template [ngTemplateOutlet]=\"template\"\n        [ngTemplateOutletContext]=\"{folder: folder, onCollapseExpand: onCollapseExpand, onClickRemove: onClickRemove, onClickMoveUp:onClickMoveUp, onClickMoveDown:onClickMoveDown, isTopFolder:isTopFolder}\">\n    </ng-template>\n    <div *ngIf=\"(isTopFolder && !folder.collapsed) || (!folder.collapsed && folder.children?.length > 0)\">\n        <ngx-folderview-item *ngFor=\"let folder of folder.children\" [folder]=\"folder\" [template]=\"template\"></ngx-folderview-item>\n        <div class=\"end-of-leaf\">\n            <img (click)=\"onClickNewFolder()\" src=\"./assets/collapse.png\" alt=\"image\">\n            <img (click)=\"onClickNewSubFolder()\" src=\"./assets/save.png\" alt=\"save\">\n        </div>\n    </div>\n</div>", styles: [".ngx-folderview-item{display:block}.ngx-folderview-item .ngx-folderview-item{margin-left:2rem}.ngx-folderview-item .end-of-leaf{margin-left:2rem}.ngx-folderview-item .end-of-leaf>img{width:1.5rem;height:1.5rem}\n"] }]
        }], ctorParameters: function () { return [{ type: NgxFolderViewEventService }]; }, propDecorators: { folder: [{
                type: Input
            }], template: [{
                type: Input
            }], isTopFolder: [{
                type: Input
            }] } });

class NgxFolderviewSelectDirective {
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
NgxFolderviewSelectDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewSelectDirective, deps: [{ token: NgxFolderViewService }, { token: i0.Renderer2 }], target: i0.ɵɵFactoryTarget.Directive });
NgxFolderviewSelectDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NgxFolderviewSelectDirective, selector: "[ngxFolderviewSelect]", inputs: { folder: "folder" }, host: { listeners: { "click": "onClick($event.target)", "dblclick": "onDblClick()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewSelectDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxFolderviewSelect]'
                }]
        }], ctorParameters: function () { return [{ type: NgxFolderViewService }, { type: i0.Renderer2 }]; }, propDecorators: { folder: [{
                type: Input
            }], onClick: [{
                type: HostListener,
                args: ['click', ['$event.target']]
            }], onDblClick: [{
                type: HostListener,
                args: ['dblclick']
            }] } });

class NgxFolderviewInputControllerDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur() {
        this.folder.isEditMode = false;
    }
    ngAfterViewInit() {
        this.el.nativeElement.focus();
    }
}
NgxFolderviewInputControllerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewInputControllerDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
NgxFolderviewInputControllerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "12.0.0", version: "13.0.0", type: NgxFolderviewInputControllerDirective, selector: "[ngxFolderviewInputController]", inputs: { folder: "folder" }, host: { listeners: { "blur": "onBlur()" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewInputControllerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[ngxFolderviewInputController]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { folder: [{
                type: Input
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });

class NgxFolderviewComponent {
    constructor(ngxFolderviewService, ngxFolderviewEventService) {
        this.ngxFolderviewService = ngxFolderviewService;
        this.ngxFolderviewEventService = ngxFolderviewEventService;
        this.onFolderCollapsed = new EventEmitter();
        this.onFolderExpanded = new EventEmitter();
        this.onFolderSelected = new EventEmitter();
        this._createNewFolderHandler = (folder) => {
            const findedFolder = this.findById(folder.id);
            this.createNewFolder(findedFolder);
        };
        this._createNewSubFolderHandler = (folder) => {
            const selectedFolderId = this.ngxFolderviewService.getSelectedFolderId();
            if (!selectedFolderId) {
            }
            else {
                const findedIndex = folder.children?.findIndex(s => s.id === selectedFolderId) || -1;
                if (findedIndex < 0)
                    return;
                const selectedFolder = this.findById(selectedFolderId);
                this.createNewFolder(selectedFolder);
            }
        };
        this._removeFolderHandler = (folder) => {
            this.removeById(folder.id);
        };
        this._folderMoveUpHandler = (folder) => {
            this.moveUpById(folder.id);
        };
        this._folderMoveDownHandler = (folder) => {
            this.moveDownById(folder.id);
        };
        this.ngxFolderviewEventService.folderCollapsed.subscribe((folder) => {
            this.onFolderCollapsed.emit(folder);
        });
        this.ngxFolderviewEventService.folderExpanded.subscribe((folder) => {
            this.onFolderExpanded.emit(folder);
        });
        this.ngxFolderviewEventService.newFolder.subscribe(this._createNewFolderHandler);
        this.ngxFolderviewEventService.newSubFolder.subscribe(this._createNewSubFolderHandler);
        this.ngxFolderviewEventService.removeFolder.subscribe(this._removeFolderHandler);
        this.ngxFolderviewEventService.folderMoveUp.subscribe(this._folderMoveUpHandler);
        this.ngxFolderviewEventService.folderMoveDown.subscribe(this._folderMoveDownHandler);
    }
    findById(id) {
        let result;
        const iter = (a) => {
            if (a.id === id) {
                result = a;
                return true;
            }
            return Array.isArray(a.children) && a.children.some(iter);
        };
        this.dataSource.some(iter);
        return result;
    }
    removeById(id) {
        const iter = (item, index, arr) => {
            if (item.id === id) {
                arr.splice(index, 1);
                return true;
            }
            return Array.isArray(item.children) && item.children.some(iter);
        };
        this.dataSource.some(iter);
    }
    moveUpById(id) {
        const iter = (item, index, arr) => {
            if (item.id === id) {
                if (arr.length > 1 && index !== 0) {
                    let temp = arr[index];
                    arr[index] = arr[index - 1];
                    arr[index - 1] = temp;
                }
                return true;
            }
            return Array.isArray(item.children) && item.children.some(iter);
        };
        this.dataSource.some(iter);
    }
    moveDownById(id) {
        const iter = (item, index, arr) => {
            if (item.id === id) {
                if (arr.length > 1 && index !== arr.length - 1) {
                    let temp = arr[index];
                    arr[index] = arr[index + 1];
                    arr[index + 1] = temp;
                }
                return true;
            }
            return Array.isArray(item.children) && item.children.some(iter);
        };
        this.dataSource.some(iter);
    }
    createNewFolder(folder) {
        if (!folder.children) {
            folder.children = new Array();
        }
        folder.children.push({
            id: NgxFolderviewHelper.newGuid(),
            title: "New Folder",
            isEditMode: true
        });
    }
}
NgxFolderviewComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewComponent, deps: [{ token: NgxFolderViewService }, { token: NgxFolderViewEventService }], target: i0.ɵɵFactoryTarget.Component });
NgxFolderviewComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NgxFolderviewComponent, selector: "ngx-folderview", inputs: { dataSource: "dataSource", customTemplate: "customTemplate" }, outputs: { onFolderCollapsed: "onFolderCollapsed", onFolderExpanded: "onFolderExpanded", onFolderSelected: "onFolderSelected" }, ngImport: i0, template: "<ng-template #defaultFolderTemplate let-folder=\"folder\" let-onCollapseExpand=\"onCollapseExpand\" let-onClickRemove=\"onClickRemove\" \r\nlet-onClickMoveUp=\"onClickMoveUp\" let-onClickMoveDown=\"onClickMoveDown\" let-isTopFolder=\"isTopFolder\">\r\n    <div class=\"default-folder-template\">\r\n        <span [hidden]=\"folder.isEditMode\" ngxFolderviewSelect [folder]=\"folder\">{{folder.title}}</span>\r\n        <input *ngIf=\"folder.isEditMode\" ngxFolderviewInputController [folder]=\"folder\" type=\"text\" class=\"folder-name-input\" [(ngModel)]=\"folder.title\">\r\n        <div class=\"actions\">\r\n            <div *ngIf=\"!isTopFolder\" (click)=\"onClickRemove()\">\r\n                <img src=\"./assets/times.png\" alt=\"image\">\r\n            </div>\r\n            <div *ngIf=\"!isTopFolder\" (click)=\"onClickMoveUp()\">\r\n                <img src=\"./assets/arrow-up.png\" alt=\"image\">\r\n            </div>\r\n            <div *ngIf=\"!isTopFolder\" (click)=\"onClickMoveDown()\">\r\n                <img src=\"./assets/arrow-down.png\" alt=\"image\">\r\n            </div>\r\n            <div (click)=\"onCollapseExpand()\" [ngSwitch]=\"folder.collapsed\" *ngIf=\"isTopFolder || folder.children?.length > 0\">\r\n                <img *ngIf=\"!folder.collapsed; else elseBlock\" src=\"./assets/expand.png\" alt=\"image\">\r\n                <ng-template #elseBlock>\r\n                    <img *ngIf=\"folder.collapsed\" src=\"./assets/collapse.png\" alt=\"image\">\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<ng-container *ngFor=\"let folder of dataSource\">\r\n    <ngx-folderview-item [folder]=\"folder\" [template]=\"defaultFolderTemplate || customTemplate\" [isTopFolder]=\"true\"></ngx-folderview-item>\r\n</ng-container>", styles: [".default-folder-template{display:flex;width:150px;align-items:center}.default-folder-template .actions{display:flex;margin-left:auto}.default-folder-template .actions>div{display:flex;align-items:center}.default-folder-template .actions>div>img{width:1.5rem;height:1.5rem}.default-folder-template span{-webkit-user-select:none;user-select:none}.default-folder-template span.selected{background-color:#0ff}.default-folder-template .folder-name-input{width:100px}\n"], components: [{ type: NgxFolderviewItemComponent, selector: "ngx-folderview-item", inputs: ["folder", "template", "isTopFolder"] }], directives: [{ type: NgxFolderviewSelectDirective, selector: "[ngxFolderviewSelect]", inputs: ["folder"] }, { type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i6.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: NgxFolderviewInputControllerDirective, selector: "[ngxFolderviewInputController]", inputs: ["folder"] }, { type: i6.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i6.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { type: i2.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NgxFolderviewComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ngx-folderview', template: "<ng-template #defaultFolderTemplate let-folder=\"folder\" let-onCollapseExpand=\"onCollapseExpand\" let-onClickRemove=\"onClickRemove\" \r\nlet-onClickMoveUp=\"onClickMoveUp\" let-onClickMoveDown=\"onClickMoveDown\" let-isTopFolder=\"isTopFolder\">\r\n    <div class=\"default-folder-template\">\r\n        <span [hidden]=\"folder.isEditMode\" ngxFolderviewSelect [folder]=\"folder\">{{folder.title}}</span>\r\n        <input *ngIf=\"folder.isEditMode\" ngxFolderviewInputController [folder]=\"folder\" type=\"text\" class=\"folder-name-input\" [(ngModel)]=\"folder.title\">\r\n        <div class=\"actions\">\r\n            <div *ngIf=\"!isTopFolder\" (click)=\"onClickRemove()\">\r\n                <img src=\"./assets/times.png\" alt=\"image\">\r\n            </div>\r\n            <div *ngIf=\"!isTopFolder\" (click)=\"onClickMoveUp()\">\r\n                <img src=\"./assets/arrow-up.png\" alt=\"image\">\r\n            </div>\r\n            <div *ngIf=\"!isTopFolder\" (click)=\"onClickMoveDown()\">\r\n                <img src=\"./assets/arrow-down.png\" alt=\"image\">\r\n            </div>\r\n            <div (click)=\"onCollapseExpand()\" [ngSwitch]=\"folder.collapsed\" *ngIf=\"isTopFolder || folder.children?.length > 0\">\r\n                <img *ngIf=\"!folder.collapsed; else elseBlock\" src=\"./assets/expand.png\" alt=\"image\">\r\n                <ng-template #elseBlock>\r\n                    <img *ngIf=\"folder.collapsed\" src=\"./assets/collapse.png\" alt=\"image\">\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n<ng-container *ngFor=\"let folder of dataSource\">\r\n    <ngx-folderview-item [folder]=\"folder\" [template]=\"defaultFolderTemplate || customTemplate\" [isTopFolder]=\"true\"></ngx-folderview-item>\r\n</ng-container>", styles: [".default-folder-template{display:flex;width:150px;align-items:center}.default-folder-template .actions{display:flex;margin-left:auto}.default-folder-template .actions>div{display:flex;align-items:center}.default-folder-template .actions>div>img{width:1.5rem;height:1.5rem}.default-folder-template span{-webkit-user-select:none;user-select:none}.default-folder-template span.selected{background-color:#0ff}.default-folder-template .folder-name-input{width:100px}\n"] }]
        }], ctorParameters: function () { return [{ type: NgxFolderViewService }, { type: NgxFolderViewEventService }]; }, propDecorators: { dataSource: [{
                type: Input
            }], customTemplate: [{
                type: Input
            }], onFolderCollapsed: [{
                type: Output
            }], onFolderExpanded: [{
                type: Output
            }], onFolderSelected: [{
                type: Output
            }] } });

class NgxFolderviewModule {
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

/*
 * Public API Surface of ngx-folderview
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxFolderviewComponent, NgxFolderviewModule };
//# sourceMappingURL=ngx-folderview.mjs.map
