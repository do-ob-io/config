# Changelog

## [3.0.1](https://github.com/do-ob-io/config/compare/vite-lib-config-v3.0.0...vite-lib-config-v3.0.1) (2024-05-17)


### Bug Fixes

* Styling issues with eslint-config by importing stylistic ([2379160](https://github.com/do-ob-io/config/commit/23791608aec3064c212bf872a05530e678bb664a))

## [3.0.0](https://github.com/do-ob-io/config/compare/vite-lib-config-v2.1.3...vite-lib-config-v3.0.0) (2024-05-17)


### ⚠ BREAKING CHANGES

* Packages can only be imported as ES6+ modules

### Features

* Packages can only be imported as ES6+ modules ([552a472](https://github.com/do-ob-io/config/commit/552a472cc889ff6437e77ddfefaaf8ad1612df31))


### Bug Fixes

* Excluded tests and spec files from declaration build ([911d4ed](https://github.com/do-ob-io/config/commit/911d4ed4d89ccde85b9d5ad01dd98ffe75c19865))
* The vite config can now properly read and name unscoped packages ([88dbebd](https://github.com/do-ob-io/config/commit/88dbebd3c3d87b89a8d4a1383b19c17d1a1942bb))

## [2.1.3](https://github.com/do-ob-io/config/compare/vite-lib-config-v2.1.2...vite-lib-config-v2.1.3) (2024-03-31)


### Bug Fixes

* Resolved issue with test and spec files not actually being excluded ([d44c45f](https://github.com/do-ob-io/config/commit/d44c45f76577c6617b79fcd94c9e4d83882fb6fc))

## [2.1.2](https://github.com/do-ob-io/config/compare/vite-lib-config-v2.1.1...vite-lib-config-v2.1.2) (2024-03-31)


### Bug Fixes

* Entry files no longer include test or spec files. ([5549e19](https://github.com/do-ob-io/config/commit/5549e19805b55457f66b0daa3950dbcef1f80f55))

## [2.1.1](https://github.com/do-ob-io/config/compare/vite-lib-config-v2.1.0...vite-lib-config-v2.1.1) (2024-03-25)


### Bug Fixes

* Resolved issue with bundler converting typescript paths to their aliases ([292368f](https://github.com/do-ob-io/config/commit/292368f52144691dad9ad8118e98358271d1ff65))

## [2.1.0](https://github.com/do-ob-io/config/compare/vite-lib-config-v2.0.4...vite-lib-config-v2.1.0) (2024-03-25)


### Features

* Added option to configure the vite DTS plugin ([1ab7109](https://github.com/do-ob-io/config/commit/1ab7109c6da2cc3e47b079be1785f551a665484b))

## [2.0.4](https://github.com/do-ob-io/config/compare/vite-lib-config-v2.0.3...vite-lib-config-v2.0.4) (2024-03-19)


### Bug Fixes

* Removed resolutions and overrides in the package.json ([a8c030a](https://github.com/do-ob-io/config/commit/a8c030a2639d7fd5ae4a61c72ea5417a14cfb4c6))

## [2.0.3](https://github.com/do-ob-io/config/compare/vite-lib-config-v2.0.2...vite-lib-config-v2.0.3) (2024-03-19)


### Bug Fixes

* Added resolutions in addition to overrides ([3fde228](https://github.com/do-ob-io/config/commit/3fde2285eb72a155261c9545b9913e8ea9ff5600))

## [2.0.2](https://github.com/do-ob-io/config/compare/vite-lib-config-v2.0.1...vite-lib-config-v2.0.2) (2024-03-19)


### Bug Fixes

* Fixed warning issue with api extractor version not being up to date with typescript ([42fd274](https://github.com/do-ob-io/config/commit/42fd274b547d79b445cf0337a04a7560f103209a))

## [2.0.1](https://github.com/do-ob-io/config/compare/vite-lib-config-v2.0.0...vite-lib-config-v2.0.1) (2024-03-19)


### Bug Fixes

* Resolved issue with self-referencing paths not being excluded in the bundle ([535b35d](https://github.com/do-ob-io/config/commit/535b35d9ed8a7fd77f685447d253830e24e1dacf))

## [2.0.0](https://github.com/do-ob-io/config/compare/vite-lib-config-v1.0.0...vite-lib-config-v2.0.0) (2024-03-19)


### ⚠ BREAKING CHANGES

* TypeScript declarations are now bundled with the ES module export

### Features

* Added option to toggle off TypeScript configurations ([4d0e54b](https://github.com/do-ob-io/config/commit/4d0e54bfe0906f539de36f830377edea9cdb9cb9))
* TypeScript declarations are now bundled with the ES module export ([e389d70](https://github.com/do-ob-io/config/commit/e389d70ae8fa9d193d7c7e04839de31fe84e1892))

## 1.0.0 (2024-03-14)


### Features

* Added new vite configuration package ([41ac183](https://github.com/do-ob-io/config/commit/41ac183bbc28edcc0b1677d3da2f2ddb6fca9a56))
