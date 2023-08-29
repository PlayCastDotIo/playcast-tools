const name = `playcast-tools`;
const srcRoot = `libs/${name}`;

module.exports = {
  extends: `release.config.base.js`,
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: `${name}-v${version}`,
  commitPaths: [`${srcRoot}/*`],
  plugins: [
    `@semantic-release/commit-analyzer`,
    `@semantic-release/release-notes-generator`,
    [
      `@semantic-release/changelog`,
      {
        changelogFile: `CHANGELOG.md`,
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
        message: `chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}`,
      },
    ],
  ],
};
