<template>
    <div class="container grid" v-if="!carregando">
        <div class="card--img">
            <img :src="carta.images.large" :alt="carta.name" />
        </div>
        <div class="card">
            <div class="text">
                <p><b>{{ $t("message.nome") }}:</b> {{ carta.name }}</p>
                <p><b>{{ $t("message.id") }}:</b> {{ carta.id }}</p>
                <p><b>{{ $t("message.tipos") }}:</b></p>
                <ul>
                    <li v-for="(tipo, index) in carta.types" :key="index">
                        {{ tipo }}
                    </li>
                </ul>
                <p><b>{{ $t("message.resistencias") }}:</b></p>
                <ul>
                    <li
                        v-for="(resistencia, index) in carta.resistances"
                        :key="index"
                    >
                        <p>
                            {{ resistencia.type }}
                            <span class="badge">{{ resistencia.value }}</span>
                        </p>
                    </li>
                </ul>
                <p><b>{{ $t("message.fraquezas") }}:</b></p>
                <ul>
                    <li v-for="(fraqueza, index) in carta.weaknesses" :key="index">
                        <p>
                            {{ fraqueza.type }}
                            <span class="badge">{{ fraqueza.value }}</span>
                        </p>
                    </li>
                </ul>
                <p><b>{{ $t("message.ataques") }}:</b></p>

                <button
                    v-for="(ataque, index) in carta.attacks"
                    :key="index"
                    class="btn--ataque"
                    @click="selecionarAtaque(ataque)"
                >
                    {{ ataque.name }}
                </button>
            </div>
        </div>

        <ModalDetalhesAtaque
            v-if="mostrarModal"
            :mostrarModal="mostrarModal"
            :ataque="ataqueSelecionado"
            @fecharModal="fecharModal"
        />
    </div>
</template>

<script>
import ModalDetalhesAtaque from "../components/ModalDetalhesAtaque";
import mixinCartas from "../mixins/mixinCartas";
export default {
    mixins: [mixinCartas],
    props: {
        id: {
            type: String,
            require: true,
        },
    },
    components: {
        ModalDetalhesAtaque,
    },
    data: () => ({
        carta: null,
        ataqueSelecionado: null,
        mostrarModal: false,
        carregando: true,
    }),
    methods: {
        selecionarAtaque(ataque) {
            this.ataqueSelecionado = ataque;
            this.mostrarModal = true;
        },
        fecharModal() {
            this.mostrarModal = false;
        }
    },
    async mounted() {
        this.carta = await this.retornarCartaPorId(this.id);
        console.log(this.carta.images.small);
        this.carregando = false;
    },
};
</script>
