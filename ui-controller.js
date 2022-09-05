export const uiController = (function(){
    const UIselectors = {
        categoryList: '#category-list tbody'
    }
    return{
        populateCategoryList:function(items){
            let html  = '';
            items.forEach(item => {
                html+= `<tr id="${item.categoryId}">
                <td>${item.categoryId}<td>
                <td>${item.categoryName}<td>
                <td>${item.description}<td>
                <td>
                    <a hreh="#" class="secondary-content"><i class="fa fa-pencil"></i></a>
                <td>
                </tr>`;
            });
            document.querySelector(UIselectors.categoryList).innerHTML = html;
        }
    }
})();