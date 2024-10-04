const url = ‘https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json’
console.log(url);

<footer>
<p>Desenvolvido por Gui Lima</p>
</footer>
<script type=”module” src=”graficos/
informacoesGlobais.js”></script>

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