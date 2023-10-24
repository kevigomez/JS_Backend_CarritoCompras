document.addEventListener('DOMContentLoaded', function() {
  const productos = [
 
  ];

  const Lista = document.getElementById("lista-productos");
  const Producto = document.getElementById("formulario-producto");
  const Total = document.getElementById("total");

  function mostrarProductos() {
      Lista.innerHTML = "";

      let total = 0;

      productos.forEach((producto, index) => {
          if (producto != null) {
              const li = document.createElement("li");
              li.textContent = `${producto.nombre} - ${producto.categoria} - $${producto.precio}`;

              const botonEliminar = document.createElement("button");
              botonEliminar.textContent = "Eliminar";
              botonEliminar.addEventListener("click", () => eliminarProducto(index));

              const botonModificar = document.createElement("button");
              botonModificar.textContent = "Modificar";
              botonModificar.addEventListener("click", () => modificarProducto(index));

              li.appendChild(botonEliminar);
              li.appendChild(botonModificar);
              Lista.appendChild(li);

              total += producto.precio;
          }
      });

      Total.textContent = `Total: $${total}`;
  }

  function agregarProducto(event) {
      event.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const categoria = document.getElementById("categoria").value;
      const precio = parseFloat(document.getElementById("precio").value);

      const nuevoProducto = { nombre, categoria, precio };
      productos.push(nuevoProducto);

      mostrarProductos();

      document.getElementById("nombre").value = "";
      document.getElementById("categoria").value = "";
      document.getElementById("precio").value = "";
  }

  function eliminarProducto(index) {
      productos.splice(index, 1);
      mostrarProductos();
  }

  function modificarProducto(index) {
      const nombre = prompt("Ingrese el nuevo nombre:");
      const categoria = prompt("Ingrese la nueva categoría:");
      const precio = parseFloat(prompt("Ingrese el nuevo precio:"));

      if (nombre !== null && categoria !== null && !isNaN(precio)) {
          productos[index] = { nombre, categoria, precio };
          mostrarProductos();
      }
  }

  function calcularTotal() {
      let total = 0;

      productos.forEach(producto => {
          if (producto != null) {
              total += producto.precio;
          }
      });

      Total.textContent = `Total: $${total}`;
  }

  Producto.addEventListener("submit", agregarProducto);

  mostrarProductos();
});
