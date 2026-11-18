
export function formatarData(data) {
    const partes = data.split("-");
    return partes[2] + "/" + partes[1];
}

export function nomearTipo(tipo) {
    if (tipo === "prova") {
        return "Prova";
    }

    if (tipo === "trabalho") {
        return "Trabalho";
    }

    return "Apresentação";
}

export function ordenarPorData(entregas) {
    return [...entregas].sort(function (a, b) {
        return a.data.localeCompare(b.data);
    });
}

export function filtrarPendentes(entregas) {
    return entregas.filter(function (entrega) {
        return !entrega.feita;
    });
}

export function passaNoFiltro(entrega, tipoEscolhido) {
    return tipoEscolhido === "tudo" ||
        entrega.tipo === tipoEscolhido;
}

export function encontrarProxima(entregas) {
    const pendentes = ordenarPorData(filtrarPendentes(entregas));

    return pendentes[0];
}

export function montarTextoDaProxima(entregas) {
    const proxima = encontrarProxima(entregas);

    if (!proxima) {
        return "Nada pendente";
    }

    return proxima.materia + " — " + formatarData(proxima.data);
}
