import { OxlintConfig } from 'oxlint';

import packageJson from '../../package.json';

const version = packageJson.dependencies['oxlint'].replace('^', '');

type Plugin = Exclude<OxlintConfig['plugins'], null | undefined>[number];

export const fetchRules = async (plugin: Plugin): Promise<string[]> => {
  const response = await fetch(`https://api.github.com/repos/oxc-project/oxc/contents/crates/oxc_linter/src/rules/${plugin}?ref=oxlint_v${version}`);
  const directories = await response.json() as Array<{ name: string }>;
  return directories
    .map((directory) => `${plugin}/${directory.name.replace('.rs', '').replaceAll('_', '-')}`);
}
