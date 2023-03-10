const botoes = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")

//funcao carrosel que passa as imagems
function passadorCarrosel(listaDeImagens,proximaImagem,atual){
    


    listaDeImagens.forEach((element,index)=>{

      if(index!==atual){

        element.classList.remove("active")

      }else{
        element.classList.add("active")
      }

      botoes.forEach((element,index)=>{
        if(index==atual){
            element.classList.add("active")
        }else{
            element.classList.remove("active")
        }
      })


    });
}

//adicionando a funcao passador de carrosel para o evento click de cada botão
botoes.forEach((element,index)=>{
    element.addEventListener("click",()=>{
        passadorCarrosel(imagens,imagens[index],index)
    })
})