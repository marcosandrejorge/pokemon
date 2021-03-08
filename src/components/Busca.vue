<template>
    <div>
        <input
            type="text"
            @keyup.enter.prevent="buscar"
            v-model="busca"
            id="campo-busca"
            class="input-buscar"
        />
        <button id="btn-buscar" @click="buscar" class="btn--buscar">
            {{ $t("message.buscar") }}
        </button>
    </div>
</template>
<script>
export default {
    data: () => ({
        busca: "",
    }),
    methods: {
        buscar() {
            this.$emit("buscar", this.busca);
        },
    },
};
</script>

<style lang="scss"></style>
