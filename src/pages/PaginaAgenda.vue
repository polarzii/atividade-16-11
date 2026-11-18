
<script setup>
import { ref, computed } from "vue";

import ResumoAgenda from "../components/ResumoAgenda.vue";
import ItemEntrega from "../components/ItemEntrega.vue";

import {
    entregas,
    alternarFeita,
    apagarEntrega
} from "../entregas.js";

import {
    ordenarPorData,
    filtrarPendentes,
    passaNoFiltro,
    montarTextoDaProxima,
    encontrarProxima
} from "../agenda.js";

const tipoEscolhido = ref("tudo");

const entregasFiltradas = computed(function () {
    const filtradas = entregas.value.filter(function (entrega) {
        return passaNoFiltro(entrega, tipoEscolhido.value);
    });

    return ordenarPorData(filtradas);
});

const totalPendentes = computed(function () {
    return filtrarPendentes(entregas.value).length;
});

const proximaEntrega = computed(function () {
    return montarTextoDaProxima(entregas.value);
});

const proxima = computed(function () {
    return encontrarProxima(entregas.value);
});

const destinoProxima = computed(function () {
    if (!proxima.value) {
        return "";
    }

    return "/entrega/" + proxima.value.id;
});
</script>

<template>
    <ResumoAgenda
        class="resumo"
        :pendentes="totalPendentes"
        :proxima="proximaEntrega"
        :destino="destinoProxima"
    />

    <section class="cartao-modulo proximas-entregas">
        <h2>Próximas entregas</h2>

        <p>
            <label for="filtro-categoria">Mostrar</label>

            <select
                id="filtro-categoria"
                v-model="tipoEscolhido"
            >
                <option value="tudo">Tudo</option>
                <option value="prova">Só provas</option>
                <option value="trabalho">Só trabalhos</option>
                <option value="apresentacao">Só apresentações</option>
            </select>
        </p>

        <ul class="lista">
            <ItemEntrega
                v-for="entrega in entregasFiltradas"
                :key="entrega.id"
                :entrega="entrega"
                @alternar="alternarFeita"
                @apagar="apagarEntrega"
            />
        </ul>

        <p v-if="entregasFiltradas.length === 0" class="lista-vazia">
            Nada por aqui.
        </p>
    </section>
</template>
