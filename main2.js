let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "Onion Pizza",
        foodimg: 'img/pizza1.jfif',
        price: "10.99 EUR",
        type: "breakFast",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    },
    {
        FoodName: "Healthy dish",
        foodimg: 'img/food2.jpeg',
        price: "5.99 EUR",
        type: "breakFast",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    },
    {
        FoodName: "Eggs",
        foodimg: 'img/food1.jpeg',
        price: "7.99 EUR",
        type: "breakFast",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    },
    {
        FoodName: "Chicken Menu",
        foodimg: 'img/food4.jfif',
        price: "16.99 EUR",
        type: "Lunch",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    },
    {
        FoodName: "Combination Menu",
        foodimg: 'img/food5.jpg',
        price: "13.99 EUR",
        type: "Lunch",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    },
    {
        FoodName: "Hamburger",
        foodimg: 'img/food6.jpg',
        price: "3.99 EUR",
        type: "Lunch",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    },
    {
        FoodName: "Aloo Goshat",
        foodimg: 'img/food7.jpg',
        price: "4.59 EUR",
        type: "Lunch",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i."
    },

    {
        FoodName: "Banana Shakes",
        foodimg: 'img/food8.webp',
        price: "2.99 EUR",
        type: "Shakes",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    },
    {
        FoodName: "Mango Shakes",
        foodimg: 'img/food9.jpeg',
        price: "2.99 EUR",
        type: "Shakes",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    },

    {
        FoodName: "Combination2",
        foodimg: 'img/food10.jpg',
        price: "13.99 EUR",
        type: "Dinner",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    },
    {
        FoodName: "Sphagetti",
        foodimg: 'img/food11.jpg',
        price: "7,99 EUR",
        type: "Dinner",
        des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin commodo augue non libero varius, a congue diam tempor. Integer euismod, lacus a luctus commodo, diam nulla commodo urna, non varius nulla tellus at velit. In hac habitasse platea dictumst. Aliquam bibendum, nibh i"
    }
]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'All')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='Breakfast'){
                if(box.classList.contains('breakFast'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Lunch'){
                if(box.classList.contains('Lunch'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Shakes'){
                if(box.classList.contains('Shakes'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Dinner'){
                if(box.classList.contains('Dinner'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})