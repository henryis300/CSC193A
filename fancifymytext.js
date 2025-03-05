const biggerText = () => {
    document.getElementById('input').style.fontSize = '24pt';

}

const fancy = () => {
    alert('Fancy text is checked');
    document.getElementById('input').style.fontWeight = 'bold';
    document.getElementById('input').style.color = 'blue';
    document.getElementById('input').style.textDecoration = 'underline';
}

const boring = () => {
    alert('Boring text is checked');
    document.getElementById('input').style.fontWeight = 'normal';
    document.getElementById('input').style.color = 'black';
    document.getElementById('input').style.textDecoration = 'none';
}

const moo = () => {
    document.getElementById('input').style.textTransform = 'uppercase';
    var str = document.getElementById('input').value;
    str = str.split('.').join(' -Moo');
    document.getElementById('input').value = str;

}