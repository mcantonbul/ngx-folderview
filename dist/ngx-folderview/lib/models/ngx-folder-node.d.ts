export interface NgxFolderNode {
    id: any;
    title: string;
    collapsed?: boolean;
    isEditMode?: boolean;
    children?: Array<NgxFolderNode>;
}
