const name = `messaging`;
const srcRoot = `libs/${name}`;

module.exports = {
  extends: `release.config.base.js`,
  branches: ['main'],
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: name + '-v${version}',
  commitPaths: [`${srcRoot}/*`],
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        releaseRules: [
          {
            type: 'Breaking',
            release: 'major',
          },
          {
            type: 'breaking',
            release: 'major',
          },
          {
            type: 'New',
            release: 'minor',
          },
          {
            type: 'new',
            release: 'minor',
          },
          {
            subject: 'no-release:',
            message: 'no-release:',
            release: false,
          },
          {
            subject: '*',
            release: 'patch',
          },
          {
            subject: '!no-release:*',
            message: '!no-release:*',
            release: 'patch',
          },
        ],
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES'],
        },
      },
    ],
    `@semantic-release/release-notes-generator`,
    [
      `@semantic-release/changelog`,
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    `@semantic-release/npm`,
    [
      `@semantic-release/git`,
      {
        assets: [
          `${srcRoot}/CHANGELOG.md`,
          `${srcRoot}/package.json`,
          `${srcRoot}/package-lock.json`,
        ],
        message:
          `Release ${name}: ` +
          '${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
