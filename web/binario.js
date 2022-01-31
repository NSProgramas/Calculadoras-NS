conv = {bin: function(num) {
	return (num >>> 0).toString(2)
}, hex: function(num) {
	return (num >>> 0).toString(16)
}, oct: function(num) {
	return (num >>> 0).toString(8)
}};
function Converter() {
    var binario = Number(window.document.getElementById('binario').value)
    var p = window.document.getElementById('p')
    p.innerHTML = `Esse número em binário é ${conv.bin(binario)}, em octal é ${conv.oct(binario)} e em hexadecimal é ${conv.hex(binario)}`
}