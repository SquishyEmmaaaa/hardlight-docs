let activeTimeout;

const clearActive = () => {
    const toc = document.querySelector('.pagetoc');
    if (!toc) {
        return;
    }

    Array.prototype.forEach.call(toc.children, (el) => el.classList.remove('active'));
};

const markActive = (hash) => {
    const toc = document.querySelector('.pagetoc');
    if (!toc) {
        return;
    }

    const activeLink = Array.prototype.find.call(toc.children, (el) => el.hash === hash);
    if (activeLink) {
        activeLink.classList.add('active');
    }
};

const updateActiveHeader = () => {
    if (activeTimeout) {
        return;
    }

    const headers = [...document.getElementsByClassName('header')];
    const menuBarHeight =
        document.getElementById('menu-bar')?.offsetHeight ||
        document.getElementById('mdbook-menu-bar')?.offsetHeight ||
        0;
    const scrolledY = window.scrollY + menuBarHeight + 10;
    let lastHeader = null;

    for (let index = headers.length - 1; index >= 0; index--) {
        if (scrolledY >= headers[index].offsetTop) {
            lastHeader = headers[index];
            break;
        }
    }

    clearActive();
    if (lastHeader) {
        markActive(lastHeader.hash);
    }
};

const bindClickHandlers = () => {
    const toc = document.querySelector('.pagetoc');
    if (!toc) {
        return;
    }

    Array.prototype.forEach.call(toc.children, (el) => {
        el.addEventListener('click', () => {
            clearActive();
            el.classList.add('active');
            activeTimeout = window.setTimeout(() => {
                activeTimeout = null;
            }, 100);
        });
    });
};

const buildPagetoc = () => {
    const main = document.querySelector('#content > main, #mdbook-content > main');
    if (!main) {
        return null;
    }

    const existing = document.querySelector('.pagetoc');
    if (existing) {
        return existing;
    }

    const contentWrap = document.createElement('div');
    contentWrap.className = 'content-wrap';
    while (main.firstChild) {
        contentWrap.appendChild(main.firstChild);
    }
    main.appendChild(contentWrap);
    main.insertAdjacentHTML('afterbegin', '<div class="sidetoc"><nav class="pagetoc"></nav></div>');
    return document.querySelector('.pagetoc');
};

const populatePagetoc = () => {
    const toc = buildPagetoc();
    if (!toc) {
        return;
    }

    const headers = [...document.getElementsByClassName('header')];
    headers.forEach((header) => {
        const parent = header.parentElement;
        if (!parent || parent.classList.contains('toc-ignore')) {
            return;
        }

        const text = [...parent.childNodes].map(({ textContent }) => textContent).join('').trim();
        if (!text) {
            return;
        }

        const link = document.createElement('a');
        link.textContent = text;
        link.href = header.href;
        link.className = `pagetoc-${parent.tagName}`;
        toc.appendChild(link);
    });

    bindClickHandlers();
    updateActiveHeader();
    window.addEventListener('scroll', updateActiveHeader);
};

window.addEventListener('load', populatePagetoc);
