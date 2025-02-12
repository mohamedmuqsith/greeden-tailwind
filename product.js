var menuicon=document.getElementById('menuicon')
var sidenav=document.getElementById('sidenav')
var closenav=document.getElementById('close-nav')

menuicon.addEventListener('click',function(){
    sidenav.style.right=0
})

closenav.addEventListener('click',function(){
    sidenav.style.right='-50%'
})


    // Search

    var ProductContainer=document.getElementById('product-container')
    var search=document.getElementById('search')
    var ProductList=ProductContainer.querySelectorAll('div')
    
    search.addEventListener('keyup',function(){
        var EnterValue=event.target.value.toUpperCase()

        for(count=0;count<ProductList.length;count=count+1){
           
            var ProductName=ProductList[count].querySelector('h1').textContent

            if(ProductName.toUpperCase().indexOf(EnterValue)<0){
                ProductList[count].style.display='none'
            }
            else{
                  ProductList[count].style.display='block'
            }
        }

    })




    
