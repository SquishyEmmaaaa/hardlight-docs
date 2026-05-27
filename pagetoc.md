Skip to content
Your recovery codes have not been saved in the past year. Make sure you still have them stored somewhere safe by viewing and downloading them again.


code Search Results · repo:space-wizards/docs pagetoc
Filter by
Languages
Paths
Advanced
3 files
 (142 ms)
3 files
in
space-wizards/docs(press backspace or delete to remove)


scripts/nav-additions.js
JavaScript
·
9
 (9)
// Un-active everything when you click it
Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function(el) {
    el.addEventHandler("click", function() {
        Array.prototype.forEach.call(document.getElementsByClassName("pagetoc")[0].children, function(el) {
            el.classList.remove("active");
        });
        el.classList.add("active");
Show 7 more matches


scss/nav-style.css
CSS
·
5
 (5)
    }
    .pagetoc {
        position: fixed;
    }
    .pagetoc a {
        border-left: 1px solid var(--sidebar-bg);
Show 3 more matches


theme/index.hbs
Handlebars
·
1
 (1)
                <div id="content" class="content">
                    <main>
                        <!-- Page table of contents -->
                        <div class="sidetoc"><nav class="pagetoc"></nav></div>
                        {{{ content }}}
                    </main>
