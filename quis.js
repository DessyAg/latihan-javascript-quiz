let prompt =require("prompt-sync")();
let quiz =[
    {question : "BTS memulai debut pada tahun berapa ? ",answer:"2012"},
    {question : "Nama fandom resmi untuk penggemar BTS adalah ? ", answer : "ARMY"},
    {question : "Siapa leader (pemimpin) dari BTS ?",answer : "RM"}
]

//untuk akses hanya pertanyaan 
let benar = 0
jumlah_quiz=3
// untuk mengambil informasi question pada dictionary
for (let i = 0; i < quiz.length;i++){
    console.log("Pertanyaan ke " + [i+1]+". " + quiz[i].question)
}

// pertanyaan + menjawab di prompt
for (let data of quiz){
    const question =prompt(data.question)
    if(question.toLowerCase() === data.answer.toLowerCase()){
        benar++
    }
}
// menghitung persen dan memberi 2 angka di belakang koma
const percentage = ((benar/jumlah_quiz)*100).toFixed(2)
console.log(`Anda menjawab benar ${benar}`)
console.log(`percentage benar ${percentage} %`)






