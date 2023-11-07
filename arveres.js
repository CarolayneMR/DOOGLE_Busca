class Nodin {
    constructor(valor, letras) {
        this.valor = valor;
        this.letras = letras;
        this.esquerda = null;
        this.direita = null;
    }

    buscarAqui(entrada) {
        if (this.letras) {
            for (let i = 0; i < this.letras.length; i++) {
                if (this.letras[i] === entrada) {
                    return this.valor;
                }
            }
        }
        return null;
    }
}


class Arvore {
    constructor() {
        this.raiz = null;
    }

    inserir(valor, letras) {
        const novoNo = new Nodin(valor, letras);

        if (this.raiz === null) {
            this.raiz = novoNo;
        } else {
            this.inserirNo(this.raiz, novoNo);
        }
    }

    inserirNo(raiz, novoNo) {
        if (novoNo.valor < raiz.valor) {
            if (raiz.esquerda === null) {
                raiz.esquerda = novoNo;
            } else {
                this.inserirNo(raiz.esquerda, novoNo);
            }
        } else {
            if (raiz.direita === null) {
                raiz.direita = novoNo;
            } else {
                this.inserirNo(raiz.direita, novoNo);
            }
        }
    }

    buscarLa(no, letra) {
        if (no === null) {
            return null;
        }

        if (no.buscarAqui(letra)) {
            if (this.verificarArveres(no.letras)) {
                return "www.youtube.com/watch?v=j6q4FC_g6d0";
            }
            return no.valor;
        } else {
            const esquerda = this.buscarLa(no.esquerda, letra);
            const direita = this.buscarLa(no.direita, letra);
            return esquerda || direita;
        }
    }

    verificarArveres(letras) {
        for (let i = 0; i < letras.length; i++) {
            if (letras[i] === 'arveres') {
                return true;
            }
        }
        return false;
    }
}

// Restante do seu código permanece igual




var doodle = new Arvore()

//adicionar sitios 
doodle.inserir('facebook', ['face', 'facebook','fa','zuckeberg otario'])
doodle.inserir('uol', ['uo', 'valetudo', 'uol', 'ol', 'bol'])
doodle.inserir('google', ['rival', 'inimigo', 'google', 'mentiroso'])
doodle.inserir('github'['git', 'hub', 'github', 'dighub', 'aquele site'])
doodle.inserir('youtube', ['videos', 'youtube', 'ytb', 'youtub', 'you.be', 'you'])
//arveres = "https://www.youtube.com/watch?v=j6q4FC_g6d0"
doodle.inserir('arveres', ['arvores', 'arveres', 'jesus', 'jardineiro'])

console.log(doodle)

document.getElementById('buscarButton').addEventListener('click', () => {
    const inputValor = document.getElementById('inputValor').value;
    const resultado = document.getElementById('resultado');

    const link = doodle.buscarLa(doodle.raiz, inputValor);
    console.log(link)

    if (link) {
        resultado.textContent = `URL encontrada: ${link}`;
        // Redirecionar para a URL encontrada
        window.location.href = `http://${link}.com`;
    
    } else {
        resultado.textContent = 'Nenhuma URL correspondente encontrada';
    }
});
