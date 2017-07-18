{
    const collapse = function() {

        let classActive = this.classList.contains('accordion__header--active');
        let icon = this.firstElementChild;
        let content = this.nextElementSibling;
        let parent = this.parentElement.parentElement.children;

        if (!classActive) {
            for (let i = 0, len = parent.length; i < len; i++) {
                let item = parent[i].firstElementChild;
                item.classList.remove('accordion__header--active');
                item.nextElementSibling.classList.remove('accordion__content--visible');
                item.firstElementChild.innerHTML = '+';
            }

            this.classList.add('accordion__header--active');
            content.classList.add('accordion__content--visible');
            icon.innerHTML = '-';

        } else {
            this.classList.remove('accordion__header--active');
            content.classList.remove('accordion__content--visible');
            icon.innerHTML = '+';
        }

    };

    const accordion = document.querySelectorAll('.accordion__header');

    [].forEach.call(accordion, function(acc) {
        acc.addEventListener('click', collapse);
    });
}