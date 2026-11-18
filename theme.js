// Shared Tailwind theme for every page. Change the palette here.
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Reference palette: white, charcoal grey, soft slate blue
                // (older names like "sand" and "saffron" are kept so the pages don't need edits)
                "primary": "#3E4C59",               // dark slate (headings, buttons)
                "soft-clay": "#5C7486",             // slate blue (hovers, links)
                "terracotta": "#33414D",            // darker partner for primary
                "sand": "#7F98AC",                  // slate-blue colour bands under photos and page titles
                "saffron": "#A7BBCB",               // light slate-blue accent
                "saffron-deep": "#5C7486",          // slate blue dark enough for icons
                "apricot": "#DCE5EC",               // soft blue-grey fill
                "sage-muted": "#A7BBCB",            // legacy name, now light slate blue (accent lines)
                "cream-bg": "#FFFFFF",              // page background
                "surface": "#F4F6F8",               // alternate section background
                "surface-container": "#EAEFF3",     // cards, footer
                "surface-container-high": "#DCE5EC",
                "ink-text": "#2F3337",              // main text (charcoal)
                "secondary": "#4B5258",             // body text
                "on-surface-variant": "#5E656B",    // muted text
                "outline-variant": "#DDE3E8"        // thin lines and borders
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
