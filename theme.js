// Shared Tailwind theme for every page. Change the palette here.
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Pastel palette: mint, pale lime, peach, light coral, coral.
                // The pastels are too light for text, so text stays dark; the pastels
                // go into gradients (see theme.css), tints and accents.
                "mint": "#A8E6CF",
                "lime": "#DCEDC1",
                "peach": "#FFD3B6",
                "coral-light": "#FFAAA5",
                "coral": "#FF8B94",
                // Roles (older names like "sand" and "saffron" are kept so the pages don't need edits)
                "primary": "#2F4F4A",               // deep green (headings, buttons)
                "soft-clay": "#C2414D",             // deep coral (links, hovers, current page)
                "terracotta": "#24403C",            // darker partner for primary
                "sand": "#FFD3B6",                  // colour bands (drawn as a pastel gradient in theme.css)
                "saffron": "#FFAAA5",               // light coral accent (lines, small dots)
                "saffron-deep": "#D65A64",          // coral dark enough for icons
                "apricot": "#FFD3B6",               // peach fill
                "sage-muted": "#A8E6CF",            // legacy name, now mint
                "cream-bg": "#FFFFFF",              // page background
                "surface": "#F6FBF8",               // alternate section background (mint whisper)
                "surface-container": "#FFF5EF",     // footer (peach whisper)
                "surface-container-high": "#FFE9DD",
                "ink-text": "#2B3533",              // main text
                "secondary": "#44504D",             // body text
                "on-surface-variant": "#5A6562",    // muted text
                "outline-variant": "#ECE4DD"        // thin lines and borders
            },
            borderRadius: {
                // Nearly square corners, like the reference design
                "DEFAULT": "2px",
                "lg": "2px",
                "xl": "3px",
                "2xl": "3px",
                "3xl": "4px",
                "full": "9999px"
            },
            spacing: {
                "gutter": "24px",
                "margin-desktop": "64px",
                "container-max": "1140px",
                "margin-mobile": "20px"
            },
            fontFamily: {
                // One clean sans-serif family across the site
                "headline-xl": ["'Assistant'", "sans-serif"],
                "headline-lg": ["'Assistant'", "sans-serif"],
                "headline-md": ["'Assistant'", "sans-serif"],
                "body-lg": ["'Assistant'", "sans-serif"],
                "body-md": ["'Assistant'", "sans-serif"],
                "label-caps": ["'Assistant'", "sans-serif"],
                "headline-xl-mobile": ["'Assistant'", "sans-serif"]
            },
            fontSize: {
                "headline-xl": ["52px", {"lineHeight": "1.15", "letterSpacing": "0.01em", "fontWeight": "600"}],
                "headline-lg": ["34px", {"lineHeight": "1.3", "letterSpacing": "0.01em", "fontWeight": "600"}],
                "headline-md": ["24px", {"lineHeight": "1.4", "fontWeight": "600"}],
                "body-lg": ["19px", {"lineHeight": "1.75", "fontWeight": "400"}],
                "body-md": ["17px", {"lineHeight": "1.75", "fontWeight": "400"}],
                "label-caps": ["16px", {"lineHeight": "1.3", "fontWeight": "500"}],
                "headline-xl-mobile": ["38px", {"lineHeight": "1.2", "fontWeight": "600"}]
            }
        }
    }
};
