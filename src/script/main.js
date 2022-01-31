//CARACTERES PARA AS VARIAÇÕES

let caracteres = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

let codes  = []

for (i in caracteres){
    for (j in caracteres){
        codes.push(`${caracteres[i]}${caracteres[j]}`)
    }
}
console.log("caracteres" + codes)

    //BOTÃO SALVAR
let savecod = document.querySelector(".savecod")
    //DESABILITA BOTAO SALVAR
savecod.disabled = true;
// FUNÇÃO CONTROLE DE HIERARQUIA

function adicionaSub(id){
    document.querySelector(`.${id} >ul`).style.borderLeft = "1px solid rgba(0, 0,0,0.2)"

   let ordem = document.querySelectorAll(`.${id} >ul > li`).length + 1
   var idself = `${id}l${ordem}`
     document.querySelector(`.${id} > ul`).innerHTML += `
     <li class="${idself}">
        <div>
            <button id="delsub" onclick="removeSub('${idself}')">
                <span class="material-icons-outlined">delete</span>
            </button>
            <input type="text" name="${idself}" placeholder="${idself}" id="">
        </div>
        <button id="addsub" class="mais" onclick="adicionaSub('${idself}')">
            <span class="material-icons-outlined">add</span>
        </button>
        <input type="number" name="qtmod" class="qtmod" value = '1'>
        <button id="addmod" class="mais" onclick="adicionaMod('${idself}')">
            <span class="material-icons-outlined">add</span>
        </button>
         <ul>
         </ul>
     </li>
     `
 }

 function adicionaSubMod(id,mod){
    document.querySelector(`.${id} >ul`).style.borderLeft = "1px solid rgba(0, 0,0,0.2)"
    
    let ordem = document.querySelectorAll(`.${id} >ul > li`).length + 1
    var idself = `${id}l${ordem}`
      document.querySelector(`.${id} > ul`).innerHTML += `
      <li class="${idself}">
         <div>
             <button id="delsub" onclick="removeSub('${idself}')">
                 <span class="material-icons-outlined">delete</span>
             </button>
             <input type="text" name="${idself}" placeholder="${idself}" value="${mod}MOD">
         </div>
         <button id="addsub" class="mais" onclick="adicionaSub('${idself}')">
             <span class="material-icons-outlined">add</span>
         </button>
         <input type="number" name="qtmod" class="qtmod" value = '1'>
         <button id="addmod" class="mais" onclick="adicionaMod('${idself}')">
             <span class="material-icons-outlined">add</span>
         </button>
          <ul>
          </ul>
      </li>
      `
  }

 function adicionaMod(id){
    var modulos = document.querySelector(`.${id} .qtmod`)
     console.log("entrou")
    for (i=0;i<modulos.value;i++){
        adicionaSubMod(id,i+1)
    }
 }

 function removeSub(id){
    document.querySelector(`.${id}`).remove()
 }

 function geracodigos(){
     //HABILITA BOTAO SALVAR
    savecod.disable = false;
    savecod.style.cursor = "pointer"
    savecod.style.backgroundColor = "#2ecc71"
    savecod.style.opacity = "1"

    //ARRAYS POR NIVEL
    var nv1 = []
    var nv2 = []
    var nv3 = []
    var nv4 = []
    var codigos = []

    var nodearr = document.querySelectorAll("input")

    // ATRIBUI VALOR AOS ARRAYS
    for (i=0; i<nodearr.length;i++){
        switch(nodearr[i].name.length){
            case 4:
                nv1.push([nodearr[i].name,nodearr[i].value]);
                break;
            case 5:
                nv1.push([nodearr[i].name,nodearr[i].value]);
                break;
            case 6:
                nv2.push([nodearr[i].name,nodearr[i].value]);
                break;
            case 7:
                nv2.push([nodearr[i].name,nodearr[i].value]);
                break;
            case 8:
                nv3.push([nodearr[i].name,nodearr[i].value]);
                break;
            case 9:
                    nv3.push([nodearr[i].name,nodearr[i].value]);
                    break;
            case 10:
                nv4.push([nodearr[i].name,nodearr[i].value]);
                break;
            case 11:
                nv4.push([nodearr[i].name,nodearr[i].value]);
                break;
        }
    }

    //SABER QUANTOS NÍVEIS EXISTEM

    var qtNiveis

    if(nv4.length > 0){
        qtNiveis = 4
    }else if(nv3.length > 0){
        qtNiveis = 3
    }else if (nv2.length > 0){
        qtNiveis = 2
    }else if(nv1 > 0 ){
        qtNiveis = 1
    }

    console.log(`qt niveis = ${qtNiveis}`)
    var famcode = document.querySelector("#famcode")
    var familia = document.querySelector("#familia")
    switch (qtNiveis){
        case 1:
            console.log("Não há niveis o suficiente")
            break;
        case 2:
            for (i in nv1){
                for (j in nv2){
                    if (nv2[j][0].substring(0,4) == nv1[i][0]){
                        console.log("2 niveis")
                        codigos.push([`${famcode.value}.${codes[j]}`,`${familia.value} ${nv1[i][1]} ${nv2[j][1]}`])
                    }
                }
            }
            break;
        case 3:
            for (i in nv1){
                for (j in nv2){
                    for (k in nv3){
                        console.log("3 niveis")
                        if (nv2[j][0].substring(0,4) == nv1[i][0] && nv3[k][0].substring(0,6) == nv2[j][0]){
                            codigos.push([`${famcode.value}.${codes[k]}`,`${familia.value} ${nv1[i][1]} ${nv2[j][1]} ${nv3[k][1]}`])
                        }
                    }
                }
            }
            break;
        case 4:
            for (i in nv1){
                for (j in nv2){
                    for (k in nv3){
                        for(l in nv4){
                            console.log("3 niveis")
                            if (nv2[j][0].substring(0,4) == nv1[i][0] && nv3[k][0].substring(0,6) == nv2[j][0] && nv4[l][0].substring(0,8) == nv3[k][0]){
                                    codigos.push([`${famcode.value}.${codes[l]}`,`${familia.value} ${nv1[i][1]} ${nv2[j][1]} ${nv3[k][1]} ${nv4[l][1]}`])
                            }
                        }
                    }
                }
            }
            break;
    }

    console.log(nv1)
    console.log(nv2)
    console.log(nv3)
    console.log(nv4)
    console.table(codigos)

    //CRIA TABELA
    let tabela = document.querySelector("#tbcod")
    for (i in codigos){
        tabela.innerHTML += `<tr scope="row"><td>${codigos[i][0]}</td><td> - ${codigos[i][1]}</td></tr>`
    }
 }
 