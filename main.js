const url = ‘https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json’
console.log(url);



async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = res.json()
    console.log(dados);
    }

    const url = ‘https://raw.githubusercontent.com/
    guilhermeonrails/api/main/dados-globais.json’

async function visualizarInformacoesGlobais() {
const res = await fetch(url)
const dados = res.json()
console.log(dados);
}
visualizarInformacoesGlobais()

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    }
