const categories = ["All", "Fiction", "Sci-Fi", "Romance", "Non-Fiction", "Mystery", "Fantasy"];

const dealBooks = [
    { ...books[0], discount: 30, originalPrice: 35.99 },
    { ...books[1], discount: 25, originalPrice: 38.99 },
    { ...books[3], discount: 40, originalPrice: 44.99 }
];

let cart = JSON.parse(localStorage.getItem('bookstore_cart') || '[]');
let selectedCategory = "All";
let isLoading = false;

function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    const overlay = document.getElementById('mobileOverlay');
    
    if (navLinks && overlay) {
        navLinks.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    const icon = document.getElementById('themeIcon');
    if (icon) {
        if (newTheme === 'dark') {
            icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        } else {
            icon.innerHTML = '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
        }
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    const icon = document.getElementById('themeIcon');
    if (icon && savedTheme === 'dark') {
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    }
}

function showLoadingSkeleton(containerId, count = 6) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
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
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = count;
        badge.style.display = count > 0 ? 'flex' : 'none';
    }
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

function renderBookCard(book) {
    return `
        <div class="book-card" style="cursor: pointer;" onclick="window.location.href='book-details.html?id=${book.id}'">
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
    if (!grid) return;
    
    grid.innerHTML = categories.filter(c => c !== "All").map(category => `
        <a href="books.html" class="category-card" onclick="localStorage.setItem('selectedCategory', '${category}');">
            <svg class="category-icon" style="width: 2.5rem; height: 2.5rem; color: ${colors[category]};" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                ${categoryIcons[category]}
            </svg>
            <h3 class="category-title">${category}</h3>
            <p class="category-count">${books.filter(b => b.category === category).length}+ books</p>
        </a>
    `).join('');
}

function renderFeaturedBooks() {
    const grid = document.getElementById('featuredBooksGrid');
    if (!grid) return;
    
    showLoadingSkeleton('featuredBooksGrid', 6);
    simulateLoading(() => {
        const featuredBooks = books.filter(book => book.featured);
        grid.innerHTML = featuredBooks.map(book => renderBookCard(book)).join('');
    });
}

function renderDeals() {
    const grid = document.getElementById('dealsGrid');
    if (!grid) return;
    
    showLoadingSkeleton('dealsGrid', 3);
    simulateLoading(() => {
        grid.innerHTML = dealBooks.map(book => `
            <div class="deal-card">
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
                        <span class="original-price">₦${(book.originalPrice * 1000).toLocaleString('en-NG')}</span>
                        <span class="deal-price">${book.price}</span>
                    </div>
                </div>
                <div class="book-footer">
                    <button class="add-to-cart-btn" onclick="addToCart(${JSON.stringify(book).replace(/"/g, '&quot;')}, event)">
                        <svg class="icon" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                        Grab Deal Now!
                    </button>
                </div>
            </div>
        `).join('');
        
        startDealTimers();
    });
}

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

function renderAllBooks() {
    const grid = document.getElementById('allBooksGrid');
    if (!grid) return;
    
    const searchQuery = document.getElementById('searchInput')?.value.toLowerCase() || '';
    
    // Get selected category from localStorage or default to "All"
    const savedCategory = localStorage.getItem('selectedCategory') || 'All';
    selectedCategory = savedCategory;
    
    const filtered = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchQuery) || 
                            book.author.toLowerCase().includes(searchQuery);
        const matchesCategory = selectedCategory === "All" || book.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const countEl = document.getElementById('bookCount');
    const noBooks = document.getElementById('noBooksMessage');

    showLoadingSkeleton('allBooksGrid', 12);
    
    simulateLoading(() => {
        if (filtered.length === 0) {
            grid.innerHTML = '';
            if (noBooks) noBooks.style.display = 'block';
            if (countEl) countEl.textContent = 'Showing 0 books';
        } else {
            grid.innerHTML = filtered.map(book => renderBookCard(book)).join('');
            if (noBooks) noBooks.style.display = 'none';
            if (countEl) countEl.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? 'book' : 'books'}`;
        }

        // Render category filters
        const filtersDiv = document.getElementById('categoryFilters');
        if (filtersDiv) {
            filtersDiv.innerHTML = categories.map(cat => `
                <button class="btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}" style="padding: 0.5rem 1rem; font-size: 0.875rem;" onclick="selectedCategory = '${cat}'; localStorage.setItem('selectedCategory', '${cat}'); renderAllBooks();">
                    ${cat}
                </button>
            `).join('');
        }
    }, 400);
}

function filterBooks() {
    renderAllBooks();
}

function renderCart() {
    const container = document.getElementById('cartContent');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 0;">
                <svg style="width: 4rem; height: 4rem; color: hsl(var(--muted-foreground)); margin: 0 auto 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <h2 style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem; color: hsl(var(--foreground));">Your cart is empty</h2>
                <p style="color: hsl(var(--muted-foreground)); margin-bottom: 1.5rem;">Start adding some books to your cart!</p>
                <a href="books.html" class="btn btn-primary">Browse Books</a>
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
                    <h2 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1rem; color: hsl(var(--foreground));">Order Summary</h2>
                    
                    <div style="border-bottom: 1px solid hsl(var(--border)); padding-bottom: 1rem; margin-bottom: 1rem;">
                        ${cart.map(item => {
                            const numericPrice = parseFloat(item.price.replace(/[₦,]/g, ''));
                            const itemTotal = numericPrice * item.quantity;
                            return `
                                <div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
                                    <span style="color: hsl(var(--muted-foreground));">${item.title} x ${item.quantity}</span>
                                    <span style="font-weight: 500; color: hsl(var(--foreground));">₦${itemTotal.toLocaleString('en-NG')}</span>
                                </div>
                            `;
                        }).join('')}
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

function handleContactSubmit(e) {
    e.preventDefault();
    const form = document.getElementById('contactForm');
    showToast("Thank you for your message! We'll get back to you soon.");
    setTimeout(() => {
        form.reset();
    }, 100);
    return false;
}

function handleFooterNewsletter(e) {
    e.preventDefault();
    showToast("Successfully subscribed to our newsletter!");
    e.target.reset();
}

function renderBookDetails() {
    // Get book ID from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = parseInt(urlParams.get('id'));
    
    const book = books.find(b => b.id === bookId);
    const container = document.getElementById('bookDetailsContent');
    
    if (!book || !container) return;

    container.innerHTML = `
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
}

// Initialize based on current page
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    updateCartBadge();
    
    // Check which page we're on and initialize accordingly
    const path = window.location.pathname;
    
    if (path.includes('index.html') || path.endsWith('/')) {
        // Home page
        renderCategories();
        renderFeaturedBooks();
        renderDeals();
    } else if (path.includes('books.html')) {
        // Books page
        renderAllBooks();
    } else if (path.includes('cart.html')) {
        // Cart page
        renderCart();
    } else if (path.includes('book-details.html')) {
        // Book details page
        renderBookDetails();
    }
});