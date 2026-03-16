let total=0

let data=JSON.parse(localStorage.getItem("trx"))||[]

document.getElementById("trx").innerText="TRX"+Date.now()

document.getElementById("tanggal").innerText=
new Date().toLocaleString()

function tambah(){

let barang=document.getElementById("barang").value
let harga=parseInt(document.getElementById("harga").value)
let qty=parseInt(document.getElementById("qty").value)

let jumlah=harga*qty

let tabel=document.getElementById("tabel")

let row=tabel.insertRow()

row.insertCell(0).innerText=barang
row.insertCell(1).innerText=harga
row.insertCell(2).innerText=qty
row.insertCell(3).innerText=jumlah

row.insertCell(4).innerHTML=
"<button onclick='hapus(this)'>X</button>"

total+=jumlah

document.getElementById("total").innerText=total

}

function hapus(btn){

btn.parentNode.parentNode.remove()

}

function printNota(){

window.print()

}

function sharePDF(){

const { jsPDF } = window.jspdf

let doc=new jsPDF()

doc.text("NOTA PENJUALAN",20,20)

doc.text("No: "+document.getElementById("trx").innerText,20,30)

doc.text("Total: Rp "+total,20,40)

doc.save("nota.pdf")

}

function simpan(){

let trx={
no:document.getElementById("trx").innerText,
total:total,
tanggal:new Date().toLocaleString()
}

data.push(trx)

localStorage.setItem(
"trx",
JSON.stringify(data)
)

tampil()

}

function tampil(){

let div=document.getElementById("riwayat")

div.innerHTML=""

data.forEach(t=>{

div.innerHTML+=`
<div>
${t.no}<br>
${t.tanggal}<br>
Rp ${t.total}
<hr>
</div>
`

})

}

tampil()