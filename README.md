# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

------------------------ GUIA DE FUNCIONAMIENTO ------------------------ 

----------- REGISTRO -----------

Para empezar a usar la web debes crear una cuenta:

Introduce un nombre de usuario
Introduce una contraseña
(Opcional) Introduce la clave de administrador

Si introduces la clave correcta, tu cuenta será de tipo administrador.(Por defecto 12345)
Si no, será una cuenta normal.

----------- INICIO DE SESIÓN ----------- 

Introduce tu usuario y contraseña
Si son correctos, accederás a la página principal

Si no estás logueado, no podrás ver el contenido de la web.



----------- USUARIO NORMAL -----------

Un usuario normal puede:

Ver todos los posts
Entrar en el detalle de cada post
Navegar por la web

Un usuario normal NO puede:

Crear posts
Editar posts
Eliminar posts
Acceder al gestor de publicaciones

----------- USUARIO ADMINISTRADOR -----------

Un administrador tiene acceso completo:

Puede:

Crear nuevos posts
Editar posts existentes
Eliminar posts
Acceder al gestor de publicaciones

Además:

Puede subir una imagen o usar un enlace
Debe rellenar correctamente los campos del formulario

----------- POSTS -----------

En la página principal:

Se muestran todos los posts
Puedes hacer click en uno para ver su contenido completo

Cada post incluye:

Título
Fecha 
Contenido
Imagen
CREAR Y EDITAR POSTS (ADMIN)

Al crear o editar un post:

No se permiten campos vacíos
Debes añadir una imagen (archivo o URL, pero no ambas)
Si la URL no es válida, se mostrará un error
La fecha por defecto es la actual

Si hay errores:

No se guardará el post

----------- CERRAR SESIÓN -----------

En la parte superior verás tu usuario
Pulsa el botón “Logout” para cerrar sesión
Serás redirigido al login

----------- CONTROL DE ACCESO -----------

Si no estás logueado → se te redirige al login
Si no eres admin → no puedes acceder a funciones de administración

