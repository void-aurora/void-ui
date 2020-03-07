const pkg = require('../package.json');
const { resolve } = require('./plugins');

const yearStart = 2020;
const yearCurrent = new Date().getUTCFullYear();
const yearRange = yearCurrent > yearStart ? `${yearStart}-${yearCurrent}` : `${yearStart}`;

/**
 * @type {import('sass').Options}
 */
const sassOptions = {
  includePaths: [resolve('node_modules'), resolve('../../node_modules')],
};

module.exports = {
  pkg,

  sassOptions,

  globSass: '**/*.scss',
  srcSass: resolve('sass'),
  distDir: resolve('dist'),

  bannerTemplate: [
    '/*!',
    ` * <%= pkg.license %> License. Copyright (c) ${yearRange} Void Aurora`,
    ' * <%= pkg.name %> v<%= pkg.version %>',
    ' * <%= pkg.description %>',
    ' */',
    '',
  ].join('\n'),
  bannerData: { pkg },
};
