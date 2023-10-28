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

type benefitsContextItem = {
    title: string
    description: string
}

const benefitsContext: benefitsContextItem[] = [
    {
        title: "Best Stream",
        description: "Everything your favorite artists and friends are posting and reporting on a comprehensive sidebar menu."
    },
    {
        title: "Suggested tracks",
        description: "Tracks you'll love based on your listening history. Discover new favorites within a familiar groove to you."
    },
    {
        title: "Enjoy the Station",
        description: "A long radio-like mix of music you can start from any track or artist. Soundtrack your next party with one click."
    },
    {
        title: "Premium Plugins Included",
        description: "A long radio-like mix of music you can start from any track or artist. Soundtrack your next party with one click."
    },
    {
        title: "Best Stream",
        description: "Everything your favorite artists and friends are posting and reporting on a comprehensive sidebar menu."
    },
    {
        title: "Suggested tracks",
        description: "Tracks you'll love based on your listening history. Discover new favorites within a familiar groove to you."
    }
]

type blogContextItem = {
    title: string
    author: string
    date: string
    description: string
}

const blogContext: blogContextItem[] = [
    {
        title: "In The Middle Of A Rainiest",
        author: "Admin",
        date: "June 14, 2022",
        description: "Camping out under a starry sky, in the middle of a tropical lowland rainforest's is Lorem isem dolor sit amete, consectetur adipisicing elided Quaerat reiciendis."
    },
    {
        title: "Before Heading West",
        author: "Admin",
        date: "June 14, 2022",
        description: "Before heading west, we did a 10-day mini trip through Vermont, New Hampshire and Maine isem dolor sit amete, consectetur adipisicing elided Quaerat reiciendis."
    },
    {
        title: "Life On The Road",
        author: "Admin",
        date: "June 14, 2022",
        description: "Artist and writer's William Morris once he said, “Have nothing in your house that you do Lorem isem dolor sit amete, consectetur adipisicing elided Quaerat reiciendis."
    }
]

export {
    navbarContext,
    benefitsContext,
    blogContext
}

export type {
    navbarContextItem,
    benefitsContextItem,
    blogContextItem
}