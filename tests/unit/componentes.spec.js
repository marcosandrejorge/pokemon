import { mount } from '@vue/test-utils'
import ModalDetalhesAtaque from '@/components/ModalDetalhesAtaque.vue'
import Carta from '@/components/Carta.vue'
import i18n from '@/translation/i18nVue'
const ataque = {
    convertedEnergyCost: '3',
    name: 'Teste',
    damage: '-20',
    text: 'Testando'
}
const carta = {
    id: 'abc-123',
    images: {
        small: 'image.png'
    },
    name: 'Teste',
    types: ['teste1', 'teste2']
}

describe('Testando componentes', () => {
    it('Componente de ModalDetalhesAtaque', () => {
        const wrapper = mount(ModalDetalhesAtaque, {
            i18n, propsData: {
                ataque
            }
        });
        Object.keys(ataque).forEach(key => {
            expect(wrapper.vm._props.ataque[key]).toMatch(ataque[key])
        })
    })
    it('Componente de Carta', () => {
        const wrapper = mount(Carta, {
            i18n, propsData: {
                carta
            }
        });
        expect(wrapper.vm._props.carta).toEqual(expect.objectContaining(carta))
    })
})
