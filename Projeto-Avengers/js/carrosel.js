/*/ Carrosel DIV
let first_carrosel = document.querySelector('#carrosel .carrosel-item.first')
let main_carrosel = document.querySelector('#carrosel .carrosel-item.main')
let last_carrosel = document.querySelector('#carrosel .carrosel-item.last')
*/
// Lista de Itens dos carroséis
let first_carrosel_itens = document.querySelectorAll('#carrosel .carrosel-item.first .hero')
let main_carrosel_itens = document.querySelectorAll('#carrosel .carrosel-item.main .hero')
let last_carrosel_itens = document.querySelectorAll('#carrosel .carrosel-item.last .hero')

// Botões do carrosel
let left = document.querySelector('#left')
let right = document.querySelector('#right')

// Variáveis
let max = first_carrosel_itens.length
let currentIndextFirst = max-1
let currentIndextMain = 0
let currentIndextLast = 1
let time = 10000

// Funções
function subindoCarrosel(){

    // Retirando classe 'Select' dos Carrosel itens
    first_carrosel_itens[currentIndextFirst].classList.remove('select')
    main_carrosel_itens[currentIndextMain].classList.remove('select')
    last_carrosel_itens[currentIndextLast].classList.remove('select')

    // Incrementando valor aos Index
    currentIndextFirst++
    currentIndextMain++
    currentIndextLast++

    // Verificando valor dos Index
    if(currentIndextFirst==max)
        currentIndextFirst = 0
    if(currentIndextMain==max)
        currentIndextMain = 0 
    if(currentIndextLast==max)
        currentIndextLast = 0       
        
    // Adicionando classe 'Select' dos Carrosel itens
    first_carrosel_itens[currentIndextFirst].classList.add('select')
    main_carrosel_itens[currentIndextMain].classList.add('select')
    last_carrosel_itens[currentIndextLast].classList.add('select')

} 
function descendoCarrosel(){
    
    // Retirando classe 'Select' dos Carrosel itens
    first_carrosel_itens[currentIndextFirst].classList.remove('select')
    main_carrosel_itens[currentIndextMain].classList.remove('select')
    last_carrosel_itens[currentIndextLast].classList.remove('select')

    // Incrementando valor aos Index
    currentIndextFirst--
    currentIndextMain--
    currentIndextLast--

    // Verificando valor dos Index
    if(currentIndextFirst<0)
        currentIndextFirst = max-1
    if(currentIndextMain<0)
        currentIndextMain = max-1 
    if(currentIndextLast<0)
        currentIndextLast = max-1       
        
    // Adicionando classe 'Select' dos Carrosel itens
    first_carrosel_itens[currentIndextFirst].classList.add('select')
    main_carrosel_itens[currentIndextMain].classList.add('select')
    last_carrosel_itens[currentIndextLast].classList.add('select')
}
function alterandoCarroselPeloTempo(){
    setInterval(()=>{
        subindoCarrosel()
    },time)
}

// Exportando Funções
export {subindoCarrosel, descendoCarrosel, alterandoCarroselPeloTempo, left, right}