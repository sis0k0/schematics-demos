import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function renaming(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.rename('dogs/my-pet.txt', 'dogs/NEW-NAME.txt');
    return tree;
  };
}
