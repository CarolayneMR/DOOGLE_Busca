class Nodin {
    constructor(valor) {
        this.valor = valor;
        this.esquerda = null;
        this.direita = null;
    }

    buscarAqui(entrada){
       // return entrada.includes(this.valor) ? this.valor : null;
        return this.valor.includes(entrada) ? this.valor : null;
    }
}

class Arvore {
    constructor() {
        this.raiz = null;
    }

    inserir(valor) {
        const novoNo = new Nodin(valor);

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

    buscarLa(no,valor){
        if(no === null){
            return null
        }


        if (no.buscarAqui(valor)) {
            if(no.valor == 'arveres'){
                return "www.youtube.com/watch?v=j6q4FC_g6d0"
            }
            return no.valor;
        } else {
            const esquerda = this.buscarLa(no.esquerda, valor);
            const direita = this.buscarLa(no.direita, valor);
            return esquerda || direita;
            
        }
    }

}



var doodle = new Arvore()

//adicionar sitios 
doodle.inserir('facebook.com')
doodle.inserir('uol.com')
doodle.inserir('google.com')
doodle.inserir('github.com')
doodle.inserir('youtube.com')
//arveres = "https://www.youtube.com/watch?v=j6q4FC_g6d0"
doodle.inserir('arveres')

console.log(doodle)

document.getElementById('buscarButton').addEventListener('click', () => {
    const inputValor = document.getElementById('inputValor').value;
    const resultado = document.getElementById('resultado');

    const link = doodle.buscarLa(doodle.raiz, inputValor);
    console.log(link)

    if (link) {
        resultado.textContent = `URL encontrada: ${link}`;
        // Redirecionar para a URL encontrada
        window.location.href = `http://${link}`;
    
    } else {
        resultado.textContent = 'Nenhuma URL correspondente encontrada';
    }
});
