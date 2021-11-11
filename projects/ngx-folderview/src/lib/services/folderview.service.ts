import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class NgxFolderViewService {
    /**
     * @TODO models
     */
    private selectedFolderId: any;
    private selectedFolderHTMLElement: HTMLBaseElement;

    setSelectedFolder(id: any, htmlElement: HTMLBaseElement) {
        this.selectedFolderId = id;
        this.selectedFolderHTMLElement?.classList.remove('selected');
        this.selectedFolderHTMLElement = htmlElement;
        this.selectedFolderHTMLElement.classList.add('selected');
    }

    getSelectedFolderId(): any {
        return this.selectedFolderId;
    }
}