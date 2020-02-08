const btn = document.getElementById("order-button");
const form = document.getElementById("form");
const checkbox = document.getElementById("cbox");
const sub_btn = document.getElementById("sub-btn");

function check() {
    if (checkbox.checked == true)
        btn.style.display = "block";
    else
        btn.style.display = "none";
        form.style.display = "none";
}

btn.onclick = function() {
    form.style.display = "block";
}

sub_btn.onclick = function() {
    let i1 = document.getElementById("first-name"), 
        i2 = document.getElementById("last-name"), 
        i3 = document.getElementById("ssnumber"), 
        i4 = document.getElementById("address"), 
        i5 = document.getElementById("postcode"), 
        i6 = document.getElementById("c-num"), 
        i7 = document.getElementById("cv-code"), 
        i8 = document.getElementById("e-date"), 
        i9 = document.getElementById("b-address"), 
        i10 = document.getElementById("cpin");
    
    if (i1.value != "" && i2.value != "" && i3.value != "" && i4.value != "" && i5.value != "" && 
        i6.value != "" && i7.value != "" && i8.value != "" && i9.value != "" && i10.value != "") {
            document.getElementById("personal-i").style.display = "none";
            document.getElementById("pay-i").style.display = "none";
        }
}