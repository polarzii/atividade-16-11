
<script setup>
import { RouterLink } from "vue-router";

defineProps({
    pendentes: Number,
    proxima: String,
    destino: String
});
</script>

<template>
    <section class="cartao-modulo resumo">
        <h2>Resumo</h2>

        <p>
            Pendentes
            <strong>{{ pendentes }}</strong>
        </p>

        <p>
            Próxima entrega

            <strong>
                <RouterLink
                    v-if="destino"
                    :to="destino"
                    class="materia"
                >
                    {{ proxima }}
                </RouterLink>

                <span v-else>{{ proxima }}</span>
            </strong>
        </p>
    </section>
</template>
