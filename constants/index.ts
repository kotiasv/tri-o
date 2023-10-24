type navbarContextItem = {
    title: string
    content: {
        title: string | null
        content: string[]
    }[]
    place?: "right"
}

const navbarContext: navbarContextItem[] = [
    {
        title: "home",
        content: [
            {
                title: null,
                content: [
                    "Freelancer", "Christmas", "Classic Agency", "Corporate",
                    "Shop Classic", "Shop Creative", "Classic Blog",
                    "Showcase", "Architecture", "Event"
                ]
            },
            {
                title: null,
                content: [
                    "Modern Studio", "Restaurant", "Business", "Startup",
                    "Baber", "Marketing", "Artist",
                    "Help", "Creative Studio", "Fashion"
                ]
            },
            {
                title: null,
                content: [
                    "Landing Page", "Blog Metro", "Portfolio Right Side", "Portfolio Agency",
                    "Creative Freelancer", "Portfolio Metro", "Vcard",
                    "Parallax", "Videography", "Photography"
                ]
            }
        ],
        place: "right"
    },
    {
        title: "pages",
        content: [
            {
                title: null,
                content: [
                    "About Us", "Our Services", "Our Services", "Our Team",
                    "Contact", "Pricing", "Faq",
                    "Partners", "404", "Comming Soon"
                ]
            }
        ]
    },
    {
        title: "shop",
        content: [
            {
                title: null,
                content: [
                    "Product Page", "Product Details", "Shopping Cart",
                    "Checkout", "Wishlist"
                ]
            }
        ]
    },
    {
        title: "blog",
        content: [
            {
                title: "blog basic",
                content: [
                    "Basic - Column No Sidebar", "Basic - Column Left Sidebar",
                    "Basic - Column Right Sidebar", "Basic - List No Sidebar",
                    "Basic - List Left Sidebar", "Basic - List Right Sidebar",
                    "Basic - Split No Sidebar", "Basic - Split Left Sidebar",
                    "Basic - Split Right Sidebar"
                ]
            },
            {
                title: "blog classic",
                content: [
                    "Classic - No Sidebar", "Classic - Left Sidebar",
                    "Classic - Right Sidebar", "Mix - Big Post Split",
                    "Mix - Big Post List", "Mix - Big Post Column", "Mix - Big Post Column (No Sidebar)"
                ]
            },
            {
                title: "blog details",
                content: [
                    "Blog Details", "Blog Details - Gallery",
                    "Blog Details - Video", "Blog Details - Audio",
                    "Blog Details - Quote", "Blog Details - No Sidebar",
                    "Blog Details - Left Sidebar"
                ]
            }
        ]
    },
    {
        title: "portfolio",
        content: [
            {
                title: "portfolio masonry",
                content: [
                    "Fullwidth Masonry Style 1", "Fullwidth Masonry Style 2",
                    "Fullwidth Masonry Style 3", "Fullwidth - 2 Columns",
                    "Fullwidth – 3 Columns", "Fullwidth - 4 Columns",
                    "Modern Masonry - 2 Columns", "Modern Masonry - 3 Columns"
                ]
            },
            {
                title: "portfolio basic",
                content: [
                    "Modern Masonry - 4 Columns", "Basic W Tittle - 2 Columns",
                    "Basic W Tittle - 3 Columns", "Basic W Tittle - 4 Columns",
                    "Basic - 2 Columns", "Basic - 3 Columns", "Basic - 4 Columns"
                ]
            },
            {
                title: "creative modern",
                content: [
                    "Creative Style 1", "Creative Style 2",
                    "Creative Style 3", "Creative Style 4",
                    "Modern - 4 Columns", "Modern - 3 Columns",
                    "Modern - 2 Columns"
                ]
            }
        ]
    },
    {
        title: "elements",
        content: [
            {
                title: null,
                content: [
                    "Timeline", "Gallery Boxes", "Headings & Columns",
                    "Icon Boxes", "Latest Post", "Latest Portfolios",
                    "Team Member", "Testimonial & Quotes",
                    "Progress Bar"
                ]
            },
            {
                title: null,
                content: [
                    "Brand Carousel", "Pricing Table", "Pie Chart",
                    "Tabs & Highlights", "Counters", "Dropcaps", "List",
                    "Accordion", "Alert"
                ]
            },
            {
                title: null,
                content: [
                    "Contact Form", "Map",
                    "Buttons", "Call Out"
                ]
            }
        ]
    }
]

export {
    navbarContext
}

export type {
    navbarContextItem
}