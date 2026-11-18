
<script setup>
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";

import {
    entregas,
    alternarFeita,
    apagarEntrega
} from "../entregas.js";

import {
    formatarData,
    nomearTipo
} from "../agenda.js";

const route = useRoute();
const router = useRouter();

const entrega = computed(function () {
    const id = Number(route.params.id);

    return entregas.value.find(function (item) {
        return item.id === id;
    });
});

function voltar() {
    router.back();
}

function marcarFeita() {
    if (entrega.value) {
        alternarFeita(entrega.value);
    }
}

function apagar() {
    if (entrega.value) {
        apagarEntrega(entrega.value);
        router.replace("/");
    }
}
</script>

<template>
    <section
        v-if="entrega"
        class="cartao-modulo detalhes-entrega"
        :data-tipo="entrega.tipo"
    >
        <h2>{{ entrega.materia }}</h2>

        <p>
            Tipo:
            <span class="tag">{{ nomearTipo(entrega.tipo) }}</span>
        </p>

        <p>
            Data:
            <strong>{{ formatarData(entrega.data) }}</strong>
        </p>

        <p>
            Situação:
            <strong>{{ entrega.feita ? "Feita" : "Pendente" }}</strong>
        </p>

        <div class="botoes">
            <button
                type="button"
                class="btn-padrao"
                @click="voltar"
            >
                Voltar
            </button>

            <button
                type="button"
                class="btn-padrao"
                @click="marcarFeita"
            >
                {{ entrega.feita ? "Reabrir" : "Marcar como feita" }}
            </button>

            <button
                type="button"
                class="btn-padrao"
                @click="apagar"
            >
                Apagar
            </button>
        </div>
    </section>

    <section v-else class="cartao-modulo">
        <h2>Entrega não encontrada</h2>

        <button
            type="button"
            class="btn-padrao"
            @click="router.push('/')"
        >
            Voltar para agenda
        </button>
    </section>
</template>
