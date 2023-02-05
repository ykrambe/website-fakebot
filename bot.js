const question = document.getElementById('question');
const answer = document.getElementById('answer');
const loaders = document.getElementById('loaders')
const container = document.getElementsByClassName('container')


let init = 0;

 

const botSay = (data) => {
    return ["perkenalkan nama saya adalah yurabot kalau boleh tau nama kmu siapa  ya??",
    `halo ${data?.nama}, kalo boleh tau umurnya brpa yah??`,
    `ohh ${data?.usia}.. tua juga ya kamu, hobi kamu apa yaa??`,
    `sama dong, hobi aku juga ${data?.hobi}, btw kmu ada pacar gaa? ntar ada yang marah lagi hehe`,
    `ohh ${data?.pacar},ya udah deh klo gitu.. mau mutualan sama aku ga`,
    `bagus deh kalo ${data?.yesOrNo}.. yaudah bye yaa`,
    `makasih ya udah mau mampir ke bot akuu. thank youu ${data?.nama}👍👍`
    ]
}

question.innerHTML = botSay()[0]

let userData = []

function mulaiBot() {
    if (answer.value.length < 1)
    return alert("diisi dulu brow")
    init++
    if (init === 1) {
        botDelay({nama : answer.value})
    } else if (init === 2) {
        botDelay({usia : answer.value})
    } else if (init === 3) {
        botDelay({hobi : answer.value})
    } else if (init === 4) {
        botDelay({pacar : answer.value})
    } else if (init === 5) {
        botDelay({yesOrNo : answer.value})
    } else {
        botDelay({nama : answer.value})
        setTimeout(() => {
            botEnd()
        }, 5000);
    }
}

function botDelay(useranswer) {
    loaders.style.display = "block"
    container[0].style.filter = "blur(8px)"
    setTimeout(() => {
        question.innerHTML = botSay(useranswer)[init]
        loaders.style.display = "none"
        container[0].style.filter = "none"
    }, 1000);
    answer.value = ""

}

function finishing() {
    console.log('makasih ya udah mau mampir 😘')
}

function botEnd(data) {
    alert(`terimakasih sudah berkunjung 😘`)
    window.location.reload()
}