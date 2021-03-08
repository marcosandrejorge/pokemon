<template>
    <div :class="{'card--grid':!cartaCarrosel, 'card--grid-carrosel':cartaCarrosel}" @click="selecionarCarta">
        <img :src="carta.images.small" :alt="carta.name" />

        <div class="text">
            <p><b>{{ $t("message.nome") }}:</b> {{ carta.name }}</p>
            <p><b>{{ $t("message.id") }}:</b> {{ carta.id }}</p>
            <p><b>{{ $t("message.tipos") }}:</b></p>
            <ul>
                <li v-for="(tipo, index) in carta.types" :key="index">
                    {{ tipo }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        carta: {
            type: Object,
            require: true,
        },
        cartaCarrosel: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        selecionarCarta() {
            this.$emit("selecionarCarta", this.carta.id);
        },
    },
};
</script>
