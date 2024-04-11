const url = "https://dummyjson.com/products/"

const container = document.querySelector('.container');


async function products(){
    const res = await fetch(url);
    const data = await res.json();
    const result = data.products;

    result.map((post)=>{

        const titulo = document.createElement('h2');
        titulo.classList = 'title'
        container.appendChild(titulo);

        const div = document.createElement("div");
        div.classList = 'div-items'
        container.appendChild(div);
        div.appendChild(titulo)
        const img = document.createElement('img');
        img.classList = 'img-size'
        div.appendChild(img)


        const p = document.createElement('p');
        // p.classList = 'p-list'
        div.appendChild(p)

        titulo.textContent = `${post.title}`
        p.textContent = `${post.description}`
        
        
        
        img.setAttribute("src", `${post.images[1]}`)
        console.log(post)

    })
    
    

}

products()




