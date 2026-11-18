<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function voltarPagina() {
    router.back();
}

function avancarPagina() {
    router.forward();
}
</script>

<template>
    <header class="topo">
        <h1>Agenda de entregas</h1>
        <p>Provas, trabalhos e apresentações em um só lugar.</p>

        <nav class="menu">
            <button
                type="button"
                @click="voltarPagina"
                aria-label="Voltar"
            >
                ←
            </button>

            <RouterLink to="/" exact-active-class="ativo">
                Agenda
            </RouterLink>

            <RouterLink to="/nova" active-class="ativo">
                Nova entrega
            </RouterLink>

            <button
                type="button"
                @click="avancarPagina"
                aria-label="Avançar"
            >
                →
            </button>
        </nav>
    </header>

    <main class="container">
        <RouterView />
    </main>

    <footer class="rodape">
        <p>Feito por Kimmy</p>
    </footer>
</template>

<style scoped>
.rodape {
    text-align: center;
    padding: 24px 16px;
    margin-top: 40px;
    color: #666;
    font-size: 0.9rem;
}
</style>