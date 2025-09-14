---
"@m2d/table": minor
---

Enhanced cell styling API with full docx.js integration and comprehensive formatting options

- Added `IFirstRowCellProps` and `ICellProps` interfaces with complete docx.js styling support
- Introduced `data` property providing full access to docx.js `IParagraphOptions` and `IRunOptions`
- Support for comprehensive text formatting: fonts, colors, sizes, bold, italics, underline, etc.
- Advanced paragraph styling: alignment, spacing, indentation, numbering, bullets
- Code block support with `pre` property for monospace formatting
- Deprecated direct `alignment` property in favor of `data.alignment`
- Enhanced documentation with detailed styling examples and docx.js integration guide
- Maintained backward compatibility with existing configurations