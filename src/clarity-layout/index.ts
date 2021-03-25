import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { layoutContent } from './layout-content';

export function clarityLayout(_options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const componentPath = 'src/app/app.component.html';
    const appComponent = tree.read(componentPath);
    if (!appComponent) {
      context.logger.warn(`${componentPath} does not exist.`);
      return;
    }

    tree.overwrite(componentPath, layoutContent);
  };
}
