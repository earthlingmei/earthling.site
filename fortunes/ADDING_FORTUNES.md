# Adding Fortunes

## Quick Guide

To add a new fortune to the site:

1. Open `public/fortunes.json`
2. Add your new fortune as a new line in the `fortunes` array
3. **Important formatting rules:**
   - Each fortune must be in quotes: `"Your fortune text here."`
   - Each fortune (except the last one) must end with a comma: `,`
   - The last fortune in the list should NOT have a comma
   - Use 4 spaces for indentation (same as existing entries)
   - Keep the same format as existing fortunes

## Example

```json
{
  "fortunes": [
    "Existing fortune.",
    "Another existing fortune.",
    "Your new fortune here."
  ]
}
```

## Common Mistakes to Avoid

❌ **Trailing comma on the last item:**
```json
    "Last fortune.",  // ← Remove this comma!
  ]
```

✅ **Correct:**
```json
    "Last fortune."
  ]
```

❌ **Missing comma between items:**
```json
    "First fortune."
    "Second fortune."  // ← Missing comma!
```

✅ **Correct:**
```json
    "First fortune.",
    "Second fortune."
```

❌ **Inconsistent indentation:**
```json
    "Properly indented.",
"Not indented."  // ← Wrong!
```

✅ **Correct:**
```json
    "Properly indented.",
    "Also properly indented."
```

## Validation

Before committing, run:
```bash
npm run validate-json
```

This will check if your JSON is valid. If there's an error, fix it before building.

The build process will also automatically validate the JSON, so invalid JSON will prevent deployment.

## Testing Locally

After adding fortunes:
1. Run `npm run validate-json` to check for errors
2. Run `npm run build` to build the site
3. Check that `dist/fortunes.json` was created correctly
4. Run `npm run preview` to test locally

