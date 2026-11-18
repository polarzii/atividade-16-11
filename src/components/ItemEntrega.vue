
<script setup>
import { formatarData, nomearTipo } from "../agenda.js";
import { RouterLink } from "vue-router";

defineProps({
    entrega: Object
});

const emit = defineEmits(["alternar", "apagar"]);
</script>

<template>
    <li
        class="entrega item-lista"
        :class="{ feita: entrega.feita }"
        :data-tipo="entrega.tipo"
    >
        <div>
            <span class="data-texto">
                {{ formatarData(entrega.data) }}
            </span>

            <strong>
                <RouterLink
                    :to="`/entrega/${entrega.id}`"
                    class="materia"
                >
                    {{ entrega.materia }}
                </RouterLink>
            </strong>

            <span class="tag">
                {{ nomearTipo(entrega.tipo) }}
            </span>
        </div>

        <div class="botoes">
            <button
                v-if="entrega.feita"
                type="button"
                class="btn-padrao"
                @click="emit('alternar', entrega)"
            >
                Reabrir
            </button>

            <button
                v-else
                type="button"
                class="btn-padrao"
                @click="emit('alternar', entrega)"
            >
                Feita
            </button>

            <button
                type="button"
                class="btn-padrao"
                @click="emit('apagar', entrega)"
            >
                Apagar
            </button>
        </div>
    </li>
</template>
