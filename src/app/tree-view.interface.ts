export interface TreeView {
    ModuleId:number;
    ParentId:number;
    ModuleName:string;
    PermissionId:number;
    PermissionName:string;
    Checked:boolean;
    Modules?:Array<TreeView>;
}

// interface Modules extends Array{}