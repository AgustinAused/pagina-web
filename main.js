
function inicio() {
    //pagina de inicio 
    const div1 = document.getElementById("contenedor");

    div1.innerHTML = `

    <div class="inicio">
        <div class="siguiente">
            <h1>Alcasec</h1>
            <h2 id="inicio-parrafo">una de las mejores paginas ralacionadas con el mundo del hacking y la ciberceguridad</h2>
            <a href="javascript:blog()" class="btn btn-outline-warning">ir al blog</a>
        </div>
    </div>`;

}



// integrantes Agustin Aused,franco tocci

function ingresar (){
    window.location.replace("login.html");
}

function logIn(){
    // estas funciones son del log in solamente 
    // esto es la funcionalidad del log In
    const $btnSignIn= document.querySelector('.sign-in-btn'),
          $btnSignUp = document.querySelector('.sign-up-btn'),  
          $signUp = document.querySelector('.sign-up'),
          $signIn  = document.querySelector('.sign-in');
    
    document.addEventListener('click', e => {
        if (e.target === $btnSignIn || e.target === $btnSignUp) {
            $signIn.classList.toggle('active');
            $signUp.classList.toggle('active')
        }
    }); 
}
function entrar(){
     // esta funcion lo que hace es escribe en la consola entrando y redireciona a index.html
    console.log('entrando...');
    const usuario = document.querySelector(".usuario");
    const password = document.querySelector(".contraseña");
    window.location.replace("index.html");
}

function articulosHacking() {
     // esta funcion lo que hace es crear la pagina articulos de hacking

    const div1 = document.getElementById("contenedor");

    div1.innerHTML = `
    <section >
    <div class="catalogo item row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
            <div class="card" >
                <img src="imagenes/USB_Rubber_Ducky.png" class="card-img-top" alt="usb para hackear ">
                <div class=" card-body">
                    <h5 class=" title card-title">rubber duky</h5>
                    <p class="card-text">$65.99</p>
                    <a href="javascript:rubber()" class="btn btn-primary ">mas información</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">fue actualizado hace 4 minutos</small>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" >
                <img src="imagenes/screen-crab.jpg" class="card-img-top" alt="una caja negra con una antenade señl pequeña" style="width:60% ; ">
                <div class="card-body">
                <h5 class=" title card-title">screen crab</h5>
                <p class="card-text">$130.00</p>
                <a href="javascript:screen()" class="btn btn-primary">mas información</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">fue actualizado hace 4 minutos</small>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card" >
                <img src="imagenes/bash_bunny_bg.jpg" class="card-img-top" alt="un usb normal que tiene caracterizticas difertesa uno normal(usb)">
                <div class="card-body">
                <h5 class="title card-title">bash bunny</h5>
                <p class="card-text">$349.99</p>
                <a href="javascript:bash()" class="btn btn-primary">mas información</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">fue actualizado hace 4 minutos</small>
                </div>


            </div>
        </div>
        <div class="col">
            <div class="card" >
                <img src="imagenes/shark.jpg" class="card-img-top" alt="es como la salida de un cable ehternet " style="width:60% ; ">
                <div class="card-body">
                <h5 class="title card-title">shark jack</h5>
                <p class="card-text">$156.99</p>
                <a href="javascript:shark()" class="btn btn-primary" >mas información</a>
                </div>
                <div class="card-footer">
                    <small class="text-muted">fue actualizado hace 4 minutos</small>
                </div>
            </div>
        </div>
    </div>
</section>
`;
}


