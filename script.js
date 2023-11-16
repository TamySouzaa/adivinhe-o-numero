var numberToFind = 0;
var attemps = 0;

function refresh() {

    numberToFind = parseInt(Math.random() * 101);

    console.log(numberToFind)
}

function verifyNumber() {

    var bet = document.getElementById('bet').value;

    if (bet > 100 || bet < 1) {

        alert('Aposta inválida');
        return;

    }

    if (bet > numberToFind)
    {
        attemps++;
        alert('🚨 o número para ser encontrador é MENOR');
    }
    else if (bet < numberToFind) {
        alert('🚨 O número para ser encontrador é MAIOR');
    }
    else
    {
      alert('✅ Parabéns, você conseguiu acertar após '+attemps+' tentativas!' );
    }

}

refresh();
