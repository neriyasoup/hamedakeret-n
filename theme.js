// Shared Tailwind theme for every page. Change the palette here.
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                // Warm palette: terracotta, coral, saffron, apricot
                "primary": "#9A3B26",               // terracotta (headings, buttons)
                "soft-clay": "#C0583A",             // coral (hovers, links)
                "terracotta": "#B4482B",            // gradient partner for primary
                "saffron": "#E2A453",               // golden accent
                "saffron-deep": "#B7731C",          // saffron dark enough for icons
                "apricot": "#F6C9A0",               // soft warm fill
                "sage-muted": "#E2A453",            // legacy name, now saffron (used for accent lines and glows)
                "cream-bg": "#FFF8F0",              // page background
                "surface": "#FDEFE3",               // alternate section background
                "surface-container": "#FAE3CF",     // cards, footer
                "surface-container-high": "#F5D5BA",
                "ink-text": "#3A2620",              // main text
                "secondary": "#6E4A36",             // body text
                "on-surface-variant": "#7A4E3D",    // muted text
                "outline-variant": "#EDC6A8"        // borders
            },
            borderRadius: {
                "DEFAULT": "0.375rem",
                "lg": "0.75rem",
                "xl": "1rem",
                "2xl": "1.25rem",
                "3xl": "1.75rem",
                "full": "9999px"
            },
            spacing: {
                "gutter": "24px",
                "margin-desktop": "64px",
                "container-max": "1140px",
                "margin-mobile": "20px"
            },
            fontFamily: {
                "headline-xl": ["'Frank Ruhl Libre'", "serif"],
                "headline-lg": ["'Frank Ruhl Libre'", "serif"],
                "headline-md": ["'Frank Ruhl Libre'", "serif"],
                "body-lg": ["'Assistant'", "sans-serif"],
                "body-md": ["'Assistant'", "sans-serif"],
                "label-caps": ["'Assistant'", "sans-serif"],
                "headline-xl-mobile": ["'Frank Ruhl Libre'", "serif"]
            },
            fontSize: {
                "headline-xl": ["52px", {"lineHeight": "1.15", "letterSpacing": "-0.01em", "fontWeight": "700"}],
                "headline-lg": ["36px", {"lineHeight": "1.25", "fontWeight": "600"}],
                "headline-md": ["26px", {"lineHeight": "1.35", "fontWeight": "600"}],
                "body-lg": ["20px", {"lineHeight": "1.65", "fontWeight": "400"}],
                "body-md": ["17px", {"lineHeight": "1.65", "fontWeight": "400"}],
                "label-caps": ["16px", {"lineHeight": "1.3", "fontWeight": "600"}],
                "headline-xl-mobile": ["38px", {"lineHeight": "1.2", "fontWeight": "700"}]
            }
        }
    }
};
