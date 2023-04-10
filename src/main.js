window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("applogo").style.maxHeight = "70px";
        document.getElementById("applogo").style.marginBottom = "0px";
        document.getElementById("applogo").style.marginTop = "3px";
        document.getElementById("toTopBtn").style.display = "block";
    } else {
        document.getElementById("applogo").style.maxHeight = "80px"
        document.getElementById("applogo").style.marginBottom = "5px";
        document.getElementById("applogo").style.marginTop = "2px"
        document.getElementById("toTopBtn").style.display = "none";
    }
}

function toTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function changeOption(value) {
    if (value === 'each') {
        document.getElementById("buyEach").setAttribute("class", "buy-choice_active");
        document.getElementById("buyCombo").setAttribute("class", "buy-choice");
        document.getElementById("eachLabel").setAttribute("class", "buy-label_active");
        document.getElementById("comboLabel").setAttribute("class", "buy-label");
    }
    else {
        document.getElementById("buyCombo").setAttribute("class", "buy-choice_active");
        document.getElementById("buyEach").setAttribute("class", "buy-choice");
        document.getElementById("comboLabel").setAttribute("class", "buy-label_active");
        document.getElementById("eachLabel").setAttribute("class", "buy-label");
    }
}

function menuMobileOnClick() {
    var bar = 'fa-bars';
    var foo = 'fa-times';
    var curMobileClass = document.getElementById("barOrFoo").classList;
    var curNavClass = document.getElementById("navbar").classList;
    if (curMobileClass.contains(bar)) {
        curMobileClass.remove(bar);
        curNavClass.add("active");
        curMobileClass.add(foo);

    }
    else {
        curMobileClass.remove(foo);
        curNavClass.remove("active");
        curMobileClass.add(bar);
    }
}

function navlinkOnClick() {
    var bar = 'fa-bars';
    var foo = 'fa-times';
    var curMobileClass = document.getElementById("barOrFoo").classList;
    var curNavClass = document.getElementById("navbar").classList;
    if (curMobileClass.contains(foo)) {
        curMobileClass.remove(foo);
        curNavClass.remove("active");
        curMobileClass.add(bar);
    }
}

function minusButtonOnclick() {
    var val = parseInt(document.getElementById("inputQuantity").value);
    if (val > 1) {
        val--;
        document.getElementById("inputQuantity").value = val;
    }
    else {
        val = 1;
        document.getElementById("inputQuantity").value = val;
    }
}

function plusButtonOnclick() {
    var val = parseInt(document.getElementById("inputQuantity").value);
    var maxVal = parseInt(document.getElementById("inputQuantity").max);
    if (val < maxVal) {
        val++;
        document.getElementById("inputQuantity").value = val;
    }

}

function buttonFilterOnclick() {
    var filterClass = document.getElementById("filter_mobile").classList;
    var isActive = 'active';
    if (filterClass.contains(isActive)) {
        filterClass.remove(isActive);
    }
    else {
        filterClass.add(isActive);
    }
}