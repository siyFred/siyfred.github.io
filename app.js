const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

const items = [];

fetch("https://valdickbacknode.onrender.com/data/cars").then((response) => {
    response.json().then((cars) => {
        render(cars);
    })
})

function render(items) {
    let list = ``;
    if(items.length <= 0){
        content.innerHTML=`Nenhum carro ou marca carregado.`;
    }else{
        items.forEach((item) => {
            list += `
                <div class="item">
                    <label>${item.marca} ${item.nome} ${item.modelo} - ${item.ano}</><br>
                    <label>Motor: ${item.motor}</><br>
                    <label>Combustível: ${item.combustivel}</><br>
                    <label>Câmbio: ${item.cambio}</>
                </div>
            `;
        });
    }
    content.innerHTML = list;
}
