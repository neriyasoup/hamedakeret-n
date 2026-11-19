// Shared Tailwind theme for every page. Change the palette here.
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Palette: blush pink, rose, raspberry, deep teal, near-black navy.
                // Text stays dark; the pinks go into gentle gradients (see theme.css),
                // the dark teal/navy into headings, buttons and the footer.
                "blush": "#F8D7DF",
                "rose": "#E9878F",
                "raspberry": "#C9505A",
                "teal": "#0F4E5B",
                "navy": "#13262D",
                // Older colour names still used in the pages, mapped onto this palette:
                "mint": "#F8D7DF",                  // → blush (start of accent gradients)
                "lime": "#F2C1CB",                  // → between blush and rose
                "peach": "#E9878F",                 // → rose (middle of accent gradients)
                "coral-light": "#E9878F",           // → rose
                "coral": "#C9505A",                 // → raspberry (end of accent gradients)
                // Roles (older names like "sand" and "saffron" are kept so the pages don't need edits)
                "primary": "#0F4E5B",               // deep teal (headings, buttons)
                "soft-clay": "#B9434E",             // raspberry, a touch deeper so links read well on white
                "terracotta": "#13262D",            // darker partner for primary
                "sand": "#F8D7DF",                  // colour bands (drawn as a gradient in theme.css)
                "saffron": "#E9878F",               // rose accent (lines, small dots)
                "saffron-deep": "#C9505A",          // raspberry for icons
                "apricot": "#F8D7DF",               // blush fill
                "sage-muted": "#E9878F",            // legacy name, now rose
                "cream-bg": "#FFFFFF",              // page background
                "surface": "#FCF5F7",               // alternate section background (blush whisper)
                "surface-container": "#F8ECEF",     // light fill
                "surface-container-high": "#F3DDE3",
                "ink-text": "#13262D",              // main text (near-black navy)
                "secondary": "#3A4A50",             // body text
                "on-surface-variant": "#55636A",    // muted text
                "outline-variant": "#EEDDE2"        // thin lines and borders
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
