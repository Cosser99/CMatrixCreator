//creazione di matrici automatico
console.log("Scrivi il nome della variabile matrice: ");
let final_message="";
let m_name = prompt("inserisci: ");
let i=0;
console.log("inserisci '-' per terminare")
do{
    console.log(`riga ${i} : ` );
    var input = prompt();
    let j=0;
    if(input=='-')break;
    for(const x of input)
    {
        final_message+=m_name+'['+i+']'+'['+j+']='+x;
        if(j!=input.length-1) final_message+=',';
	if(j==input.length-1) final_message+=';';
        j++;
    }
    final_message+='\n';
    i++;
}while(input!="-");
console.log(final_message);