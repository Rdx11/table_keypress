document.addEventListener('keydown', function(event) {
    if (event.code == 'Space' && (event.ctrlKey || event.metaKey)) {
        tambahBaris()
    }

    if (event.code == 'Enter' && (event.ctrlKey || event.metaKey)) {
        tambahData();
    }
});

// add row
function tambahBaris() {
    baris = "<tr><td class='cell100 column1 nama'><input type='text' value='' id='nama'></td><td class='cell100 column2 umur'><input type='text' value='' id='umur'></td><td class='cell100 column3 kelas'><input type='text' value='' id='kelas'></td><td class='cell100 column4 jurusan'><input type='text' value='' id='jurusan'></td><td class='cell100 column5 alamat'><input type='text' value='' id='alamat'></td></tr>"
    tableBody = $("table tbody");
    tableBody.append(baris);
}

function tambahData() {

    // input data on row
    let nama = $("#nama").val();
    let umur = $("#umur").val();
    let kelas = $("#kelas").val();
    let jurusan = $("#jurusan").val();
    let alamat = $("#alamat").val();

    // add data on row
    $('.nama').html(nama);
    $('.umur').html(umur);
    $('.kelas').html(kelas);
    $('.jurusan').html(jurusan);
    $('.alamat').html(alamat);

}