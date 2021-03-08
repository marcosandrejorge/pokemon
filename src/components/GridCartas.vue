<template>
    <div v-if="retornarCartas.length > 0" class="grid" style="margin-top:20px">
        <template v-for="carta in retornarCartas">
            <Carta
                :key="carta.id"
                :carta="carta"
                @selecionarCarta="selecionarCarta($event)"
            />
        </template>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import Carta from "./Carta";
export default {
    components: {
        Carta,
    },
    data: () => ({}),
    computed: {
        ...mapGetters(["retornarCartas"]),
    },
    methods: {
        selecionarCarta(id) {
            this.$emit("selecionarCarta", id);
        },
    },
};
</script>
