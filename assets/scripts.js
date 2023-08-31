const navItem = document.querySelectorAll('.nav-link');

navItem.forEach(element => {   
    element.addEventListener('click', (e) => {
        // Remove all active tag class on all elements
        removeAllActiveTag();
        
        // Add the active and active tag class to the element
        element.classList.add('active', 'active-tag');
        //console.log(e.target.dataset.imagesToggle);

        // Reload all image by the current dataset
        reloadGallery(e.target.dataset.imagesToggle);
    });
});

function removeAllActiveTag() {
    navItem.forEach(element => {
        element.classList.remove('active', 'active-tag');
    });
}

function reloadGallery(activeTag) {
    document.querySelectorAll('.item-column').forEach(item => {
        item.style.display = 'none';
        
        if(activeTag === "all" || activeTag === item.children[0].dataset.galleryTag) {
            item.style.display = 'block';
        }
    });
}