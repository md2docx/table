# @m2d/table

## 0.1.0

### Minor Changes

- 0d38935: Enhanced cell styling API with full docx.js integration and comprehensive formatting options
  - Added `IFirstRowCellProps` and `ICellProps` interfaces with complete docx.js styling support
  - Introduced `data` property providing full access to docx.js `IParagraphOptions` and `IRunOptions`
  - Support for comprehensive text formatting: fonts, colors, sizes, bold, italics, underline, etc.
  - Advanced paragraph styling: alignment, spacing, indentation, numbering, bullets
  - Code block support with `pre` property for monospace formatting
  - Deprecated direct `alignment` property in favor of `data.alignment`
  - Enhanced documentation with detailed styling examples and docx.js integration guide
  - Maintained backward compatibility with existing configurations

## 0.0.7

### Patch Changes

- c153a02: refactor: enhance table plugin options merging and alignment handling - headers can now be aligned independent of rest of table

### Patch Changes

- 9232aef: Update types

### Minor Changes

- 5f0f362: Support block elements inside table cell, e.g., table inside table

## 0.0.6

### Patch Changes

- 851747f: chore: update core package

## 0.0.5

### Patch Changes

- 1d2470c: Update core package to v1

## 0.0.4

### Patch Changes

- 0b5fd9d: Update types from @m2d/core
