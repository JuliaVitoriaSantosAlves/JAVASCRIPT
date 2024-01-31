function converter() {
    var idade = document.getElementById("idade").value;
    var dias = idade * 365;
    var meses = idade * 12;
    document.getElementById("dias").value = dias;
    document.getElementById("meses").value = meses;
}
