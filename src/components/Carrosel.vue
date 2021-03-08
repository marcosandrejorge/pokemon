<template>
    <div v-if="retornarCartas.length > 0" class="grid--carrosel" style="margin-top:20px; margin-bottom:60px">
        <Carta
            :carta="retornarCarta"
            @selecionarCarta="selecionarCarta($event)"
            :cartaCarrosel="true"
        />
        <p>{{ $t("message.carta") }} {{ index + 1 }} {{ $t("message.de") }} {{ retornarObjBusca.totalCount }}</p>
        <button class="btn--carrosel--1" @click="anterior">
            {{ $t("message.anterior") }}
        </button>
        <button class="btn--carrosel--2" @click="proximo">
            {{ $t("message.proximo") }}
        </button>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Carta from "./Carta";
export default {
    components: {
        Carta,
    },
    data: () => ({
        index: 0,
    }),
    computed: {
        ...mapGetters(["retornarCartas", "retornarObjBusca"]),

        retornarCarta() {
            return this.retornarCartas[this.index];
        },
    },

    methods: {
        anterior() {
            let qtdCartas = this.retornarObjBusca.count;

            if (this.index == 0) {
                this.index = qtdCartas - 1;
                return;
            }

            this.index--;
        },
        proximo() {
            let qtdCartas = this.retornarObjBusca.count;

            if (this.index == qtdCartas - 1) {
                this.index = 0;
                return;
            }

            this.index++;
        },
        selecionarCarta(id) {
            this.$emit("selecionarCarta", id);
        },
    },
};
</script>
