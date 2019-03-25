import { Component } from '@angular/core';
import { TreeDataService } from './tree-data.service';
import { ITreeOptions } from 'angular-tree-component';
import { TreeView } from './tree-view.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  treeViewData: TreeView[];

  nodeList = [
    {
      "ModuleId": 1,
      "ParentId": null,
      "ModuleName": "Módulo de gestión",
      "PermissionId": null,
      "PermissionName": null,
      "Checked": false,
      "children": [
        {
          "ModuleId": 2,
          "ParentId": 1,
          "ModuleName": "Gestión de empresa",
          "PermissionId": 1,
          "PermissionName": "Leer",
          "Checked": false,
          "children": []
        },
        {
          "ModuleId": 2,
          "ParentId": 1,
          "ModuleName": "Gestión de empresa",
          "PermissionId": 4,
          "PermissionName": "Registrar",
          "Checked": false,
          "children": []
        },
        {
          "ModuleId": 3,
          "ParentId": 1,
          "ModuleName": "Gestión de sucursal",
          "PermissionId": 1,
          "PermissionName": "Leer",
          "Checked": false,
          "children": []
        },
        {
          "ModuleId": 3,
          "ParentId": 1,
          "ModuleName": "Gestión de sucursal",
          "PermissionId": 2,
          "PermissionName": "Nuevo",
          "Checked": false,
          "children": []
        },
        {
          "ModuleId": 3,
          "ParentId": 1,
          "ModuleName": "Gestión de sucursal",
          "PermissionId": 3,
          "PermissionName": "Editar",
          "Checked": false,
          "children": []
        },
        {
          "ModuleId": 3,
          "ParentId": 1,
          "ModuleName": "Gestión de sucursal",
          "PermissionId": 4,
          "PermissionName": "Registrar",
          "Checked": false,
          "children": []
        },
        {
          "ModuleId": 3,
          "ParentId": 1,
          "ModuleName": "Gestión de sucursal",
          "PermissionId": 6,
          "PermissionName": "Baja",
          "Checked": false,
          "children": []
        },
        {
          "ModuleId": 4,
          "ParentId": 1,
          "ModuleName": "Gestión de utilitarios",
          "PermissionId": null,
          "PermissionName": null,
          "Checked": false,
          "children": [
            {
              "ModuleId": 5,
              "ParentId": 4,
              "ModuleName": "Maestro moneda",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 5,
              "ParentId": 4,
              "ModuleName": "Maestro moneda",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 5,
              "ParentId": 4,
              "ModuleName": "Maestro moneda",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 5,
              "ParentId": 4,
              "ModuleName": "Maestro moneda",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 6,
              "ParentId": 4,
              "ModuleName": "Tipo de cambio",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 6,
              "ParentId": 4,
              "ModuleName": "Tipo de cambio",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 6,
              "ParentId": 4,
              "ModuleName": "Tipo de cambio",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 6,
              "ParentId": 4,
              "ModuleName": "Tipo de cambio",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 7,
              "ParentId": 4,
              "ModuleName": "Proyectos",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 7,
              "ParentId": 4,
              "ModuleName": "Proyectos",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 7,
              "ParentId": 4,
              "ModuleName": "Proyectos",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 7,
              "ParentId": 4,
              "ModuleName": "Proyectos",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 7,
              "ParentId": 4,
              "ModuleName": "Proyectos",
              "PermissionId": 6,
              "PermissionName": "Baja",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 8,
              "ParentId": 4,
              "ModuleName": "Unidad de negocio",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 8,
              "ParentId": 4,
              "ModuleName": "Unidad de negocio",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 8,
              "ParentId": 4,
              "ModuleName": "Unidad de negocio",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 8,
              "ParentId": 4,
              "ModuleName": "Unidad de negocio",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 8,
              "ParentId": 4,
              "ModuleName": "Unidad de negocio",
              "PermissionId": 6,
              "PermissionName": "Baja",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 9,
              "ParentId": 4,
              "ModuleName": "Centro de costos",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 9,
              "ParentId": 4,
              "ModuleName": "Centro de costos",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 9,
              "ParentId": 4,
              "ModuleName": "Centro de costos",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 9,
              "ParentId": 4,
              "ModuleName": "Centro de costos",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 9,
              "ParentId": 4,
              "ModuleName": "Centro de costos",
              "PermissionId": 6,
              "PermissionName": "Baja",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 10,
              "ParentId": 4,
              "ModuleName": "Segmentos",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 10,
              "ParentId": 4,
              "ModuleName": "Segmentos",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 10,
              "ParentId": 4,
              "ModuleName": "Segmentos",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 10,
              "ParentId": 4,
              "ModuleName": "Segmentos",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 10,
              "ParentId": 4,
              "ModuleName": "Segmentos",
              "PermissionId": 6,
              "PermissionName": "Baja",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 11,
              "ParentId": 4,
              "ModuleName": "Entidad financiera",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 11,
              "ParentId": 4,
              "ModuleName": "Entidad financiera",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 11,
              "ParentId": 4,
              "ModuleName": "Entidad financiera",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 11,
              "ParentId": 4,
              "ModuleName": "Entidad financiera",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 12,
              "ParentId": 4,
              "ModuleName": "Cuentas bancarias",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 12,
              "ParentId": 4,
              "ModuleName": "Cuentas bancarias",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 12,
              "ParentId": 4,
              "ModuleName": "Cuentas bancarias",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 12,
              "ParentId": 4,
              "ModuleName": "Cuentas bancarias",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            }
          ]
        },
        {
          "ModuleId": 13,
          "ParentId": 1,
          "ModuleName": "Gestión usuarios",
          "PermissionId": null,
          "PermissionName": null,
          "Checked": false,
          "children": [
            {
              "ModuleId": 14,
              "ParentId": 13,
              "ModuleName": "Administrar personas",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 14,
              "ParentId": 13,
              "ModuleName": "Administrar personas",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 14,
              "ParentId": 13,
              "ModuleName": "Administrar personas",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 14,
              "ParentId": 13,
              "ModuleName": "Administrar personas",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 15,
              "ParentId": 13,
              "ModuleName": "Administrar usuarios",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 15,
              "ParentId": 13,
              "ModuleName": "Administrar usuarios",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 15,
              "ParentId": 13,
              "ModuleName": "Administrar usuarios",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 15,
              "ParentId": 13,
              "ModuleName": "Administrar usuarios",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 15,
              "ParentId": 13,
              "ModuleName": "Administrar usuarios",
              "PermissionId": 5,
              "PermissionName": "Alta",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 15,
              "ParentId": 13,
              "ModuleName": "Administrar usuarios",
              "PermissionId": 6,
              "PermissionName": "Baja",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 15,
              "ParentId": 13,
              "ModuleName": "Administrar usuarios",
              "PermissionId": 8,
              "PermissionName": "Visualizar inactivos",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 16,
              "ParentId": 13,
              "ModuleName": "Administrar roles",
              "PermissionId": 1,
              "PermissionName": "Leer",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 16,
              "ParentId": 13,
              "ModuleName": "Administrar roles",
              "PermissionId": 2,
              "PermissionName": "Nuevo",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 16,
              "ParentId": 13,
              "ModuleName": "Administrar roles",
              "PermissionId": 3,
              "PermissionName": "Editar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 16,
              "ParentId": 13,
              "ModuleName": "Administrar roles",
              "PermissionId": 4,
              "PermissionName": "Registrar",
              "Checked": false,
              "children": []
            },
            {
              "ModuleId": 17,
              "ParentId": 13,
              "ModuleName": "Administrar permisos",
              "PermissionId": null,
              "PermissionName": null,
              "Checked": false,
              "children": []
            }
          ]
        },
        {
          "ModuleId": 18,
          "ParentId": 1,
          "ModuleName": "Gestionar configuraciones",
          "PermissionId": null,
          "PermissionName": null,
          "Checked": false,
          "children": [
            {
              "ModuleId": 19,
              "ParentId": 18,
              "ModuleName": "Parametrización factura de venta",
              "PermissionId": null,
              "PermissionName": null,
              "Checked": false,
              "children": []
            }
          ]
        }
      ]
    },
  ]

  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];

  options: ITreeOptions = {

    useCheckbox: true,
    displayField: 'ModuleName'
  };

  data: any;
  
  public list = [
    {
      title: 'childless',
      children: []
    },
    {
      title: 'great grandparent',
      children: [
        {
          title: 'childless grandsibiling',
          children: []
        },
        {
          title: 'grandparent',
          children: [
            {
              title: 'childless sibiling',
              children: []
            },
            {
              title: 'another childless sibiling',
              children: []
            },
            {
              title: 'parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
                {
                  title: 'another child',
                  children: []
                },
              ]
            },
            {
              title: 'another parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
              ]
            },
          ]
        },
        {
          title: 'another grandparent',
          children: [
            {
              title: 'parent',
              children: [
                {
                  title: 'child',
                  children: []
                },
                {
                  title: 'another child',
                  children: []
                },
                {
                  title: 'a third child',
                  children: []
                },
                {
                  title: 'teen mother',
                  children: [
                    {
                      title: 'accident',
                      children: []
                    },
                  ]
                },
              ]
            },
          ]
        },
      ]
    },
  ];

  constructor(private treeService: TreeDataService) {
    this.getTreeData();
  }

  private getTreeData() {
    this.treeService.getTreeData().subscribe(resp => {
      console.log('resp :', resp);
      this.treeViewData = resp;
      console.log('DATA :', this.treeViewData);
    });
  }
}
