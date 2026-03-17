const now = new Date();
console.log(now);


tallat = 120;
bitllet = 500;

resto = bitllet-tallat;

console.log(resto);

monedes=[10000,5000,2000,1000,500,200,100,50,20,10,5,2,1];

for (let i=5;i<monedes.length;i++)
{
   if ( resto > 0)
   {
    monedes[i]>=100 ?  
    console.log( parseInt(resto/monedes[i]) + " monedes de " + monedes[i]/100 + "€" )
    : console.log( parseInt(resto/monedes[i]) + " monedes de " + monedes[i] + "c" );
    resto = resto%monedes[i];
   }
}
