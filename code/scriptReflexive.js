document.addEventListener('DOMContentLoaded', function() {
    if (vopros_ris_1 == "да") {
        vopros_1 = "<img src='data/01.jpg' class='rounded mx-auto d-block'><br>" + vopros_1;
    }
    if (vopros_ris_2 == "да") {
        vopros_2 = "<img src='data/02.jpg' class='rounded mx-auto d-block'><br>" + vopros_2;
    }
    if (vopros_ris_3 == "да") {
        vopros_3 = "<img src='data/03.jpg' class='rounded mx-auto d-block'><br>" + vopros_3;
    }
    if (vopros_ris_4 == "да") {
        vopros_4 = "<img src='data/04.jpg' class='rounded mx-auto d-block'><br>" + vopros_4;
    }
    if (vopros_ris_5 == "да") {
        vopros_5 = "<img src='data/05.jpg' class='rounded mx-auto d-block'><br>" + vopros_5;
    }
    if (vopros_ris_6 == "да") {
        vopros_6 = "<img src='data/06.jpg' class='rounded mx-auto d-block'><br>" + vopros_6;
    }
    if (vopros_ris_7 == "да") {
        vopros_7 = "<img src='data/07.jpg' class='rounded mx-auto d-block'><br>" + vopros_7;
    }
    if (vopros_ris_8 == "да") {
        vopros_8 = "<img src='data/08.jpg' class='rounded mx-auto d-block'><br>" + vopros_8;
    }
    if (vopros_ris_9 == "да") {
        vopros_9 = "<img src='data/09.jpg' class='rounded mx-auto d-block'><br>" + vopros_9;
    }
    if (vopros_ris_10 == "да") {
        vopros_10 = "<img src='data/10.jpg' class='rounded mx-auto d-block'><br>" + vopros_10;
    }
    if (vopros_ris_11 == "да") {
        vopros_11 = "<img src='data/11.jpg' class='rounded mx-auto d-block'><br>" + vopros_11;
    }
    if (vopros_ris_12 == "да") {
        vopros_12 = "<img src='data/12.jpg' class='rounded mx-auto d-block'><br>" + vopros_12;
    }
    if (vopros_ris_13 == "да") {
        vopros_13 = "<img src='data/13.jpg' class='rounded mx-auto d-block'><br>" + vopros_13;
    }
    if (vopros_ris_14 == "да") {
        vopros_14 = "<img src='data/14.jpg' class='rounded mx-auto d-block'><br>" + vopros_14;
    }
    if (vopros_ris_15 == "да") {
        vopros_15 = "<img src='data/15.jpg' class='rounded mx-auto d-block'><br>" + vopros_15;
    }
    voprosi = [
        [vopros_1Ref, pr_otv_zadachi_1Ref],
        [vopros_2Ref, pr_otv_zadachi_2Ref],
        [vopros_3Ref, pr_otv_zadachi_3Ref],
        [vopros_4Ref, pr_otv_zadachi_4Ref],
        [vopros_5Ref, pr_otv_zadachi_5Ref],
        [vopros_6Ref, pr_otv_zadachi_6Ref],
        [vopros_7Ref, pr_otv_zadachi_7Ref],
        [vopros_8Ref, pr_otv_zadachi_8Ref],
        [vopros_9Ref, pr_otv_zadachi_9Ref],
        [vopros_10Ref, pr_otv_zadachi_10Ref],
        [vopros_11Ref, pr_otv_zadachi_11Ref],
        [vopros_12Ref, pr_otv_zadachi_12Ref],
        [vopros_13Ref, pr_otv_zadachi_13Ref],
        [vopros_14Ref, pr_otv_zadachi_14Ref],
        [vopros_15Ref, pr_otv_zadachi_15Ref]
    ];
    if (peremeshat_voprosi == "да") {
        voprosi = peremeshat_vse_voprosi(voprosi);
    }
    document.getElementById('v_1').innerHTML = voprosi[0][0];
    document.getElementById('v_2').innerHTML = voprosi[1][0];
    document.getElementById('v_3').innerHTML = voprosi[2][0];
    document.getElementById('v_4').innerHTML = voprosi[3][0];
    document.getElementById('v_5').innerHTML = voprosi[4][0];
    document.getElementById('v_6').innerHTML = voprosi[5][0];
    document.getElementById('v_7').innerHTML = voprosi[6][0];
    document.getElementById('v_8').innerHTML = voprosi[7][0];
    document.getElementById('v_9').innerHTML = voprosi[8][0];
    document.getElementById('v_10').innerHTML = voprosi[9][0];
    document.getElementById('v_11').innerHTML = voprosi[10][0];
    document.getElementById('v_12').innerHTML = voprosi[11][0];
    document.getElementById('v_13').innerHTML = voprosi[12][0];
    document.getElementById('v_14').innerHTML = voprosi[13][0];
    document.getElementById('v_15').innerHTML = voprosi[14][0];
    document.getElementById('tema').innerHTML = test;
});

