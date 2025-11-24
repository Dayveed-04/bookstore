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

        const categories = ["All", "Fiction", "Sci-Fi", "Romance", "Non-Fiction", "Mystery", "Fantasy"];


        const dealBooks = [
            { ...books[0], discount: 30, originalPrice: 35.99 },
            { ...books[1], discount: 25, originalPrice: 38.99 },
            { ...books[3], discount: 40, originalPrice: 44.99 }
        ];

        let cart = JSON.parse(localStorage.getItem('bookstore_cart') || '[]');
        let selectedCategory = "All";
        let isLoading = false;

        function toggleTheme() {
            const html = document.documentElement;
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            const icon = document.getElementById('themeIcon');
            if (newTheme === 'dark') {
                icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
            } else {
                icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
            }
        }

        function initTheme() {
            const savedTheme = localStorage.getItem('theme') || 'light';
            document.documentElement.setAttribute('data-theme', savedTheme);
            const icon = document.getElementById('themeIcon');
            if (savedTheme === 'dark') {
                icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
            }
        }

        function showLoadingSkeleton(containerId, count = 6) {
            const container = document.getElementById(containerId);
            container.innerHTML = Array(count).fill(0).map(() => `
                <div class="skeleton-card">
                    <div class="skeleton-image"></div>
                    <div style="padding: 1rem;">
                        <div class="skeleton skeleton-title"></div>
                        <div class="skeleton skeleton-text" style="width: 60%;"></div>
                        <div class="skeleton skeleton-text" style="width: 40%;"></div>
                    </div>
                </div>
            `).join('');
        }
        function simulateLoading(callback, delay = 500) {
            isLoading = true;
            setTimeout(() => {
                callback();
                isLoading = false;
            }, delay);
        }

        function updateCartBadge() {
            const count = cart.reduce((sum, item) => sum + item.quantity, 0);
            document.getElementById('cartBadge').textContent = count;
            document.getElementById('cartBadge').style.display = count > 0 ? 'flex' : 'none';
        }

        function showToast(message) {
            const toast = document.createElement('div');
            toast.className = 'toast';
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 3000);
        }

        function addToCart(book, event) {
            if (event) {
                event.preventDefault();
                event.stopPropagation();
            }
            
            const existingItem = cart.find(item => item.id === book.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ ...book, quantity: 1 });
            }
            localStorage.setItem('bookstore_cart', JSON.stringify(cart));
            updateCartBadge();
            showToast(`"${book.title}" added to cart`);
        }

        function updateQuantity(id, change) {
            const item = cart.find(item => item.id === id);
            if (item) {
                item.quantity += change;
                if (item.quantity <= 0) {
                    removeFromCart(id);
                } else {
                    localStorage.setItem('bookstore_cart', JSON.stringify(cart));
                    renderCart();
                    updateCartBadge();
                }
            }
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            localStorage.setItem('bookstore_cart', JSON.stringify(cart));
            renderCart();
            updateCartBadge();
            showToast("Item removed from cart");
        }
        function showPage(page) {
            document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
            
            if (page === 'home') {
                document.getElementById('homePage').classList.add('active');
            } else if (page === 'books') {
                document.getElementById('booksPage').classList.add('active');
                renderAllBooks();
            } else if (page === 'cart') {
                document.getElementById('cartPage').classList.add('active');
                renderCart();
            } else if (page === 'about') {
                document.getElementById('aboutPage').classList.add('active');
            } else if (page === 'contact') {
                document.getElementById('contactPage').classList.add('active');
            }
            
            window.scrollTo(0, 0);
        }

        function showBookDetails(bookId) {
            const book = books.find(b => b.id === bookId);
            if (!book) return;

            const content = `
                <div style="display: grid; gap: 2rem; grid-template-columns: 1fr;">
                    <div style="aspect-ratio: 2/3; overflow: hidden; border-radius: 0.5rem; max-width: 400px; margin: 0 auto;">
                        <img src="${book.coverUrl}" alt="${book.title}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                    <div style="display: flex; flex-direction: column; justify-content: center;">
                        <span style="display: inline-block; background: hsl(var(--primary) / 0.1); color: hsl(var(--primary)); padding: 0.25rem 0.75rem; border-radius: 9999px; font-size: 0.875rem; font-weight: 500; width: fit-content; margin-bottom: 1rem;">${book.category}</span>
                        <h1 style="font-size: 2.25rem; font-weight: 700; margin-bottom: 0.5rem; color: hsl(var(--foreground));">${book.title}</h1>
                        <p style="font-size: 1.25rem; color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">by ${book.author}</p>
                        
                        <p style="font-size: 1.875rem; font-weight: 700; color: hsl(var(--primary)); margin-bottom: 1.5rem;">${book.price}</p>
                        
                        <div style="margin-bottom: 2rem;">
                            <h2 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.5rem; color: hsl(var(--foreground));">Description</h2>
                            <p style="line-height: 1.75; color: hsl(var(--muted-foreground));">${book.description}</p>
                        </div>
                        
                        <button class="btn btn-lg btn-primary" onclick="addToCart(${JSON.stringify(book).replace(/"/g, '&quot;')}, event)" style="width: 100%; max-width: 300px;">
                            <svg class="icon" viewBox="0 0 24 24" style="margin-right: 0.5rem;"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;

            document.getElementById('bookDetailsContent').innerHTML = content;
            document.getElementById('bookDetailsPage').classList.add('active');
            document.querySelectorAll('.page').forEach(p => {
                if (p.id !== 'bookDetailsPage') p.classList.remove('active');
            });
            window.scrollTo(0, 0);
        }

        function renderBookCard(book) {
            return `
                <div class="book-card" onclick="showBookDetails(${book.id})">
                    <div class="book-image-wrapper">
                        <img src="${book.coverUrl}" alt="${book.title}" class="book-image">
                    </div>
                    <div class="book-content">
                        <h3 class="book-title">${book.title}</h3>
                        <p class="book-author">${book.author}</p>
                        <p class="book-price">${book.price}</p>
                    </div>
                    <div class="book-footer">
                        <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(book).replace(/"/g, '&quot;')}, event)">
                            <svg class="icon" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
        }

        function renderCategories() {
            const categoryIcons = {
                "Fiction": '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                "Sci-Fi": '<circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path>',
                "Romance": '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "Non-Fiction": '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                "Mystery": '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
                "Fantasy": '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>'
            };

            const colors = {
                "Fiction": "hsl(var(--primary))",
                "Sci-Fi": "hsl(var(--accent))",
                "Romance": "hsl(340 82% 52%)",
                "Non-Fiction": "hsl(160 84% 39%)",
                "Mystery": "hsl(262 83% 58%)",
                "Fantasy": "hsl(43 96% 56%)"
            };

            const grid = document.getElementById('categoryGrid');
            grid.innerHTML = categories.filter(c => c !== "All").map(category => `
                <a href="#" class="category-card" onclick="filterByCategory('${category}'); return false;">
                    <svg class="category-icon" style="width: 2.5rem; height: 2.5rem; color: ${colors[category]};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        ${categoryIcons[category]}
                    </svg>
                    <h3 class="category-title">${category}</h3>
                    <p class="category-count">${books.filter(b => b.category === category).length}+ books</p>
                </a>
            `).join('');
        }

        // Render featured books
        function renderFeaturedBooks() {
            showLoadingSkeleton('featuredBooksGrid', 6);
            simulateLoading(() => {
                const featuredBooks = books.filter(book => book.featured);
                const grid = document.getElementById('featuredBooksGrid');
                grid.innerHTML = featuredBooks.map(book => renderBookCard(book)).join('');
            });
        }

        // Render testimonials
        function renderTestimonials() {
            // Removed - no longer needed
        }

        // Render deals
        function renderDeals() {
            const grid = document.getElementById('dealsGrid');
            if (!grid) return;
            
            showLoadingSkeleton('dealsGrid', 3);
            simulateLoading(() => {
                grid.innerHTML = dealBooks.map(book => `
                    <div class="deal-card" onclick="showBookDetails(${book.id})">
                        <div class="deal-timer">
                            <div class="timer-unit">
                                <div class="timer-value" id="hours-${book.id}">12</div>
                                <div class="timer-label">Hours</div>
                            </div>
                            <div style="font-size: 1.5rem;">:</div>
                            <div class="timer-unit">
                                <div class="timer-value" id="mins-${book.id}">34</div>
                                <div class="timer-label">Mins</div>
                            </div>
                            <div style="font-size: 1.5rem;">:</div>
                            <div class="timer-unit">
                                <div class="timer-value" id="secs-${book.id}">56</div>
                                <div class="timer-label">Secs</div>
                            </div>
                        </div>
                        <div style="position: relative;">
                            <div class="deal-badge">${book.discount}% OFF</div>
                            <div class="book-image-wrapper">
                                <img src="${book.coverUrl}" alt="${book.title}" class="book-image">
                            </div>
                        </div>
                        <div class="book-content">
                            <h3 class="book-title">${book.title}</h3>
                            <p class="book-author">${book.author}</p>
                            <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1rem;">
                                <span class="original-price">${book.originalPrice}</span>
                                <span class="deal-price">${book.price}</span>
                            </div>
                        </div>
                        <div class="book-footer">
                            <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(book).replace(/"/g, '&quot;')}, event)" style="background: var(--gradient-1); animation: pulse-glow 2s infinite;">
                                <svg class="icon" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                                Grab Deal Now!
                            </button>
                        </div>
                    </div>
                `).join('');
                
                // Start countdown timers
                startDealTimers();
            });
        }

        // Deal countdown timer
        function startDealTimers() {
            dealBooks.forEach(book => {
                let hours = 12;
                let mins = 34;
                let secs = 56;
                
                setInterval(() => {
                    secs--;
                    if (secs < 0) {
                        secs = 59;
                        mins--;
                    }
                    if (mins < 0) {
                        mins = 59;
                        hours--;
                    }
                    if (hours < 0) {
                        hours = 12;
                        mins = 34;
                        secs = 56;
                    }
                    
                    const hoursEl = document.getElementById(`hours-${book.id}`);
                    const minsEl = document.getElementById(`mins-${book.id}`);
                    const secsEl = document.getElementById(`secs-${book.id}`);
                    
                    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
                    if (minsEl) minsEl.textContent = mins.toString().padStart(2, '0');
                    if (secsEl) secsEl.textContent = secs.toString().padStart(2, '0');
                }, 1000);
            });
        }

        // Filter by category
        function filterByCategory(category) {
            selectedCategory = category;
            showPage('books');
        }

        // Render all books with filters
        function renderAllBooks() {
            const searchQuery = document.getElementById('searchInput')?.value.toLowerCase() || '';
            
            const filtered = books.filter(book => {
                const matchesSearch = book.title.toLowerCase().includes(searchQuery) || 
                                    book.author.toLowerCase().includes(searchQuery);
                const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
                return matchesSearch && matchesCategory;
            });

            const grid = document.getElementById('allBooksGrid');
            const countEl = document.getElementById('bookCount');
            const noBooks = document.getElementById('noBooksMessage');

            showLoadingSkeleton('allBooksGrid', 12);
            
            simulateLoading(() => {
                if (filtered.length === 0) {
                    grid.innerHTML = '';
                    noBooks.style.display = 'block';
                    countEl.textContent = 'Showing 0 books';
                } else {
                    grid.innerHTML = filtered.map(book => renderBookCard(book)).join('');
                    noBooks.style.display = 'none';
                    countEl.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'book' : 'books'}`;
                }

                // Render category filters
                const filtersDiv = document.getElementById('categoryFilters');
                filtersDiv.innerHTML = categories.map(cat => `
                    <button class="btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}" style="padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="selectedCategory = '${cat}'; renderAllBooks();">
                        ${cat}
                    </button>
                `).join('');
            }, 400);
        }

        // Filter books on search
        function filterBooks() {
            renderAllBooks();
        }

        // Render cart
        function renderCart() {
            const container = document.getElementById('cartContent');
            
            if (cart.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 4rem 0;">
                        <svg style="width: 4rem; height: 4rem; color: hsl(var(--muted-foreground)); margin: 0 auto 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                        </svg>
                        <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: hsl(var(--foreground));">Your cart is empty</h2>
                        <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">Start adding some books to your cart!</p>
                        <button class="btn btn-primary" onclick="showPage('books')">Browse Books</button>
                    </div>
                `;
                return;
            }

            const total = cart.reduce((sum, item) => {
                const numericPrice = parseFloat(item.price.replace(/[₦,]/g, ''));
                return sum + (numericPrice * item.quantity);
            }, 0);

            container.innerHTML = `
                <div style="display: grid; gap: 2rem; grid-template-columns: 1fr;">
                    <div>
                        <div style="display: flex; flex-direction: column; gap: 1rem;">
                            ${cart.map(item => `
                                <div style="background: hsl(var(--muted)); border-radius: 0.5rem; padding: 1rem; box-shadow: var(--card-shadow); color: hsl(var(--foreground));">
                                    <div style="display: flex; gap: 1rem;">
                                        <img src="${item.coverUrl}" alt="${item.title}" style="width: 6rem; height: 8rem; object-fit: cover; border-radius: 0.5rem; cursor: pointer;" onclick="showBookDetails(${item.id})">
                                        
                                        <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                            <div>
                                                <h3 style="font-weight: 600; color: hsl(var(--foreground)); cursor: pointer; margin-bottom: 0.25rem;" onclick="showBookDetails(${item.id})">${item.title}</h3>
                                                <p style="font-size: 0.875rem; color: hsl(var(--muted-foreground)); margin-bottom: 0.5rem;">${item.author}</p>
                                                <p style="font-weight: 600; color: hsl(var(--primary));">${item.price}</p>
                                            </div>

                                            <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem;">
                                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                                    <button class="btn btn-outline" style="padding: 0.5rem; width: 2rem; height: 2rem; border-radius: 9999px;" onclick="updateQuantity(${item.id}, -1)">
                                                        <svg style="width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                    </button>
                                                    <span style="width: 3rem; text-align: center; font-weight: 500;">${item.quantity}</span>
                                                    <button class="btn btn-outline" style="padding: 0.5rem; width: 2rem; height: 2rem; border-radius: 9999px;" onclick="updateQuantity(${item.id}, 1)">
                                                        <svg style="width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                                                    </button>
                                                </div>
                                                <button style="background: transparent; border: none; color: hsl(var(--destructive)); cursor: pointer; padding: 0.5rem;" onclick="removeFromCart(${item.id})">
                                                    <div style="color:hsl(var(--foreground));">
                                                        <svg style="width: 1.25rem; height: 1.25rem;" 
                                                            viewBox="0 0 24 24" fill="none" 
                                                            stroke="currentColor" stroke-width="2">
                                                            <polyline points="3 6 5 6 21 6"></polyline>
                                                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                                        </svg>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <div>
                        <div style="position: sticky; top: 5rem; background: linear-gradient(to bottom right, hsl(var(--primary) / 0.05), hsl(var(--accent) / 0.05)); border-radius: 0.5rem; padding: 1.5rem;">
                            <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: hsl(var(--foreground)); ">Order Summary</h2>
                            
                            <div style="border-bottom: 1px solid hsl(var(--border)); padding-bottom: 1rem; margin-bottom: 1rem;">
                              ${cart.map(item => {
                              const numericPrice = parseFloat(item.price.replace(/[₦,]/g, ''));
                              const itemTotal = numericPrice * item.quantity;
                             return `
                             <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
                                <span style="color: hsl(var(--muted-foreground));">${item.title} x ${item.quantity}</span>
                                 <span style="font-weight: 500; color: hsl(var(--foreground));">₦${itemTotal.toLocaleString('en-NG')}</span>
                            </div>      `;   }).join('')}
                        </div>

                        <div style="display: flex; justify-content: space-between; font-size: 1.125rem; font-weight: 700; margin-bottom: 1.5rem; color: hsl(var(--foreground));">
                           <span>Total</span>
                            <span style="color: hsl(var(--primary));">₦${total.toLocaleString('en-NG')}</span>
                        </div>
                        <button class="btn btn-lg btn-primary" style="width: 100%;">
                             Proceed to Checkout
                        </button>
                        </div>
                    </div>
                </div>
            `;
        }
        function handleNewsletterSubmit(e) {
            e.preventDefault();
            showToast("Thank you for subscribing! Check your email for updates.");
            e.target.reset();
        }

        // Handle contact submit
        function handleContactSubmit(e) {
            e.preventDefault();
            
            // Get the form element
            const form = document.getElementById('contactForm');
            
            // Show success message
            showToast("Thank you for your message! We'll get back to you soon.");
            
            // Clear the form - using setTimeout to ensure it happens after the toast
            setTimeout(() => {
                form.reset();
            }, 100);
            
            return false;
        }

        // Handle footer newsletter
        function handleFooterNewsletter(e) {
            e.preventDefault();
            showToast("Successfully subscribed to our newsletter!");
            e.target.reset();
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            initTheme();
            updateCartBadge();
            renderCategories();
            renderFeaturedBooks();
            renderDeals();
        });