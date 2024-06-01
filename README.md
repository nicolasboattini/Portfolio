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


<br><br>
## Usar este proyecto como template 📄
Es importante respetar el nombre de las variables, así como el nombre y la ubicación de los archivos para garantizar el correcto funcionamiento del proyecto. Los cambios en estos aspectos pueden causar errores en el código y afectar la funcionalidad del proyecto en su conjunto. Mantener una consistencia en la nomenclatura y la organización de los archivos facilita la comprensión y el mantenimiento del código, además de evitar posibles conflictos y confusiones durante el desarrollo.


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
    stack: string[];

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
    cv: "/profile/CV.pdf"
  },
  skills: {
    stack: ['tech1', 'tech2'],
  },
  profilePicture: 'fotoDePerfil.png'
};

export default dataProfile;
```

También debes reemplazar estos archivos. Si deseas cambiarles el nombre, asegúrate de hacerlo primero en el archivo `dataProfile.ts`.
```
public
└── profile
    ├── CV.pdf
    └── fotoDePerfil.png
```

### Personalización del Proyectos 🚀

He creado un archivo que contiene la información sobre los proyectos que se muestran en el portafolio. Este archivo se encuentra en la carpeta `data` y se llama `dataProjects.ts`. A continuación se muestra un ejemplo genérico de cómo debería estructurarse este archivo para incluir información sobre tus propios proyectos:

```typescript
interface Project {
  id: string;
  title: string;
  description: string;
  moreInfo: string[];
  techs: string[];
  linkGithub : string;
  cantScreenshots: {
    cellphone: number;
    tablet: number;
    desktop: number;
  };
}

const dataProjects: Project[] = [
  {
    id: '1',
    title: 'Nombre del Proyecto',
    description: 'Descripción del proyecto...',
    moreInfo:[
      'Información adicional sobre el proyecto...',
      'Otra información relevante...',
    ],
    techs: ['Tech1', 'Tech2', '...'],
    linkGithub: 'Enlace al repositorio en GitHub',
    cantScreenshots: {
      cellphone: 0,
      tablet: 0,
      desktop: 0,
    }
  },
];

export default dataProjects;
```

También debes reemplazar estos archivos. Si deseas cambiarles el nombre, asegúrate de hacerlo primero en el archivo `dataProjects.ts`.
```
public
├── profile
│   ├── CV.pdf
│   └── fotoDePerfil.png
└── projects
    └── [projectID]
        ├── frontPage.png
        └── screenshots
            ├── cellphone
            │   └── 1.png
            ├── tablet
            │   └── 1.png
            └── desktop
                └── 1.png
```
Recuerda que, si deseas añadir varias capturas de pantalla, debes especificar cuántas son en el archivo `dataProjects.ts`.

#### 🚨IMPORTANTE🚨 
Si no aparecen las tecnologías, habilidades o redes sociales como iconos, es posible que falten o que el icono de la página no esté funcionando correctamente. En ese caso, agrega un nuevo icono o reemplaza el que esté causando conflictos en `IconosTechs.tsx`, `SocialNetworkIcon.tsx` y `Techs.tsx`.



### Capturas de pantalla 📸

<img src='public/CapturaDePantalla1.png' alt='Captura de Pantalla 1'>
