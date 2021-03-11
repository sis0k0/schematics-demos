import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function creation(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create('dogs/my-pet.txt', 'This is my dog.');
    return tree;
  };
}
