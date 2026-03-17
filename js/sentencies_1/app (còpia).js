 // Exemple dels 65 centims

 monedes=[1000,500,200,100,50,20,10,5,2,1];

 // Paguem amb 5€  = 500 centims;
total = monedes[1]-65;
resto = total%monedes[1];

if ( resto > 0 )   // queda per retornar;
    {
    quantitat = resto/monedes[2];  // Quantitat que encara queda repartir
    console.log(parseInt(quantitat) + " monedes de 2€");
    resto = resto%monedes[2]
}


if ( resto > 0 )   // queda per retornar;
    {
    quantitat = resto/monedes[3];  // Quantitat que encara queda repartir
    console.log(parseInt(quantitat) + " monedes de 1€");
    resto = resto%monedes[3]
}

if ( resto > 0 )   // queda per retornar;
    {
    quantitat = resto/monedes[4];  // Quantitat que encara queda repartir
    console.log(parseInt(quantitat) + " monedes de 50 cèntims");
    resto = resto%monedes[4]; 
}

if ( resto > 0 )   // queda per retornar;
    {
    quantitat = resto/monedes[5];  // Quantitat que encara queda repartir
    console.log(parseInt(quantitat) + " monedes de 20 cèntims");
    resto = resto%monedes[5];
}


if ( resto > 0 )   // queda per retornar;
    {
    quantitat = resto/monedes[6];  // Quantitat que encara queda repartir
    console.log(parseInt(quantitat) + " monedes de 10 cèntims");
    resto = resto%monedes[6];
}

if ( resto > 0 )   // queda per retornar;
    {
    quantitat = resto/monedes[7];  // Quantitat que encara queda repartir
    console.log(parseInt(quantitat) + " monedes de 5 cèntims");
    resto = resto%monedes[7];
}

if ( resto > 0 )   // queda per retornar;
    {
    quantitat = resto/monedes[8];  // Quantitat que encara queda repartir
    console.log(parseInt(quantitat) + " monedes de 2 cèntims");
    resto = resto%monedes[8];
}

if ( resto > 0 )   // queda per retornar;
    {
    quantitat = resto/monedes[9];  // Quantitat que encara queda repartir
    console.log(parseInt(quantitat) + " monedes de 1 cèntims");
    resto = resto%monedes[9];
}