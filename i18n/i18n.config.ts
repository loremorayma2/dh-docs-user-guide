export default defineI18nConfig(() => ({
  legacy: false,
  missingWarn: false, // evita warnings si falta traducción
  messages: {
    en: {
      // Search
      'Search...': 'Search...',
      'Search documentation...': 'Search documentation...',
      'No results found.': 'No results found.',

      // 404
      'This page could not be found.': 'This page could not be found.',

      // Empty page
      'Empty page': 'Empty page',
      'Start writing content': 'Start writing in {fileLink} to see this page taking shape.',

      // TOC
      'On this page': 'On this page',

      // Search command
      'Light': 'Light',
      'Dark': 'Dark',
      'System': 'System',

      // Doc footer
      'Edit this page': 'Edit this page',
      'Back to Top': 'Back to Top',

      // Collapse Code
      'Expand': 'Expand',
      'Collapse': 'Collapse',

      // Language Switcher
      'Language': 'Language',
      'Choose your language': 'Choose your language',

      // Theme Switcher
      'Customize': 'Customize',
      'Pick a style and color for the docs.': 'Pick a style and color for the docs.',
      'Color': 'Color',
      'Radius': 'Radius',
      'Theme': 'Theme',

      // Copy Code
      'Copied to clipboard!': 'Copied to clipboard!',

      // Mermaid
      'Mermaid Chart Error: ': 'Mermaid Chart Error: ',
      'Rendering Chart': 'Rendering Chart',

      // Carbon Ads
      'Please support us by disabling your ad blocker.': 'Please support us by disabling your ad blocker.',

      // Read More
      'Read more at': 'Read more at',

      // Field
      'required': 'required',
    },

    es: {
      // Search
      'Search...': 'Buscar...',
      'Search documentation...': 'Buscar en la documentación...',
      'No results found.': 'No se encontraron resultados.',

      // 404
      'This page could not be found.': 'No se pudo encontrar esta página.',

      // Empty page
      'Empty page': 'Página vacía',
      'Start writing content': 'Empieza a escribir en {fileLink} para ver cómo toma forma esta página.',

      // TOC
      'On this page': 'En esta página',

      // Search command
      'Light': 'Claro',
      'Dark': 'Oscuro',
      'System': 'Sistema',

      // Doc footer
      'Edit this page': 'Editar esta página',
      'Back to Top': 'Volver arriba',

      // Collapse Code
      'Expand': 'Expandir',
      'Collapse': 'Colapsar',

      // Language Switcher
      'Language': 'Idioma',
      'Choose your language': 'Elige tu idioma',

      // Theme Switcher
      'Customize': 'Personalizar',
      'Pick a style and color for the docs.': 'Elige un estilo y color para la documentación.',
      'Color': 'Color',
      'Radius': 'Radio',
      'Theme': 'Tema',

      // Copy Code
      'Copied to clipboard!': '¡Copiado al portapapeles!',

      // Mermaid
      'Mermaid Chart Error: ': 'Error de Mermaid: ',
      'Rendering Chart': 'Renderizando gráfico',

      // Carbon Ads
      'Please support us by disabling your ad blocker.': 'Por favor apóyanos desactivando tu bloqueador de anuncios.',

      // Read More
      'Read more at': 'Leer más en',

      // Field
      'required': 'requerido',
    },
  },
}))