function sled_vopr() {
    if (document.getElementById('vopros14').style.display == "block") {
        document.getElementById('vopros14').style.display = "none";
        document.getElementById('vopros15').style.display = "block";
        document.getElementById('kn_sl').style.display = "none";
        document.getElementById('kn_pr').style.display = "block";
    }
    if (document.getElementById('vopros13').style.display == "block") {
        document.getElementById('vopros13').style.display = "none";
        document.getElementById('vopros14').style.display = "block";
    }
    if (document.getElementById('vopros12').style.display == "block") {
        document.getElementById('vopros12').style.display = "none";
        document.getElementById('vopros13').style.display = "block";
    }
    if (document.getElementById('vopros11').style.display == "block") {
        document.getElementById('vopros11').style.display = "none";
        document.getElementById('vopros12').style.display = "block";
    }
    if (document.getElementById('vopros10').style.display == "block") {
        document.getElementById('vopros10').style.display = "none";
        document.getElementById('vopros11').style.display = "block";
    }
    if (document.getElementById('vopros9').style.display == "block") {
        document.getElementById('vopros9').style.display = "none";
        document.getElementById('vopros10').style.display = "block";
    }
    if (document.getElementById('vopros8').style.display == "block") {
        document.getElementById('vopros8').style.display = "none";
        document.getElementById('vopros9').style.display = "block";
    }
    if (document.getElementById('vopros7').style.display == "block") {
        document.getElementById('vopros7').style.display = "none";
        document.getElementById('vopros8').style.display = "block";
    }
    if (document.getElementById('vopros6').style.display == "block") {
        document.getElementById('vopros6').style.display = "none";
        document.getElementById('vopros7').style.display = "block";
    }
    if (document.getElementById('vopros5').style.display == "block") {
        document.getElementById('vopros5').style.display = "none";
        document.getElementById('vopros6').style.display = "block";
    }
    if (document.getElementById('vopros4').style.display == "block") {
        document.getElementById('vopros4').style.display = "none";
        document.getElementById('vopros5').style.display = "block";
    }
    if (document.getElementById('vopros3').style.display == "block") {
        document.getElementById('vopros3').style.display = "none";
        document.getElementById('vopros4').style.display = "block";
    }
    if (document.getElementById('vopros2').style.display == "block") {
        document.getElementById('vopros2').style.display = "none";
        document.getElementById('vopros3').style.display = "block";
    }
    if (document.getElementById('vopros1').style.display == "block") {
        document.getElementById('vopros1').style.display = "none";
        document.getElementById('vopros2').style.display = "block";
    }
}

