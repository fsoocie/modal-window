let fruits = [
  {id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
  {id: 2, title: 'Апельсины', price: 30, img: 'https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg'},
  {id: 3, title: 'Манго', price: 40, img: 'https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg'},
];

const toHTML = (options) =>{
  return `<div class="col">
      <div class="card">
        <img class="card-img-top" style="height: 300px;" src="${options.img}">
        <div class="card-body">
          <h5 class="card-title">${options.title}</h5>
          <a href='#' data-price="price" data-id="${options.id}" class="btn btn-primary">Посмотреть цену</a>
          <a href='#' data-remove="remove" data-id="${options.id}" class="btn btn-danger">Удалить</a>
        </div>
      </div>
    </div>`
};
const render = () =>{
  document.querySelector('#fruits').innerHTML = fruits.map(toHTML).join('')
};
render();

document.querySelector('#fruits').addEventListener('click', event =>{
  event.preventDefault()
  const id = +event.target.dataset.id;
  const currentFruit = fruits.find(el =>{
    return el.id === id
  });

  if (event.target.dataset.price === 'price'){

    priceModal.setContent(`Цена на товар: <strong>${currentFruit.title}</strong> - ${'$' + currentFruit.price} `)
    priceModal.open()
  }
  else if (event.target.dataset.remove === 'remove'){
    $.confirm(`Вы действительно хотите удалить товар <i><strong>'${currentFruit.title}'</strong></i>?`).then(
        () => {
          fruits = fruits.filter(el => el.id !== id);
          render()
        }
    ).catch(() => console.log('Cancel'))
  }
})

const priceModal = $.modal({
  title: 'Цена на товар',
  closable: true,

  width: '400px',
  footerButtons: [
    {text: 'Ок', type: 'primary', handler() {
        priceModal.close()
    }},
  ]
})

