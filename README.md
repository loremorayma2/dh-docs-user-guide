# 📘 Digital Harbor – Documentation Template

Bienvenido al **Digital Harbor Documentation Template**, un proyecto open-source que ofrece una base sólida y profesional para construir documentación clara, organizada y consistente en proyectos tecnológicos.  

Este template está **basado en Nuxt Content** y toma como referencia estilos de **shadcn-docs** para proporcionar un diseño moderno, adaptable y fácil de mantener.

---

## 🚀 Características

- 📂 **Organización estructurada** de la documentación con `nuxt-content`.  
- 🎨 **Estilo profesional y personalizable**, adaptado a la línea visual de Digital Harbor.  
- 🧭 **Navegación dinámica y clara** para mejorar la experiencia de lectura.  
- ⚡ **Rápido y ligero**, optimizado para web moderna.  
- 🔓 **Open Source**, listo para extender, colaborar y adaptar a diferentes proyectos.  

---

## 📂 Estructura del proyecto

```bash
content/
├─ index.md          
├─ getting-started/  
│  ├─ introduction.md
│  ├─ installation.md
├─ guides/          
│  ├─ configuration.md
│  ├─ customization.md
└─ blog/             


⚙️ Requisitos previos

Node.js
 >= 18

pnpm
 o npm

🛠️ Instalación y uso

Clonar el repositorio

git clone https://github.com/digital-harbor/docs-template.git
cd docs-template


Instalar dependencias

pnpm install
# o
npm install


Iniciar el entorno de desarrollo

pnpm dev


Abrir en el navegador

http://localhost:3000


🎨 Personalización

Modifica la portada en content/index.md.

Cambia la configuración global en app.config.ts.

Agrega tu logo o imágenes en la carpeta public/.

Usa componentes de estilo (::hero, ::div, ::card) para enriquecer la documentación.

Configura la navegación a través del frontmatter (title, navigation: true/false).

