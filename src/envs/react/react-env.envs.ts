import type { DependenciesEnv, FormatterEnv, LinterEnv, PackageEnv } from '@teambit/envs';
import type { EslintConfigTransformer } from '@teambit/eslint';
import type { FormatterContext } from '@teambit/formatter';
import type { LinterContext } from '@teambit/linter';
import type { PrettierConfigTransformer } from '@teambit/prettier';
import type { ReactEnv } from '@teambit/react';

export class DesignReactEnv implements PackageEnv, DependenciesEnv, LinterEnv, FormatterEnv {
  constructor(protected baseEnv: ReactEnv) {}

  getDependencies() {
    const { baseEnv } = this;
    const { devDependencies, dependencies } = baseEnv.getDependencies();

    return {
      dependencies: {
        'core-js': dependencies['core-js'],
      },
      devDependencies,
      peers: [
        {
          name: 'react',
          supportedRange: '^16.8.0 || ^17.0.0',
          version: '^17.0.0',
        },
        {
          name: 'react-dom',
          supportedRange: '^16.8.0 || ^17.0.0',
          version: '^17.0.0',
        },
      ],
    };
  }

  getLinter(context: LinterContext, transformers: EslintConfigTransformer[] = []) {
    return this.baseEnv.getLinter(context, [
      (config) => {
        config.setRule('no-console', ['error']);
        return config;
      },
      ...transformers,
    ]);
  }

  getFormatter(context: FormatterContext, transformers: PrettierConfigTransformer[] = []) {
    return this.baseEnv.getFormatter(context, [
      (config) => {
        config.setKey('tabWidth', 2);
        config.setKey('printWidth', 120);
        config.setKey('singleQuote', true);
        return config;
      },
      ...transformers,
    ]);
  }
}
