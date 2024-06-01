<h1 align='center'>🌟 Portfolio 💼🖥️🌟</h1>

> Práctica de TypeScript, React, Tailwind CSS. ✨

🎯 **Objetivo:** Desarrollar una aplicación Portfolio para mostrar proyectos personales.

Este proyecto ha sido desarrollado con el objetivo de exhibir mis proyectos personales. No obstante, también se proporciona como una plantilla que puede ser utilizada por otros para mostrar sus propios trabajos, bajo la condición de que se me mencione como el autor original y se respeten mis derechos de autor.

### Instalación y ejecución del proyecto (React) 🛠️💻

1. Abre la consola en la ubicación deseada para clonar el repositorio.

2. Clona este repositorio en tu máquina local utilizando Git:

    ```bash
    git clone https://github.com/Schugu/portfolio.git
    ```

3. Navega al directorio del proyecto clonado:

    ```bash
    cd portfolio
    ```

4. Instala las dependencias del front end utilizando npm o yarn:

    ```bash
    npm install
    # o
    yarn
    ```

5. Inicia el servidor de desarrollo del proyecto utilizando npm:

    ```bash
    npm run dev
    ```

6. Una vez que el servidor de desarrollo del proyecto esté en funcionamiento, abre tu navegador web y navega a la dirección local para ver el proyecto en acción.

### Personalización y comprensión del proyecto 🎨🧠

Para personalizar y comprender el proyecto, sigue estas instrucciones:

- Si deseas modificar o entender cómo funciona el proyecto, revisa los archivos y carpetas dentro de `src`. 
    - La lógica y la apariencia de las páginas se encuentran en la carpeta `pages`.
    - Los componentes individuales se encuentran en la carpeta `components`.
    - El sistema de rutas se encuentra en el archivo `App.tsx`.

### Personalización del perfil 🧑‍💻

He creado un archivo que se puede editar para agregar información personalizada al portafolio. Este archivo se encuentra en la carpeta `data` y se llama `dataProfile.ts`. A continuación se muestra un ejemplo genérico de cómo debería estructurarse este archivo para que puedas incluir tu propia información:

```typescript
interface Profile {
  fullname: string;
  dev: string;
  years: string;
  nationality: string;
  linksSocialNetworks: {
    github: string;
    linkedin: string;
    instagram: string;
    freecodecamp: string;
    email: string;
    cv: string;
  };
  skills: {
    frontEnd: string[];
    dataBase: string[];
    versionControl: string[];
  };
  profilePicture: string;
}

const dataProfile: Profile = {
  fullname: 'Tu Nombre Completo',
  dev: 'Tu Rol de Desarrollador',
  years: 'Tu Edad',
  nationality: 'Tu Nacionalidad',
  linksSocialNetworks: {
    github: "https://github.com/tu-usuario",
    linkedin: "https://www.linkedin.com/in/tu-perfil/",
    instagram: "https://www.instagram.com/tu-usuario/",
    freecodecamp: "https://www.freecodecamp.org/tu-usuario",
    email: "mailto:tu-email@ejemplo.com",
    cv: "/CV/CV.pdf"
  },
  skills: {
    frontEnd: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'],
    dataBase: ['MongoDB', 'Firebase'],
    versionControl: ['Git', 'GitHub']
  },
  profilePicture: 'fotoDePerfil.png'
};

export default dataProfile;
```

Puedes reemplazar los valores de ejemplo con tu propia información para personalizar tu portafolio.


### Capturas de pantalla 📸

<img src='public/CapturaDePantalla1.png' alt='Captura de Pantalla 1'>
