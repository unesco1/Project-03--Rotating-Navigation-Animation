// create HTML elements
let arrEl =[{
    ele: document.createElement('div'),
    attr: 'circle-nav',
},
{
    ele: document.createElement('nav'),
    attr: 'navigation',
},
{
    ele: document.createElement('div'),
    attr: 'container',
}];

arrEl.forEach(el => {
    document.body.appendChild(el.ele).setAttribute('class', el.attr);
});

let myCircle = document.querySelector(".circle-nav");

let icones = `<i class="fas fa-align-justify"></i>
<i class="fas fa-times"></i>`;

myCircle.innerHTML = icones; 

let openNav = document.querySelector(".fa-align-justify");
let closeNav = document.querySelector(".fa-times");

let myContainer = document.querySelector(".container");
let myMenu = document.querySelector("nav");

let ul = `<ul>
<li>
    <a href="#">
        <i class="fas fa-home"></i>
        <span>home</span>
    </a>
</li>
<li>
    <a href="#">
        <i class="fas fa-address-card"></i>
        <span>about</span>
    </a>
</li>
<li><a href="#">
        <i class="fas fa-id-card-alt"></i>
        <span>contact</span>
    </a>
</li>
</ul>`;

myMenu.innerHTML = ul;

let li_1 = document.querySelector("nav li:nth-child(2)");
let li_2 = document.querySelector("nav li:nth-child(3)");

let artContent = `<div class="article-content">
<h1>Amazing Article</h1>
<span>Florin Pop</span>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur, consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.</p>
<h3>My Dog</h3>
<img src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" alt="dog">
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam. Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio, magnam esse. Aperiam?
</p>
</div>`;

myContainer.innerHTML = artContent;

// Functions

openNav.onclick = ()=> {
    
    myCircle.classList.add("rotate-circle");
    myCircle.style.position = "absolute";
    myContainer.classList.add("rotate-container");
    myMenu.classList.add("show-menu");
    li_1.style.marginLeft = "15px";
    li_2.style.marginLeft = "30px";
}

closeNav.onclick = ()=> {
    
    myCircle.classList.remove("rotate-circle");
    myCircle.style.position = "fixed";
    myContainer.classList.remove("rotate-container");
    li_1.style.marginLeft = "0";
    li_2.style.marginLeft = "0";
    myMenu.classList.remove("show-menu");
}

