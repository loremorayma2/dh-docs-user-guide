import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { locale } = useI18n()

function toLink(slug: string) {
  return `/${locale.value}/${slug}`
}