function rubber(){
     // esta funcion lo que hace es crear la pagina rubber 
    const div1 = document.getElementById("contenedor");

    div1.innerHTML=`
    <div class="row">
        <div class="col-7">
        <img class="imagen img-fluid" src="/imagenes/USB_Rubber_Ducky.png" style="width: 50rem;" alt="">
        </div>
        <div class="col-5">
        <h2 class="titulo">Rubber Ducky</h2>
        <p>
            Imagine conectar una unidad USB aparentemente inocente a una computadora e instalar puertas traseras, filtrar documentos o capturar credenciales. <br>
            Con unas pocas pulsaciones de teclas bien diseñadas, todo es posible. Si tan solo tuviera unos minutos, una memoria fotográfica y una precisión de escritura perfecta <br>
            El USB Rubber Ducky inyecta pulsaciones de teclas a velocidades sobrehumanas, violando la confianza inherente que las computadoras tienen en los humanos al hacerse pasar por un teclado. <br>
            Al inventar la inyección de pulsaciones de teclas en 2010, el USB Rubber Ducky se convirtió en la herramienta de pentest imprescindible. Con un diseño encubierto y un lenguaje simple "Ducky Script",
            este mal USB se infiltra en los sistemas y la imaginación de todo el mundo.
        </p>
        <div>
            <p class="precio">$79.99</p>
            <a class=" compra btn btn-primary" href="javascript:listado()" style="margin: 1rem;">comprar</a>
        </div>
        </div>
    </div>`;
}

function bash(){
     // esta funcion lo que hace es crear la pagina bash
    const div1 = document.getElementById("contenedor");
    div1.innerHTML=`
        <div class="row">
            <div class="col-7">
                <img class="imagen img-fluid" src="/imagenes/bash_bunny_bg.jpg" style="width: 50rem;" alt="">
            </div>
            <div class="col-5">
              <h2 class="titulo">Bash Bunny</h2>
                <p>
                  La innovadora plataforma de carga útil que introdujo los ataques USB multivectoriales ha evolucionado. <br>
                  Realice ataques encubiertos o tareas de automatización de TI más rápido que nunca con solo pulsar un botón. El NUEVO Bash Bunny Mark II pasa de enchufarse a encenderse en 7 segundos,
                  por lo que cuando la luz se vuelve verde, es una máquina pirateada. <br>
                  Ahora, con un rendimiento más rápido, geoperimetraje inalámbrico, disparadores remotos y compatibilidad con MicroSD , Bash Bunny es una herramienta aún más impresionante para su arsenal de Red Team. <br>
                  Imite simultáneamente múltiples dispositivos confiables para engañar a los objetivos para que divulguen información confidencial sin activar las defensas. Bash Bunny es verdaderamente la plataforma de ataque USB más avanzada del mundo.
                </p>
                <div>
                    <p class="precio">$130.00</p>
                    <a class=" compra btn btn-primary" href="javascript:listado()" style="margin: 1rem;">comprar</a>
                </div>
            </div>
        </div>`;
}

function screen(){
     // esta funcion lo que hace es crear la pagina shark
    const div1 = document.getElementById("contenedor");
    div1.innerHTML=`
    <div class="row">
        <div class="col-7">
            <img class="imagen img-fluid" src="/imagenes/screen-crab.jpg" style="width: 50rem;" alt="">
        </div>
        <div class="col-5">
        <h2 class="titulo">Rubber Ducky</h2>
            <p>
            Este capturador de pantalla en línea encubierto se ubica entre dispositivos HDMI, como una computadora y un monitor, o una consola y un televisor, para capturar capturas de pantalla en silencio.
            Perfecto para administradores de sistemas, pentesters y cualquier persona que quiera grabar lo que hay en una pantalla.
            </p>
            <div>
                <p class="precio">$89.99</p>
                <a class=" compra btn btn-primary" href="javascript:listado()" style="margin: 1rem;">comprar</a>
            </div>
        </div>
    </div>`;
}

