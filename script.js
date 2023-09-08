const popover = document.getElementById("popover");

popover.addEventListener("click", () => popover.close());

for (let img of document.querySelectorAll("img:not([src='credit.svg']):not([src='click.svg'])")) {
    img.addEventListener("click", () => {
        popover.innerHTML = img.outerHTML
        popover.showModal();
        document.querySelector("#popover > img").addEventListener("click", (e) => e.stopPropagation());
    });
}