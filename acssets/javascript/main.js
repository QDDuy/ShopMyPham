    const tab_title_product = document.querySelector('.tab-title-product');
    const tab_products = document.querySelector('.tab-products');

    function tabClicked(element) {
        let activedElement = tab_title_product.querySelector('.active');
        let activeTab = tab_products.querySelector('.active');
        let elementName = element.getAttribute('name');
        let displayTab = tab_products.querySelector(`#${elementName}`);

        activedElement.classList.remove('active');
        activeTab.classList.remove('active');
        element.classList.add('active');
        displayTab.classList.add('active');
    }
