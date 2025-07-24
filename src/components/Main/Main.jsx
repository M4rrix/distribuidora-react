 <main>
        <section id="categorias">
          <!--  <h2>Categorías</h2> -->
            <div class="categorias-container">
                <button id="btn-todos" class="activo" onclick="filtrarPorCategoria('todos', this)">Todos</button>
                <button id="btn-papel" onclick="filtrarPorCategoria('Papel Higiénico', this)">Papel Higiénico</button>
                <button id="btn-plasticos" onclick="filtrarPorCategoria('Plásticos', this)">Plásticos</button>
                <button id="btn-desinfectantes" onclick="filtrarPorCategoria('Desinfectantes', this)">Desinfectantes</button>
            </div>
        </section>

        <section id="productos">
           <!-- <h2>Productos</h2> -->
               <!-- Buscador de productos -->
            <div class="buscador-container">
                <input type="text" id="buscador" placeholder="Buscar productos...">
                <div id="sugerencias" class="sugerencias-container"></div>
            </div>
            <div class="productos-container">
                <!-- Aquí se cargarán los productos dinámicamente -->
            </div>
        </section>
        
        <section id="carrito" class="carrito">
            <h2><i class="fas fa-shopping-cart fa-2x"></i></h2>
            <div class="carrito-container"></div>
            <!-- Botón de WhatsApp -->
    <button class="btn-whatsapp" onclick="enviarWhatsapp()">Consultar por WhatsApp</button>
        </section>
    </main>