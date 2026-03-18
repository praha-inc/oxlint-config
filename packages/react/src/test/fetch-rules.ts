import packageJson from '../../package.json';

import type { OxlintConfig } from 'oxlint';

const version = packageJson.dependencies['oxlint'].replace('^', '');

/**
 * Fetches the list of vitest-compatible Jest rules from the oxc repository.
 *
 * @returns A promise that resolves to an array of vitest rule names prefixed with "vitest/".
 * @throws Will throw an error if the fetch request fails or if the response cannot be parsed.
 */
const fetchVitestCompatibleJestRules = async (): Promise<string[]> => {
  const response = await fetch(`https://api.github.com/repos/oxc-project/oxc/contents/crates/oxc_linter/data/vitest_compatible_jest_rules.json?ref=oxlint_v${version}`);
  const { content } = await response.json() as { content: string };
  const rules = JSON.parse(atob(content)) as string[];
  return rules.map((rule) => `vitest/${rule}`);
};

type Plugin = Exclude<OxlintConfig['plugins'], null | undefined>[number];

/**
 * Fetches all available rules for a specified oxlint plugin from the oxc repository.
 * For the vitest plugin, this function also includes vitest-compatible Jest rules.
 *
 * @param plugin - The name of the plugin to fetch rules for.
 * @returns A promise that resolves to an array of rule names in the format "plugin/rule-name".
 * @throws Will throw an error if the fetch request fails or if the response cannot be parsed.
 */
export const fetchRules = async (plugin: Plugin): Promise<string[]> => {
  const response = await fetch(`https://api.github.com/repos/oxc-project/oxc/contents/crates/oxc_linter/src/rules/${plugin.replaceAll('-', '_')}?ref=oxlint_v${version}`);
  const directories = await response.json() as Array<{ name: string }>;
  const rules = directories
    .map((directory) => `${plugin}/${directory.name.replace('.rs', '').replaceAll('_', '-')}`);

  if (plugin === 'vitest') {
    return [
      ...new Set([
        ...rules,
        ...await fetchVitestCompatibleJestRules(),
      ]),
    ].toSorted();
  }
  return rules;
};
