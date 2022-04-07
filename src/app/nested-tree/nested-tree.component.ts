import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    children: [{ name: 'Apple' }, { name: 'Banana' }, { name: 'Fruit loops' }],
  },
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
      },
      {
        name: 'Orange',
        children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
      },
    ],
  },
];

const TREE_DATA_1: FoodNode[] = [
  {
    name: 'A',
    children: [
      { name: 'A1' },
      {
        name: 'A2',
        children: [
          { name: 'A21', children: [] },
          {
            name: 'A22',
            children: [
              { name: 'A221', children: [] },
              { name: 'A222', children: [] },
              { name: 'A223', children: [] },
            ],
          },
        ],
      },
    ],
  },

  { name: 'B' },

  {
    name: 'C',
    children: [
      { name: 'C1' },
      { name: 'C2' },
      {
        name: 'C3',
        children: [{ name: 'C31' }, { name: 'C32' }],
      },
    ],
  },
];

@Component({
  selector: 'app-nested-tree',
  templateUrl: './nested-tree.component.html',
  styleUrls: ['./nested-tree.component.css'],
})
export class NestedTreeComponent implements OnInit {
  ngOnInit(): void {}

  treeControl = new NestedTreeControl<FoodNode>((node) => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    // this.dataSource.data = TREE_DATA;
    this.dataSource.data = TREE_DATA_1;
  }

  hasChild = (_: number, node: FoodNode) =>
    !!node.children && node.children.length > 0;
}
