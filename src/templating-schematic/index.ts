import { apply, mergeWith, Rule,
  SchematicContext, template, Tree, url
} from '@angular-devkit/schematics';

export function templatingSchematic(_options: any): Rule {
  return (_tree: Tree, _context: SchematicContext) => {
    const urlSource = url('./files');

    const templateOptions = { filename: 'breed-statement.txt', breed: 'Cocker Spaniel' };
    const templateRule = template(templateOptions);
    const generatedFilesSource = apply(urlSource, [templateRule]);

    const treeMergedWithGeneratedFiles = mergeWith(generatedFilesSource);
    return treeMergedWithGeneratedFiles;
  };
}