function proverit() {
    otv_uch_1 = document.getElementById('z_1').value;
    otv_ucgenika_1 = otv_uch_1;
    otv_uch_1 = kodirov(otv_uch_1);
    otv_uch_2 = document.getElementById('z_2').value;
    otv_ucgenika_2 = otv_uch_2;
    otv_uch_2 = kodirov(otv_uch_2);
    otv_uch_3 = document.getElementById('z_3').value;
    otv_ucgenika_3 = otv_uch_3;
    otv_uch_3 = kodirov(otv_uch_3);
    otv_uch_4 = document.getElementById('z_4').value;
    otv_ucgenika_4 = otv_uch_4;
    otv_uch_4 = kodirov(otv_uch_4);
    otv_uch_5 = document.getElementById('z_5').value;
    otv_ucgenika_5 = otv_uch_5;
    otv_uch_5 = kodirov(otv_uch_5);
    otv_uch_6 = document.getElementById('z_6').value;
    otv_ucgenika_6 = otv_uch_6;
    otv_uch_6 = kodirov(otv_uch_6);
    otv_uch_7 = document.getElementById('z_7').value;
    otv_ucgenika_7 = otv_uch_7;
    otv_uch_7 = kodirov(otv_uch_7);
    otv_uch_8 = document.getElementById('z_8').value;
    otv_ucgenika_8 = otv_uch_8;
    otv_uch_8 = kodirov(otv_uch_8);
    otv_uch_9 = document.getElementById('z_9').value;
    otv_ucgenika_9 = otv_uch_9;
    otv_uch_9 = kodirov(otv_uch_9);
    otv_uch_10 = document.getElementById('z_10').value;
    otv_ucgenika_10 = otv_uch_10;
    otv_uch_10 = kodirov(otv_uch_10);
    otv_uch_11 = document.getElementById('z_11').value;
    otv_ucgenika_11 = otv_uch_11;
    otv_uch_11 = kodirov(otv_uch_11);
    otv_uch_12 = document.getElementById('z_12').value;
    otv_ucgenika_12 = otv_uch_12;
    otv_uch_12 = kodirov(otv_uch_12);
    otv_uch_13 = document.getElementById('z_13').value;
    otv_ucgenika_13 = otv_uch_13;
    otv_uch_13 = kodirov(otv_uch_13);
    otv_uch_14 = document.getElementById('z_14').value;
    otv_ucgenika_14 = otv_uch_14;
    otv_uch_14 = kodirov(otv_uch_14);
    otv_uch_15 = document.getElementById('z_15').value;
    otv_ucgenika_15 = otv_uch_15;
    otv_uch_15 = kodirov(otv_uch_15);
    ball = 0;
    document.getElementById('vopros15').style.display = "none";
    document.getElementById('kn_pr').style.display = "none";
    document.getElementById('name_test').style.display = "none";
    otveti = "<table class='table'><tr class='table-active'><td>№</td><td>Вопрос</td><td>Ответ</td></tr>";
    if (otv_uch_1 == voprosi[0][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>1</td><td>" + voprosi[0][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_1 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>1</td><td>" + voprosi[0][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_1 + "</td></tr>";
    }
    if (otv_uch_2 == voprosi[1][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>2</td><td>" + voprosi[1][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_2 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>2</td><td>" + voprosi[1][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_2 + "</td></tr>";
    }
    if (otv_uch_3 == voprosi[2][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>3</td><td>" + voprosi[2][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_3 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>3</td><td>" + voprosi[2][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_3 + "</td></tr>";
    }
    if (otv_uch_4 == voprosi[3][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>4</td><td>" + voprosi[3][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_4 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>4</td><td>" + voprosi[3][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_4 + "</td></tr>";
    }
    if (otv_uch_5 == voprosi[4][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>5</td><td>" + voprosi[4][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_5 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>5</td><td>" + voprosi[4][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_5 + "</td></tr>";
    }
    if (otv_uch_6 == voprosi[5][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>6</td><td>" + voprosi[5][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_6 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>6</td><td>" + voprosi[5][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_6 + "</td></tr>";
    }
    if (otv_uch_7 == voprosi[6][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>7</td><td>" + voprosi[6][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_7 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>7</td><td>" + voprosi[6][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_7 + "</td></tr>";
    }
    if (otv_uch_8 == voprosi[7][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>8</td><td>" + voprosi[7][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_8 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>8</td><td>" + voprosi[7][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_8 + "</td></tr>";
    }
    if (otv_uch_9 == voprosi[8][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>9</td><td>" + voprosi[8][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_9 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>9</td><td>" + voprosi[8][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_9 + "</td></tr>";
    }
    if (otv_uch_10 == voprosi[9][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>10</td><td>" + voprosi[9][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_10 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>10</td><td>" + voprosi[9][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_10 + "</td></tr>";
    }
    if (otv_uch_11 == voprosi[10][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>11</td><td>" + voprosi[10][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_11 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>11</td><td>" + voprosi[10][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_11 + "</td></tr>";
    }
    if (otv_uch_12 == voprosi[11][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>12</td><td>" + voprosi[11][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_12 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>12</td><td>" + voprosi[11][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_12 + "</td></tr>";
    }
    if (otv_uch_13 == voprosi[12][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>13</td><td>" + voprosi[12][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_13 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>13</td><td>" + voprosi[12][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_13 + "</td></tr>";
    }
    if (otv_uch_14 == voprosi[13][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>14</td><td>" + voprosi[13][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_14 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>14</td><td>" + voprosi[13][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_14 + "</td></tr>";
    }
    if (otv_uch_15 == voprosi[14][1]) {
        ball += 1;
        otveti += "<tr class='table-success'><td>15</td><td>" + voprosi[14][0] + "</td><td>Вы ответили верно. Ваш ответ: " + otv_ucgenika_15 + "</td></tr>";
    } else {
        otveti += "<tr class='table-danger'><td>15</td><td>" + voprosi[14][0] + "</td><td>Вы ответили не верно. Ваш ответ: " + otv_ucgenika_15;
    }
    vsego_zadach = 15;
    procent_vip = ball / vsego_zadach * 100;
    procent_vip = procent_vip.toFixed();
    document.getElementById('rezultat').innerHTML = "<p style='font-weight:bold;'>Тест. Тема - '<span id='tema2'></span>'.</p><span id='ot'>Задания выполнены верно на " + procent_vip + "%.</span><br><div class='progress'><div class='progress-bar' role='progressbar' style='width: " + procent_vip + "%' aria-valuenow='" + procent_vip + "' aria-valuemin='0' aria-valuemax='100'></div></div><br>" + otveti;
    document.getElementById('tema2').innerHTML = test;
}

function kodirov(stroka) {
    // var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefg' +
    //     'hijklmnopqrstuvwxyz0123456789+/=';
    // var b64enc = '';
    // var ch1, ch2, ch3;
    // var en1, en2, en3, en4;
    // for (var i = 0; i < stroka.length;) {
    //     ch1 = stroka.charCodeAt(i++);
    //     ch2 = stroka.charCodeAt(i++);
    //     ch3 = stroka.charCodeAt(i++);
    //     en1 = ch1 >> 2;
    //     en2 = ((ch1 & 3) << 4) | (ch2 >> 4);
    //     en3 = isNaN(ch2) ? 64 : (((ch2 & 15) << 2) | (ch3 >> 6));
    //     en4 = isNaN(ch3) ? 64 : (ch3 & 63);
    //     b64enc += b64ch.charAt(en1) + b64ch.charAt(en2) +
    //         b64ch.charAt(en3) + b64ch.charAt(en4);
    // }
    return stroka; //Включить кодировку --> раскоментиковать тело, return b64ch;
}

function peremeshat_vse_voprosi(m_vopros) {
    for (var i = m_vopros.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = m_vopros[i];
        m_vopros[i] = m_vopros[j];
        m_vopros[j] = temp;
    }
    return m_vopros;
}