import type { DependenciesEnv, FormatterEnv, LinterEnv, PackageEnv } from '@teambit/envs';
import type { EslintConfigTransformer } from '@teambit/eslint';
import type { FormatterContext } from '@teambit/formatter';
import type { LinterContext } from '@teambit/linter';
import type { PrettierConfigTransformer } from '@teambit/prettier';
import type { ReactEnv } from '@teambit/react';

export class DesignReactEnv implements PackageEnv, DependenciesEnv, LinterEnv, FormatterEnv {
  constructor(protected baseEnv: ReactEnv) {}

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
