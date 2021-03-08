import Vue from 'vue'
import VueI18n from 'vue-i18n'
import ptbr from './pt-br'
Vue.use(VueI18n)

export default new VueI18n({
    locale: 'pt-br',
    messages: {
        'pt-br': ptbr
    }
})