function shark (){
     // esta funcion lo que hace es crear la pagina shark
    const div1 = document.getElementById("contenedor");
    div1.innerHTML=`
    <div class="row">
          <div class="col-7">
            <img class="imagen img-fluid" src="/imagenes/shark.jpg" style="width: 30rem;" alt="">
          </div>
          <div class="col-5">
            <h2 class="titulo">Rubber Ducky</h2>
            <p>
              Ataque Hotplug, conozca LAN. ¡Estas cajas pentest de bolsillo realizan evaluaciones de red en segundos! <br>
              Como diminutas computadoras Linux, ejecutan cargas útiles de DuckyScript™ con tecnología de Bash. Armado listo para usar con un escáner de red ultrarrápido,
              obtendrá reconocimiento con solo presionar un interruptor. <br>
              O cambie el interruptor al modo de armado y sincronice con la biblioteca en línea para obtener una gran cantidad de cargas útiles: acceso remoto, exfiltración y más. <br>
              Con retroalimentación por LED RGB, y ahora en vivo en la carcasa con USB-C Serial en la NUEVA edición de cable.
            </p>
            <div>
              <p class="precio">$79.99</p>
              <a class=" compra btn btn-primary" href="javascript:listado()" style="margin: 1rem;">comprar</a>
            </div>
          </div>
        </div>`;
}

function acerca() {
    // esta funcion lo que hace es crear una pagina acerca de nosotros

    const div1 = document.getElementById("contenedor");

    div1.innerHTML = `
    <div>
    <p>pagina en matenimiento</p>
    </div>`

}


function ubicacion() {
    // esta funcion lo que hace es crear una pagina de ubicacion 

    const div1 = document.getElementById("contenedor");

    div1.innerHTML = `
    
    <section class="ubicacion">

        <h2>ubicacion</h2>
        <div class="mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13137.2780856954!2d-58.380180908819916!3d-34.59608098891213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a3353532ef8c15%3A0xe7637a9cad349339!2sIBM%20Argentina!5e0!3m2!1ses-419!2sar!4v1650174024709!5m2!1ses-419!2sar" width="800" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

    </section>
    `

}

function contacto() {
    // esta funcion lo que hace es crear una pagina de contacto
    const div1 = document.getElementById("contenedor");

    div1.innerHTML = `
        <section class="cont">
        <article id="email">
            <h2>email</h2>
            <p>el mail de contacto es: </p>
            <a href="mailto:agus.aused@gmail.com" target="blank">agus.aused@gmail.com</a>
        </article>
        <article id="telefono">

        </article>
        </section>`
}



// desde aca arranca el carrito de compras loq ue primisro hice fue crear un listaco con un carrusel de boostrap y alli  puse los articulos de la tienda



function listado(){
// esta funcion lo que es cre4ar el listado de productos    
    const cont = document.getElementById("contenedor");

    cont.innerHTML= `
    <h2>listado de productos</h2>
    <div>
        <div class="btn-group d-flex justify-content-center" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck1">articulos de hacking</label>

            <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck2">celulares</label>

            <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
            <label class="btn btn-outline-primary" for="btncheck3">otros</label>
        </div>
    </div>
    <div>
        <div class="container">
            <div id="div1"></div>
            <div class="d-flex justify-content-center">
                <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li class="page-item"><a class="page-link" href="javascript:cargarPagina(0)">1</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:cargarPagina(1)">2</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:cargarPagina(2)">3</a></li>
                    <li class="page-item"><a class="page-link" href="javascript:cargarPagina(3)">4</a></li>
                </ul>
                </nav>
            </div>

        </div>
    </div>
    `;
    cargarPagina(0);
}



let txt= "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, unde? Maiores consequatur id fuga dolorum nisi laudantium maxime obcaecati, nihil nulla sapiente quis. Modi esse inventore dolores fugiat iusto earum.";

img = ["imagenes/USB_Rubber_Ducky.png","imagenes/bash_bunny_bg.jpg","imagenes/screen-crab.jpg","imagenes/shark.jpg","https://i.blogs.es/1375af/iphone_xr_yellow-back_09122018/1366_2000.jpg","https://images.samsung.com/is/image/samsung/p6pim/latin/2202/gallery/latin-galaxy-s22-s901-412920-sm-s901ezgjgto-530963222?$650_519_PNG$",""]


