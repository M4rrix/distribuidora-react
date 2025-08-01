Distribuidora El Sol

🛒 Ecommerce creado durante la cursada de Desarrollo Fullstack de la UTN.

Tecnologías y herramientas

React con Vite para un arranque ultrarrápido

React Router DOM para la gestión de rutas

Firebase (Auth y Firestore) para usuarios y datos

Context API para carrito y autenticación

CSS 

Descripción:

Proyecto de ecommerce que incluye:

Home: listado de 4 productos, mostrando nombre, precio, SKU y descripción.

Detalle de producto: vista con nombre, descripción, precio y SKU.

Registro: formulario con campos Nombre, Apellido, Email y Contraseña (persistencia con Firebase).

Login: autenticación por Email y Contraseña (Firebase Auth).

Carrito de Compras: agregar/remover productos diferenciados por marca, persistencia en LocalStorage.


Instalación

Clona este repositorio:

git clone clone https://github.com/M4rrix/distribuidora-react.git
cd distribuidora-del-sol

Instala dependencias:

npm install

Configura Firebase:

Crea un proyecto en Firebase

Habilita Auth (Email/Password) y Firestore

Copia tus credenciales al archivo src/firebase.js

Ejecuta la app en modo desarrollo:

npm run dev

Abre http://localhost:5173 para ver la app.

Uso

En Home: filtra por categorías, busca por texto.

Regístrate y/o inicia sesión.

En Carrito: ajusta cantidades o elimina productos, y consulta por WhatsApp.

Autora

Maria Camaña
