const productos = [
  {
    id: 1,
    articulo: "Cuadro abstracto",
    precio: 500,
    descripcion: "Cuadro abstracto pintado a mano con técnica mixta",
    foto: "data:image/jpeg;base64,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",
    categoria: "Decoración",
    stock: 12,
  },
  {
    id: 2,
    articulo: "Candelabro de cristal",
    precio: 250,
    descripcion: "Candelabro de cristal tallado con capacidad para tres velas",
    foto: "https://http2.mlstatic.com/D_NQ_NP_694922-MLA54638046263_032023-O.webp",
    categoria: "Decoración",
    stock: 6,
  },
  {
    id: 3,
    articulo: "Silla de comedor",
    precio: 800,
    descripcion: "Silla de comedor con asiento y respaldo acolchados",
    foto: "https://http2.mlstatic.com/D_NQ_NP_724398-MLA49204213612_022022-O.webp",
    categoria: "Hogar",
    stock: 18,
  },
  {
    id: 4,
    articulo: "Mesa de centro",
    precio: 1200,
    descripcion:
      "Mesa de centro con estructura de metal y tapa de vidrio templado",
    foto: "https://http2.mlstatic.com/D_NQ_NP_951242-MLA53564585270_022023-O.webp",
    categoria: "Hogar",
    stock: 9,
  },
  {
    id: 5,
    articulo: "Reloj de pared",
    precio: 350,
    descripcion: "Reloj de pared con marco de madera y números romanos",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHKgnZLjS94K0twyfxs7L-FYugbuZQSRDKFaT9REJLnH0PoB0WVMnSHWpWqY0j6jNUbsk&usqp=CAU",
    categoria: "Decoración",
    stock: 21,
  },
  {
    id: 6,
    articulo: "Lámpara de pie",
    precio: 600,
    descripcion: "Lámpara de pie con base de metal y pantalla de tela",
    foto: "https://iris.iluminacion.com.ar/Image/0/600_750-obj_tizo_pk54.jpg",
    categoria: "Decoración",
    stock: 15,
  },
  {
    id: 7,
    articulo: "Escritorio de madera",
    precio: 1500,
    descripcion: "Escritorio de madera maciza con cajones y compartimentos",
    foto: "https://http2.mlstatic.com/D_NQ_NP_993504-MLA52141610143_102022-O.webp",
    categoria: "Oficina",
    stock: 8,
  },
  {
    id: 8,
    articulo: "Silla de escritorio",
    precio: 700,
    descripcion:
      "Silla de escritorio ergonómica con respaldo y apoyabrazos ajustables",
    foto: "https://ballsellings.com/108199-large_default/silla-marsella-blanca.jpg",
    categoria: "Oficina",
    stock: 11,
  },
  {
    id: 9,
    articulo: "Organizador de documentos",
    precio: 200,
    descripcion:
      "Organizador de documentos de escritorio con varios compartimentos",
    foto: "https://http2.mlstatic.com/D_NQ_NP_664280-MLA47602680272_092021-V.jpg",
    categoria: "Oficina",
    stock: 23,
  },
  {
    id: 10,
    articulo: "Buzón de correo",
    precio: 450,
    descripcion: "Buzón de correo de metal con cerradura y llave",
    foto: "https://http2.mlstatic.com/D_NQ_NP_686882-MLA43825739361_102020-O.webp",
    categoria: "Oficina",
    stock: 14,
  },
  {
    id: 11,
    articulo: "Espejo de pared",
    precio: 600,
    descripcion: "Espejo de pared con marco de madera tallada",
    foto: "https://arredo.vtexassets.com/arquivos/ids/470928-800-auto?v=638159042978530000&width=800&height=auto&aspect=true",
    categoria: "Decoración",
    stock: 19,
  },
  {
    id: 12,
    articulo: "Set de toallas",
    precio: 300,
    descripcion:
      "Set de toallas de algodón de alta calidad, incluye toallas de baño, manos y rostro",
    foto: "https://nauticadeco.com.ar/wp-content/uploads/2021/12/8772-Beige-768x768-1.jpeg",
    categoria: "Hogar",
    stock: 25,
  },
  {
    id: 13,
    articulo: "Cojín decorativo",
    precio: 150,
    descripcion:
      "Cojín decorativo con estampado geométrico y relleno de plumas",
    foto: "https://mijormi.vteximg.com.br/arquivos/ids/177775-1000-1332/Almohadon-pintado-natural-blanco-negro-RACHEL-ESPIGA-45X45-Landmark-00.jpg?v=638006766543200000",
    categoria: "Decoración",
    stock: 14,
  },
  {
    id: 14,
    articulo: "Cesto de mimbre",
    precio: 250,
    descripcion:
      "Cesto de mimbre trenzado con asas, ideal para guardar mantas o revistas",
    foto: "https://murillohome.com/wp-content/uploads/2022/05/DG__4965.jpg",
    categoria: "Decoración",
    stock: 8,
  },
  {
    id: 15,
    articulo: "Espejo de maquillaje",
    precio: 350,
    descripcion: "Espejo de maquillaje con luz LED y zoom de aumento",
    foto: "https://http2.mlstatic.com/D_NQ_NP_770180-MLA46491077220_062021-O.webp",
    categoria: "Hogar",
    stock: 11,
  },
  {
    id: 16,
    articulo: "Jarrón de cerámica",
    precio: 200,
    descripcion: "Jarrón de cerámica con diseño moderno y acabado mate",
    foto: "https://m.media-amazon.com/images/I/31D3U2WE7CL._AC_UF894,1000_QL80_.jpg",
    categoria: "Decoración",
    stock: 17,
  },
  {
    id: 17,
    articulo: "Alfombra de lana",
    precio: 1200,
    descripcion: "Alfombra de lana tejida a mano con patrón de rombos",
    foto: "https://d22fxaf9t8d39k.cloudfront.net/0553883aa71043a804b247101f4eeffc075bd3a2062df1a228a4148e363e26cc48195.jpeg",
    categoria: "Hogar",
    stock: 5,
  },
  {
    id: 18,
    articulo: "Caja organizadora",
    precio: 180,
    descripcion: "Caja organizadora de madera con tapa y separadores internos",
    foto: "https://http2.mlstatic.com/D_NQ_NP_858267-MLA54778068685_032023-W.jpg",
    categoria: "Hogar",
    stock: 22,
  },
  {
    id: 19,
    articulo: "Portarretratos",
    precio: 80,
    descripcion: "Portarretratos de madera con capacidad para dos fotos",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYLaWHvYbOtDoI4EXPhDug91OIP-BL4XSOw&usqp=CAU",
    categoria: "Decoración",
    stock: 20,
  },
  {
    id: 20,
    articulo: "Set de vasos",
    precio: 180,
    descripcion: "Set de seis vasos de vidrio con diseño vintage",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjNhre0fShDEUYcBBcT0-nigtR_7Y1myW_8evZ8Gr9jV_RUDLrIu49VWbmJgivtuWP7so&usqp=CAU",
    categoria: "Hogar",
    stock: 13,
  },
  {
    id: 21,
    articulo: "Jarra de cristal",
    precio: 250,
    descripcion:
      "Jarra de cristal con capacidad para un litro, ideal para servir bebidas frías",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx7_9DzJEgAXu6_OIRa4AFtyMY8Igs7FnrPJugrrevj0F1f6FtxMvTNWnTHfWgZZ3vG24&usqp=CAU",
    categoria: "Hogar",
    stock: 16,
  },
  {
    id: 22,
    articulo: "Manta de algodón",
    precio: 400,
    descripcion:
      "Manta de algodón suave y ligera, perfecta para el sofá o la cama",
    foto: "https://arredo.vtexassets.com/arquivos/ids/461628-800-auto?v=638159028470570000&width=800&height=auto&aspect=true",
    categoria: "Hogar",
    stock: 19,
  },
  {
    id: 23,
    articulo: "Reloj de pared",
    precio: 600,
    descripcion: "Reloj de pared con diseño minimalista y números grandes",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJkLf7gBqsE2w3Hz1zJlftdw_vWIUNZRf63Wb2KGDQVAVoH3bwVky_q7Sivmgf9haRY8&usqp=CAU",
    categoria: "Decoración",
    stock: 10,
  },
  {
    id: 24,
    articulo: "Organizador de escritorio",
    precio: 350,
    descripcion:
      "Organizador de escritorio con múltiples compartimentos y espacio para celular",
    foto: "https://http2.mlstatic.com/D_NQ_NP_893054-MLA49576901383_042022-O.webp",
    categoria: "Oficina",
    stock: 15,
  },
  {
    id: 25,
    articulo: "Taza de cerámica",
    precio: 150,
    descripcion:
      "Taza de cerámica con diseño de animales y asa en forma de cola",
    foto: "https://s.alicdn.com/@sc04/kf/H024eaf130ffd4dffb5e8938418cc0ba0l.jpg_300x300.jpg",
    categoria: "Hogar",
    stock: 12,
  },
  {
    id: 26,
    articulo: "Planta artificial",
    precio: 200,
    descripcion:
      "Planta artificial de aspecto natural, perfecta para dar un toque de verde a cualquier espacio",
    foto: "https://media.revistaad.es/photos/62feb549de4374fa82c564d5/master/pass/plantas-artificiales-maison-du-monde.png",
    categoria: "Decoración",
    stock: 23,
  },
  {
    id: 27,
    articulo: "Portavelas de cristal",
    precio: 180,
    descripcion:
      "Portavelas de cristal con forma de diamante, ideal para crear un ambiente cálido y acogedor",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTIh4UI4Rxfv-kPSOdjBzKjgblzhF0JihX1A&usqp=CAU",
    categoria: "Decoración",
    stock: 8,
  },
  {
    id: 28,
    articulo: "Bandeja de madera",
    precio: 250,
    descripcion: "Bandeja de madera con acabado envejecido y asas de metal",
    foto: "https://m.media-amazon.com/images/I/915NGuYo6XL._AC_UF894,1000_QL80_.jpg",
    categoria: "Hogar",
    stock: 18,
  },
  {
    id: 29,
    articulo: "Set de escritura",
    precio: 120,
    descripcion:
      "Set de escritura con pluma y portaminas, presentado en estuche de cuero",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx1DhFoob3vz9-Ph8ZBdeWjOvw18yEpwBih5eEtxsxmZBHSwPtx8tbTQA-WfRU8PIMkO8&usqp=CAU",
    categoria: "Oficina",
    stock: 11,
  },
];

export const getProductos = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000);
  });
};

export const getProducto = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.find((producto) => producto.id == id));
    }, 2000);
  });
};

export const getCategoria = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos.filter((producto) => producto.categoria == id));
    }, 2000);
  });
};

