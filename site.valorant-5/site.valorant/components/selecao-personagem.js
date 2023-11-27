const template = document.createElement('template');

template.innerHTML = `
<link rel="stylesheet" type = "text/css" href="../styles/personagens.css">
    <div class="selecao">

        <img src="../figures/personagens/viper/vipericon.png" alt="" class = "icone">  </img> 
        <p class="nomePersonagem"> Viper </p> 

    </div>
`


class selecaoPersonagem extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

export default selecaoPersonagem