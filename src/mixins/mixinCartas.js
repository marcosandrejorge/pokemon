import { mapGetters } from 'vuex'
import axios from '../plugins/axios'
export default {
    data: () => ({
        url_base: 'https://api.pokemontcg.io/v2'
    }),
    computed: {
        ...mapGetters(['retornarCartas'])
    },
    methods: {
        async realizarBusca(busca = null, pagina = null, qtdPorPagina = 250, ordenacao = 'name') {
            let urlExtra = "?";
            urlExtra += busca ? `q=name:${busca}&` : '';
            urlExtra += pagina ? `page=${pagina}&` : '';
            urlExtra += `orderBy=${ordenacao}`;
            urlExtra += `&pageSize=${qtdPorPagina}`

            return await axios.get(
                `${this.url_base}/cards${urlExtra}`
            );
        },
        async realizarBuscaPorID(id) {
            let carta = await axios.get(
                `${this.url_base}/cards/${id}`
            );

            return carta?.data?.data;
        },
        async retornarCartaPorId(id) {
            if (!this.retornarCartas?.length) return await this.realizarBuscaPorID(id);

            let carta = this.retornarCartas.find(carta => {
                return carta.id == id
            })

            return carta ?? await this.realizarBuscaPorID(id);
        }
    }
}