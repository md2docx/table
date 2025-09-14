---
"@m2d/table": patch
---

Remove deprecated alignment property from default firstRowCellProps

Replaced the deprecated `alignment` property with proper `data` object structure in default options. Header cells now correctly use `data.alignment` and `data.bold` as documented in README.
