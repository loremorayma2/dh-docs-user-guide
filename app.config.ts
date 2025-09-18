import { TruckElectricIcon } from "lucide-vue-next";

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
        enable: false,
        triggerType: 'icon',
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
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Digital Harbor – DOT © 2025',
      links: [
        {
          icon: 'lucide:twitter',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        },
        {
          icon: 'lucide:instagram',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        },
        {
          icon: 'lucide:linkedin',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        },
        {
          icon: 'lucide:facebook',
          to: 'https://github.com/ZTL-UwU/shadcn-docs-nuxt',
          target: '_blank',
        }
      ],
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