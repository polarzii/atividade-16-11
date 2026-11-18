
import { ref, watch } from "vue";

const CHAVE = "agenda-de-entregas";

const exemplos = [
    {
        id: 1,
        materia: "Matemática",
        tipo: "prova",
        data: "2026-11-18",
        feita: false
    },
    {
        id: 2,
        materia: "História",
        tipo: "trabalho",
        data: "2026-11-25",
        feita: false
    },
    {
        id: 3,
        materia: "Português",
        tipo: "trabalho",
        data: "2026-11-10",
        feita: true
    },
    {
        id: 4,
        materia: "Inglês",
        tipo: "apresentacao",
        data: "2026-11-20",
        feita: false
    }
];

function carregarEntregas() {
    const dadosSalvos = localStorage.getItem(CHAVE);

    if (dadosSalvos === null) {
        return exemplos;
    }

    try {
        const dados = JSON.parse(dadosSalvos);

        if (Array.isArray(dados)) {
            return dados;
        }

        return exemplos;
    } catch {
        return exemplos;
    }
}

function salvarEntregas(lista) {
    localStorage.setItem(CHAVE, JSON.stringify(lista));
}

export const entregas = ref(carregarEntregas());

watch(
    entregas,
    function (novaLista) {
        salvarEntregas(novaLista);
    },
    { deep: true }
);

export function adicionarEntrega(novaEntrega) {
    entregas.value.push(novaEntrega);
}

export function alternarFeita(entrega) {
    const encontrada = entregas.value.find(function (item) {
        return item.id === entrega.id;
    });

    if (encontrada) {
        encontrada.feita = !encontrada.feita;
    }
}

export function apagarEntrega(entrega) {
    entregas.value = entregas.value.filter(function (item) {
        return item.id !== entrega.id;
    });
}
