<template>
    <div class="modal" :class="{'ativa': mostrarModal}">
        <div class="corpo-modal" :class="{'ativa': mostrarModal}">
            <h4>{{ $t("message.tituloDetalhe") }}</h4>
            <p><b>{{ $t("message.custoMana") }}:</b> <span id="custo-mana">{{ataque.convertedEnergyCost}}</span></p>
            <p><b>{{ $t("message.nome") }}:</b> <span id="nome">{{ataque.name}}</span></p>
            <p><b>{{ $t("message.dano") }}:</b> <span id="dano">{{ataque.damage}}</span></p>
            <p><b>{{ $t("message.descricao") }}:</b> <span id="descricao">{{ataque.text}}</span></p>
        </div>
        <label class="fechar-modal" for="modal_ataque" @click="fecharModal"></label>
    </div>
</template>

<script>
export default {
    props: {
        mostrarModal: {
            type: Boolean,
            default: false
        },
        ataque: {
            type: Object,
            require: true,
        },
    },
    methods: {
        fecharModal() {
            this.$emit('fecharModal')
        }
    }
};
</script>
