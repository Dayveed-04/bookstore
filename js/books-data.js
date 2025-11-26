const books = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        price: "₦39,990",
        category: "Fiction",
        description: "A dazzling novel about all the choices that go into a life well lived. Between life and death there is a library, and within that library, the shelves go on forever.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop",
        featured: true
    },
    {
        id: 2,
        title: "Project Hail Mary",
        author: "Andy Weir",
        price: "₦46,390",
        category: "Sci-Fi",
        description: "A lone astronaut must save the earth from disaster in this incredible new science-based thriller from the author of The Martian.",
        coverUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop",
        featured: true
    },
    {
        id: 3,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        price: "₦36,790",
        category: "Romance",
        description: "A stunning novel about a legendary Hollywood icon who chooses an unknown magazine reporter to tell her story.",
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop",
        featured: true
    },
    {
        id: 4,
        title: "Atomic Habits",
        author: "James Clear",
        price: "₦43,190",
        category: "Non-Fiction",
        description: "The #1 New York Times bestseller. Tiny Changes, Remarkable Results. Transform your life with tiny changes in behavior.",
        coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop",
        featured: true
    },
    {
        id: 5,
        title: "Dune",
        author: "Frank Herbert",
        price: "₦31,990",
        category: "Sci-Fi",
        description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.",
        coverUrl: "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=400&h=600&fit=crop"
    },
    {
        id: 6,
        title: "Where the Crawdads Sing",
        author: "Delia Owens",
        price: "₦38,390",
        category: "Fiction",
        description: "A coming-of-age story and murder mystery set in the marshes of North Carolina in the 1950s and 60s.",
        coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop",
        featured: true
    },
    {
        id: 7,
        title: "It Ends with Us",
        author: "Colleen Hoover",
        price: "₦35,190",
        category: "Romance",
        description: "A novel about a woman who must choose between the man she loves and the man she should have loved.",
        coverUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop"
    },
    {
        id: 8,
        title: "Educated",
        author: "Tara Westover",
        price: "₦41,590",
        category: "Non-Fiction",
        description: "A memoir about a young woman who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
        coverUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop"
    },
    {
        id: 9,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        price: "₦39,990",
        category: "Mystery",
        description: "The story of a woman's act of violence against her husband and the therapist obsessed with uncovering her motive.",
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    },
    {
        id: 10,
        title: "The Thursday Murder Club",
        author: "Richard Osman",
        price: "₦36,790",
        category: "Mystery",
        description: "Four unlikely friends meet weekly to investigate unsolved murders, but when a brutal killing takes place on their very doorstep, the game is on.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
        id: 11,
        title: "The Invisible Life of Addie LaRue",
        author: "V.E. Schwab",
        price: "₦43,190",
        category: "Fantasy",
        description: "A story of a woman cursed to be forgotten by everyone she meets, and the extraordinary life she lives over three centuries.",
        coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop",
        featured: true
    },
    {
        id: 12,
        title: "Sapiens",
        author: "Yuval Noah Harari",
        price: "₦46,390",
        category: "Non-Fiction",
        description: "A brief history of humankind from the Stone Age to the modern age, exploring how Homo sapiens came to dominate the world.",
        coverUrl: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400&h=600&fit=crop"
    },
    {
        id: 13,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        price: "₦44,790",
        category: "Fantasy",
        description: "The tale of Kvothe, from his childhood in a troupe of traveling players to his years as a notorious adventurer and musician.",
        coverUrl: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop"
    },
    {
        id: 14,
        title: "Becoming",
        author: "Michelle Obama",
        price: "₦47,990",
        category: "Non-Fiction",
        description: "The memoir of the former First Lady of the United States, chronicling her journey from childhood to the White House.",
        coverUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop",
        featured: true
    },
    {
        id: 15,
        title: "The Song of Achilles",
        author: "Madeline Miller",
        price: "₦38,390",
        category: "Fiction",
        description: "A reimagining of Homer's Iliad, told through the perspective of Patroclus, companion to Achilles.",
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    },
    {
        id: 16,
        title: "The Martian",
        author: "Andy Weir",
        price: "₦39,990",
        category: "Sci-Fi",
        description: "An astronaut becomes stranded on Mars and must use his ingenuity to survive until rescue is possible.",
        coverUrl: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop"
    },
    {
        id: 17,
        title: "Circe",
        author: "Madeline Miller",
        price: "₦41,590",
        category: "Fantasy",
        description: "The story of the sorceress Circe from Greek mythology, exploring her exile and transformation into a formidable witch.",
        coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
    },
    {
        id: 18,
        title: "Normal People",
        author: "Sally Rooney",
        price: "₦35,190",
        category: "Romance",
        description: "A modern love story about two Irish teenagers who navigate the complexities of intimacy and connection.",
        coverUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop"
    },
    {
        id: 19,
        title: "The Hunger Games",
        author: "Suzanne Collins",
        price: "₦31,990",
        category: "Young Adult",
        description: "In a dystopian future, a teenage girl volunteers to take her sister's place in a deadly televised competition.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
        id: 20,
        title: "The Subtle Art of Not Giving a F*ck",
        author: "Mark Manson",
        price: "₦39,990",
        category: "Non-Fiction",
        description: "A counterintuitive approach to living a good life, focusing on what truly matters and letting go of the rest.",
        coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop"
    },
    {
        id: 21,
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        price: "₦52,790",
        category: "Fantasy",
        description: "Epic fantasy featuring knights radiant, magical swords, and a world torn apart by devastating storms.",
        coverUrl: "https://images.unsplash.com/photo-1518373714866-3f1478910cc0?w=400&h=600&fit=crop"
    },
    {
        id: 22,
        title: "Gone Girl",
        author: "Gillian Flynn",
        price: "₦38,390",
        category: "Mystery",
        description: "A psychological thriller about a woman's disappearance and the dark secrets of her marriage.",
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    },
    {
        id: 23,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        price: "₦33,590",
        category: "Fantasy",
        description: "The prequel to The Lord of the Rings, following Bilbo Baggins on his unexpected adventure.",
        coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
    },
    {
        id: 24,
        title: "A Man Called Ove",
        author: "Fredrik Backman",
        price: "₦36,790",
        category: "Fiction",
        description: "A heartwarming story about a curmudgeonly widower whose life is transformed by his new neighbors.",
        coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
    },
    {
        id: 25,
        title: "The Nightingale",
        author: "Kristin Hannah",
        price: "₦43,190",
        category: "Historical Fiction",
        description: "Two sisters in Nazi-occupied France find different ways to resist during World War II.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
        id: 26,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        price: "₦44,790",
        category: "Non-Fiction",
        description: "A groundbreaking exploration of the two systems that drive the way we think and make decisions.",
        coverUrl: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400&h=600&fit=crop"
    },
    {
        id: 27,
        title: "The Book Thief",
        author: "Markus Zusak",
        price: "₦39,990",
        category: "Historical Fiction",
        description: "Narrated by Death, this is the story of Liesel, a girl living in Nazi Germany who steals books.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
        id: 28,
        title: "The Alchemist",
        author: "Paulo Coelho",
        price: "₦31,990",
        category: "Fiction",
        description: "A mystical story about following your dreams and listening to your heart.",
        coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
    },
    {
        id: 29,
        title: "Red Rising",
        author: "Pierce Brown",
        price: "₦41,590",
        category: "Sci-Fi",
        description: "In a color-coded future society, a low-caste miner infiltrates the elite to bring down the system from within.",
        coverUrl: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&h=600&fit=crop"
    },
    {
        id: 30,
        title: "The Four Agreements",
        author: "Don Miguel Ruiz",
        price: "₦30,390",
        category: "Non-Fiction",
        description: "A practical guide to personal freedom based on ancient Toltec wisdom.",
        coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop"
    },
    {
        id: 31,
        title: "Beach Read",
        author: "Emily Henry",
        price: "₦35,190",
        category: "Romance",
        description: "Two writers with opposite styles challenge each other to write in the other's genre during a summer at the beach.",
        coverUrl: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop"
    },
    {
        id: 32,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        price: "₦39,990",
        category: "Mystery",
        description: "A journalist and a computer hacker team up to solve a decades-old disappearance from a wealthy family.",
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    },
    {
        id: 33,
        title: "Six of Crows",
        author: "Leigh Bardugo",
        price: "₦38,390",
        category: "Young Adult",
        description: "A gang of criminals undertake an impossible heist in a fantasy world filled with magic.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
        id: 34,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        price: "₦36,790",
        category: "Non-Fiction",
        description: "A spiritual guide to transcending thoughts and finding enlightenment in the present moment.",
        coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop"
    },
    {
        id: 35,
        title: "All the Light We Cannot See",
        author: "Anthony Doerr",
        price: "₦43,190",
        category: "Historical Fiction",
        description: "The lives of a blind French girl and a German boy intersect in occupied France during WWII.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
        id: 36,
        title: "The Institute",
        author: "Stephen King",
        price: "₦44,790",
        category: "Horror",
        description: "Children with special talents are abducted and held in a secret facility for sinister purposes.",
        coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop"
    },
    {
        id: 37,
        title: "Anxious People",
        author: "Fredrik Backman",
        price: "₦38,390",
        category: "Fiction",
        description: "A failed bank robber takes hostages at an apartment viewing, leading to unexpected connections.",
        coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop"
    },
    {
        id: 38,
        title: "The 5 AM Club",
        author: "Robin Sharma",
        price: "₦39,990",
        category: "Non-Fiction",
        description: "A transformative guide to owning your morning and elevating your life through early rising.",
        coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&h=600&fit=crop"
    },
    {
        id: 39,
        title: "The Guest List",
        author: "Lucy Foley",
        price: "₦39,990",
        category: "Mystery",
        description: "A wedding on a remote Irish island turns deadly when a body is discovered.",
        coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
    },
    {
        id: 40,
        title: "House of Earth and Blood",
        author: "Sarah J. Maas",
        price: "₦47,990",
        category: "Fantasy",
        description: "In a city of angels, demons, and otherworldly beings, a half-Fae woman seeks justice for her murdered friends.",
        coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=600&fit=crop"
    }
];