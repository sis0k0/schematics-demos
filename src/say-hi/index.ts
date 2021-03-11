import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

export function sayHi(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.logger.info(`Hi, ${options.name}!`)
    return tree;
  };
}