// este array tiene cargado ya el lso productos que vamos a usar para los articulos 
let productos=[
{id:"1",titulo:"rubber duky",precio:"65.99",texto:"",imagen:img[0], cantidad:0},       {id :"2",titulo:"screen crab",precio:"130.00",texto:"",imagen:img[1], cantidad:0},
{id:"3",titulo:"bash bunny",precio:"89.99",texto:"",imagen:img[2], cantidad:0},        {id :"4",titulo:"shark jack",precio:"156.50",texto:"",imagen:img[3], cantidad:0},
{id:"5",titulo:"iphone xr 256gb",precio:"549.99",texto:txt,imagen:img[4], cantidad:0}, {id :"6",titulo:"samsung galaxy s22",precio:"529.99",texto:txt,imagen:img[5], cantidad:0},
{id:"7",titulo:"iphone xr 256gb",precio:"549.99",texto:txt,imagen:img[4], cantidad:0}, {id :"8",titulo:"samsung galaxy s22",precio:"529.99",texto:txt,imagen:img[5], cantidad:0},
{id:"9",titulo:"iphone xr 256gb",precio:"549.99",texto:txt,imagen:img[4], cantidad:0}, {id :"10",titulo:"samsung galaxy s22",precio:"529.99",texto:txt,imagen:img[5], cantidad:0},
{id:"11",titulo:"iphone xr 256gb",precio:"549.99",texto:txt,imagen:img[4], cantidad:0},{id :"12",titulo:"samsung galaxy s22",precio:"529.99",texto:txt,imagen:img[5], cantidad:0},
{id:"13",titulo:"iphone xr 256gb",precio:"549.99",texto:txt,imagen:img[4], cantidad:0},{id :"14",titulo:"samsung galaxy s22",precio:"529.99",texto:txt,imagen:img[5], cantidad:0},
{id:"15",titulo:"iphone xr 256gb",precio:"549.99",texto:txt,imagen:img[4], cantidad:0},{id :"16",titulo:"samsung galaxy s22",precio:"529.99",texto:txt,imagen:img[5], cantidad:0}
];

const ARTICULO_POR_PAGINA = 4;
function cargarPagina(page) {
    const div1 = document.getElementById("div1");

    if (div1.firstChild) {
      div1.innerHTML = '';
    }

    items = '';
    for (let index = page*ARTICULO_POR_PAGINA; index < productos.length && index < (page+1)*ARTICULO_POR_PAGINA; index++) {
      items = items + `
        
      <div class="agregar card mb-4" ">
        <div class="todo row g-0">
          <div class="col-md-4">
            <img src="`+ productos[index].imagen +`" class="img img-fluid rounded-start" alt=". ..">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title ">`+ productos[index].titulo +`</h5>
              <p class="card-text">`+ productos[index].texto +`</p>
              <p class="card-price">`+ productos[index].precio +`</p>
              <button class="agregarAlCarrito btn btn-primary data-id:`+ productos[index].id+`data-nombre:`+productos[index].nombre +` data-precio:`+productos[index].precio +` " onclick="adquirir(` + index + `)">adquirir</button>

            </div>
          </div>
        </div>
      </div>
      ;`

    }
    
    div1.innerHTML = items;
    // button = document.querySelector('.agregarAlCarrito');
    // button.addEventListener('click', Agregar);
}


let carrito= [];



function adquirir(numero){
    console.log(numero);
    let objeto = productos[numero];
    let idObj = objeto.id;
    let nombreProd = objeto.nombre;
    let precioProd = objeto.precio;
    let existe = false;
    ///Recorro todos los productos que tengo en el carrito
    for (let item of carrito) {
    // Comparo cada id de producto en el carrito, con el id del producto que están agregando 
        if (item.id == idObj) {
            // Si existe, incremento su cantidad
            item.cantidad++;
            existe = true;
        }
    }
    //Si el producto no existe, lo agrego
    if (!existe) {
        //Creo un nuevo objeto producto
        let nuevoProd = objeto;
        objeto.cantidad+=1;
        // Agrego el objeto al carrito
        // Push agrega un elemento nuevo al final de un array
        carrito.push(nuevoProd);
    }
    // Guardo carrito en localStorage
    localStorage.setItem('infoCarrito', JSON.stringify(carrito));
    
   
}


