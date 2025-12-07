# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.7.0] - 2025-12-07

### Added

- **TypeScript Type System** - Shared types (`HexColor`, `IconName`, `Size`, `Rounded`, `Variant`), design token types, and `PolymorphicComponentProps`
- **Color Utilities** - 9 functions including `hexToRgb`, `darken`, `lighten`, `getContrastRatio`, and WCAG compliance checking
- **Prop Validation System** - Development-only warnings with `warnIf`, `errorIf`, `validateRequired`, and `validateMutuallyExclusive`
- **Component Validations** - Button (hoverColor, icon props), Card (children), Icon (accessibility)
- **Comprehensive JSDoc** - Full documentation for Button, Card, and Icon with `@component`, `@param`, and multiple examples
- **Design Token Helpers** - `getQuartzColor()`, `getBaseColor()` with type safety
- **Typography Tokens** - Expanded with `fontSize`, `fontWeight`, `lineHeight`

### Changed

- **Enhanced Variant System** - Added `VariantPropsOf<T>` and `CompoundVariant<T>` helper types
- **Improved Type Safety** - Button `hoverColor` as `HexColor`, Icon `name` as `IconName`
- **Accessibility** - Button with auto `aria-label` and `tabIndex`, Card with `role="region"`, `aria-live`, and `aria-busy`

### Fixed

- **Storybook** - Icon HeroiconSolid size (`w-1 h-1` → `w-6 h-6`), Colors display with responsive grid, text visibility on dark backgrounds

### Technical

- 111 tests passing (~92.35% coverage)
- 6 new files, 13 modified files
- Zero breaking changes - fully backward compatible

## [0.6.2] - Previous Release

See Git history for earlier changes.
