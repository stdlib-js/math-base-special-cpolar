# CHANGELOG

> Package changelog.

<section class="release" id="v0.2.2">

## 0.2.2 (2024-07-28)

<section class="bug-fixes">

### Bug Fixes

-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - update include paths

</section>

<!-- /.bug-fixes -->

<section class="commits">

### Commits

<details>

-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_
-   [`32bbcb3`](https://github.com/stdlib-js/stdlib/commit/32bbcb3b3dae1f028fd18166ee7875a93d44d0ee) - **refactor:** update paths _(by Athan Reines)_
-   [`ed9c0a5`](https://github.com/stdlib-js/stdlib/commit/ed9c0a5e55ff09af3dd6af8c38615480e2c1828e) - **refactor:** update paths _(by Athan Reines)_
-   [`8908bda`](https://github.com/stdlib-js/stdlib/commit/8908bda11588f80edf375466ae9e84a3d70cf7d3) - **refactor:** update paths _(by Athan Reines)_
-   [`d04dcbd`](https://github.com/stdlib-js/stdlib/commit/d04dcbd6dc3b0bf4a89bd3947d317fa5ff15bb38) - **docs:** remove private annotations in C comments _(by Philipp Burckhardt)_
-   [`038b199`](https://github.com/stdlib-js/stdlib/commit/038b199c32842c02cf678e3ae8305a17aacda05e) - **docs:** update paths _(by Athan Reines)_
-   [`cf3f92e`](https://github.com/stdlib-js/stdlib/commit/cf3f92eddd20ec1a4106c8a34f7d7705a9a99dbc) - **fix:** update include paths _(by Athan Reines)_
-   [`75d4f83`](https://github.com/stdlib-js/stdlib/commit/75d4f83cb85610d23a04dc21a03f8075f6d3665f) - **refactor:** update require and include paths _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.1">

## 0.2.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-02-14)

<section class="commits">

### Commits

<details>

-   [`dea49e0`](https://github.com/stdlib-js/stdlib/commit/dea49e03ab5571233e3da26835a6a6d3256d5737) - **docs:** use single quotes in require calls instead of backticks _(by Philipp Burckhardt)_
-   [`215dfe6`](https://github.com/stdlib-js/stdlib/commit/215dfe690670731f044d09c92832081bc99372cc) - **docs:** update links _(by Athan Reines)_
-   [`453dd85`](https://github.com/stdlib-js/stdlib/commit/453dd85b5dd186d2b4d458256fe84906e1503fe2) - **build:** remove tslint directives _(by Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2023-09-24)

<section class="features">

### Features

-   [`36d8cb7`](https://github.com/stdlib-js/stdlib/commit/36d8cb755436aafd5b7bb085212de5e629b47457) - remove support for out argument and add C implementation [(#1067)](https://github.com/stdlib-js/stdlib/pull/1067)
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - update minimum TypeScript version
-   [`291afa4`](https://github.com/stdlib-js/stdlib/commit/291afa4b085af5e4eb47d9f1290d227542e391fa) - add C implementation to `math/base/special/cphase` [(#1004)](https://github.com/stdlib-js/stdlib/pull/1004)

</section>

<!-- /.features -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`36d8cb7`](https://github.com/stdlib-js/stdlib/commit/36d8cb755436aafd5b7bb085212de5e629b47457): remove support for out argument and add C implementation
-   [`36d8cb7`](https://github.com/stdlib-js/stdlib/commit/36d8cb755436aafd5b7bb085212de5e629b47457): remove support for out argument 

    -   In order to migrate, users should provide a complex number object as an input argument and handle a complex number object as a return value.

-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9): update minimum TypeScript version to 4.1 

    -   To migrate, users should upgrade their TypeScript version to at least version 4.1.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`c244466`](https://github.com/stdlib-js/stdlib/commit/c2444664e2c668563b5842d066a74148b1d2ff76) - **chore:** update package meta data [(#1093)](https://github.com/stdlib-js/stdlib/pull/1093) _(by stdlib-bot, Athan Reines)_
-   [`36d8cb7`](https://github.com/stdlib-js/stdlib/commit/36d8cb755436aafd5b7bb085212de5e629b47457) - **feat:** remove support for out argument and add C implementation [(#1067)](https://github.com/stdlib-js/stdlib/pull/1067) _(by Stephannie Jiménez Gacha, Athan Reines)_
-   [`58832ee`](https://github.com/stdlib-js/stdlib/commit/58832eef6d93e6519622148242600eae93dca4d9) - **feat:** update minimum TypeScript version _(by Philipp Burckhardt)_
-   [`291afa4`](https://github.com/stdlib-js/stdlib/commit/291afa4b085af5e4eb47d9f1290d227542e391fa) - **feat:** add C implementation to `math/base/special/cphase` [(#1004)](https://github.com/stdlib-js/stdlib/pull/1004) _(by Stephannie Jiménez Gacha, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 3 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Stephannie Jiménez Gacha

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.0.6">

## 0.0.6 (2022-02-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.5">

## 0.0.5 (2021-08-22)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.4">

## 0.0.4 (2021-07-07)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.3">

## 0.0.3 (2021-06-28)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.2">

## 0.0.2 (2021-06-16)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.0.1">

## 0.0.1 (2021-06-15)

No changes reported for this release.

</section>

<!-- /.release -->