function tienda() {


    // Me fijo si existe información en localStorage
    if (localStorage.getItem('infoCarrito') != null) {
        carrito = JSON.parse(localStorage.getItem('infoCarrito'));
    }

    let cont = document.getElementById("contenedor");
     cont.innerHTML = `
    <div class="shop">
        <h1 class="text-center">mi carrito</h1>
        <div class="row">
            <div class="col-6">
                <div class="shopping-cart-header">
                    <h6>Producto</h6>
                </div>
            </div>
            <div class="col-2">
                <div class="shopping-cart-header">
                    <h6 class="text-truncate">Precio</h6>
                </div>
            </div>
            <div class="col-4">
                <div class="shopping-cart-header">
                    <h6>Cantidad</h6>
                </div>
            </div>
        </div>
    </div>
    `;
    console.log(carrito);
    
    
    for ( let item in carrito) {
        const contenido = `
        <div class = "">
            <div class="row carrito">
                <div class="col-6">
                    <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                        <img src=`+carrito[item].imagen+` class="shopping-cart-image" style="width:30%;">
                        <h6 class="shopping-cart-item-title carritoTitle text-truncate ml-3 mb-0">`+carrito[item].titulo+`</h6>
                    </div>
                </div>
                <div class="col-2">
                   <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                       <p class="item-price mb-0 carritoPrecio">$`+carrito[item].precio+`</p>
                   </div>
                </div>
                <div class="col-4">
                   <div class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                       <a><span><img src="mas.png" onclick="AgregarProd(`+carrito[item].id+`)"></span> `+ carrito[item].cantidad+` <span onclick="Eliminar(`+carrito[item].id+`)"><img src="menos.png"</span></a>
                       <button class="btn btn-danger buttonDelete" type="button" onclick="vaciar(`+carrito[item].id+`)">X</button>
                   </div>
                </div>
            </div>
        </div>`;
        cont.innerHTML += contenido;
    }
    let totalPrecio = 0;
    for (item in carrito){
        totalPrecio += Number(carrito[item].precio)*Number(carrito[item].cantidad);
    }
    
    if (carrito.length == 0){
        cont.innerHTML +=`
        <p class="text-danger text-center">esta pagina no tienen ningun articulo en el carrito</p>`;
    }
    if (carrito.length != 0 ){
        boton=`
            <div class="row justify-content-end">
                <div class="col-6 d-flex justify-content-between align-items-center ">
                    <p class="item-text total"><strong>total: $`+Math.round(totalPrecio)+`</strong></p>
                    <button class="btn btn-success comprar" onclick="comprar()"> comprar </button>
                    <button class="btn btn-danger vaciar" onclick="vaciarLista()" > vaciar carrito</button>
                </div>
                
            </div>
        `;
        cont.innerHTML +=boton;
    }
    
}




function Eliminar(prodId) {
    for (let indice in carrito) {
        if (carrito[indice].id==prodId) {
            if (carrito[indice].cantidad > 1) {
                //Restar 1 a la cantidad
                carrito[indice].cantidad--;
            } else {
                //Eliminar el producto
                carrito.splice(indice,1); 
            }
        }
    }

    // Guardo carrito en localStorage
    localStorage.setItem('infoCarrito', JSON.stringify(carrito));
    tienda();
}

function AgregarProd(prodId) {
    for (let indice in carrito) {
        if (carrito[indice].id == prodId) {
            carrito[indice].cantidad++;
        }
    }

    // Guardo carrito en localStorage
    localStorage.setItem('infoCarrito', JSON.stringify(carrito));
    tienda();
}

function vaciar(prodId){
    for (let indice in carrito) {
        console.log(indice);
        if (carrito[indice].id==prodId) {
            productos[indice].cantidad = 0;
            carrito.splice(indice,1);

            
        }
    }
    // Guardo carrito en localStorage
    localStorage.setItem('infoCarrito', JSON.stringify(carrito));
    tienda();
}

function vaciarLista(){
    carrito= [];
    localStorage.removeItem('infoCarrito');
    for (item in productos){
        productos[item].cantidad = 0;
    }
    tienda();
}
