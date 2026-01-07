export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Digital Harbor - DOT',
      description: 'A professional documentation template designed to maintain clarity, organization, and consistency across all technology projects.',
    },
    theme: {
      customizable: false,
      color: 'slate',
      radius: 1,
    },
    header: {
      title: 'Digital Harbor - DOT',
      showTitle: true,
      darkModeToggle: true,
      languageSwitcher: {
        enable: true,
        triggerType: 'icon',
        icon: 'lucide:translate',
        dropdownType: 'select',
      },

      logo: {
        light: '/logo-light.svg',
        dark: '/logo-dark.svg'
      },
      nav: [],

    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadcrumb: true,
      showTitle: true,
      backToTop: false, 
    },
    footer: {
      credits: 'Digital Harbor – DOT © 2025',
      links: [
        { icon: 'lucide:twitter', to: 'https://x.com/Digital_Harbor', target: '_blank' },
        { icon: 'lucide:instagram', to: 'https://www.instagram.com/digitalharborbolivia/?hl=es', target: '_blank' },
        { icon: 'lucide:linkedin', to: 'https://www.linkedin.com/company/digitalharborbolivia', target: '_blank' },
        { icon: 'lucide:facebook', to: 'https://www.facebook.com/digitalharborBO', target: '_blank' }
      ]
    },

    toc: {
      enable: true,
      links: [ ],
    },
    search: {
      enable: true,
      inAside: false,
    },
   
   
  }
});