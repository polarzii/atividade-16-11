
<script setup>
import { useRouter } from "vue-router";

import FormularioEntrega from "../components/FormularioEntrega.vue";
import { adicionarEntrega } from "../entregas.js";

const router = useRouter();

function receberEntrega(novaEntrega) {
    adicionarEntrega(novaEntrega);
    router.push("/");
}
</script>

<template>
    <FormularioEntrega @adicionar="receberEntrega" />
</template>
