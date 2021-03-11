import { schematic, chain, Tree } from '@angular-devkit/schematics';

export function composition() {
  return chain([
    schematic('say-hi', { name: 'Florence' }),
    (tree: Tree) => {
      tree.create('pet.txt', 'This is Florence!');
    }
  ]);
}
