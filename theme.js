// Shared Tailwind theme for every page. Change the palette here.
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Calm, airy palette: white, warm sand, soft brown
                "primary": "#5E4335",               // soft brown (headings, buttons)
                "soft-clay": "#946450",             // warm brown (hovers, links)
                "terracotta": "#7A5545",            // darker partner for primary
                "sand": "#B48A72",                  // colour bands under photos and page titles
                "saffron": "#C9A58E",               // light sand accent
                "saffron-deep": "#8E6A52",          // sand dark enough for icons
                "apricot": "#EADBCD",               // soft warm fill
                "sage-muted": "#C9A58E",            // legacy name, now light sand (accent lines)
                "cream-bg": "#FFFFFF",              // page background
                "surface": "#F7F2EC",               // alternate section background
                "surface-container": "#EFE6DC",     // cards, footer
                "surface-container-high": "#E6D8CA",
                "ink-text": "#2E2622",              // main text
                "secondary": "#54463E",             // body text
                "on-surface-variant": "#6A5A50",    // muted text
                "outline-variant": "#E3D6C9"        // thin lines and borders
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
