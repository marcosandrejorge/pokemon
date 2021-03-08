<template>
    <div class="container">
        <Busca @buscar="buscar($event)" />
        <Carrosel @selecionarCarta="selecionarCarta($event)" v-if="isMobile" />
        <GridCartas
            @selecionarCarta="selecionarCarta($event)"
            v-if="!isMobile"
        />
    </div>
</template>

<script>
import mixinCartas from "../mixins/mixinCartas";
import { mapActions } from "vuex";
import Busca from "../components/Busca";
import Carrosel from "../components/Carrosel";
import GridCartas from "../components/GridCartas";
export default {
    mixins: [mixinCartas],
    components: {
        Busca,
        Carrosel,
        GridCartas,
    },
    data: () => ({
        isMobile: false,
    }),
    methods: {
        ...mapActions(["setarObjBusca"]),

        async buscar(nomeBuscar) {
            let objBusca = await this.realizarBusca(nomeBuscar);
            this.setarObjBusca(objBusca?.data);
        },

        selecionarCarta(id) {
            this.$router.push({
                name: "Detalhes",
                params: { id },
            });
        },

        verificarMobile() {
            this.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            );
        },
    },

    mounted() {
        this.verificarMobile();
        window.addEventListener("resize", () => {
            this.verificarMobile();
        });
    },
};
</script>
