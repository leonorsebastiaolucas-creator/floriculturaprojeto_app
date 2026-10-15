function goTo(page) {
    fetch(`src/pages/${page}.html`)
        .then(res => res.text())
        .then(html => {
            document.getElementById("app").innerHTML = html;
        });
}