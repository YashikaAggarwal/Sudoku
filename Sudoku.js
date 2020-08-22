var g = 0;
var matrix;
/*------------Game Boards-------------------------------------------*/
matrix = [[
            [0, 0, 5, 1, 0, 0, 6, 7, 8],
         [0, 0, 0, 0, 0, 4, 0, 0, 5],
         [0, 0, 7, 0, 8, 0, 0, 0, 0],
         [2, 0, 1, 3, 0, 0, 0, 0, 0],
         [0, 6, 0, 0, 0, 0, 0, 2, 0],
         [0, 0, 0, 0, 0, 6, 1, 0, 9],
         [0, 0, 0, 0, 6, 0, 4, 0, 0],
         [1, 0, 0, 4, 0, 0, 0, 0, 0],
         [4, 9, 2, 0, 0, 5, 7, 0, 0]

         ], [

       [0, 0, 0, 0, 0, 0, 6, 0, 9],
        [1, 0, 0, 0, 0, 4, 0, 0, 0],
        [0, 0, 5, 3, 0, 6, 8, 2, 1],
        [0, 0, 4, 6, 7, 0, 0, 5, 0],
        [0, 0, 7, 0, 0, 0, 9, 0, 0],
        [0, 0, 0, 5, 4, 0, 0, 0, 0],
        [3, 7, 0, 4, 0, 5, 2, 0, 6],
        [0, 0, 0, 0, 0, 0, 5, 1, 0],
        [0, 6, 0, 0, 2, 0, 0, 3, 7]
   ], [
              [0, 0, 0, 0, 6, 8, 0, 3, 0],
              [1, 9, 0, 0, 0, 0, 0, 0, 0],
              [8, 0, 3, 1, 0, 0, 2, 0, 0],
              [4, 0, 0, 0, 5, 1, 0, 6, 0],
              [7, 0, 0, 0, 2, 0, 0, 0, 4],
              [0, 0, 0, 0, 7, 0, 8, 0, 0],
              [0, 1, 0, 0, 0, 5, 0, 0, 7],
              [0, 0, 4, 0, 0, 0, 0, 0, 0],
              [0, 5, 0, 0, 3, 0, 1, 0, 0]
          ], [
            [1, 0, 0, 4, 0, 0, 0, 0, 0],
            [3, 0, 0, 0, 1, 0, 7, 0, 5],
            [0, 0, 0, 0, 0, 0, 0, 9, 0],
            [4, 0, 0, 0, 0, 0, 0, 0, 8],
            [9, 0, 2, 0, 7, 0, 0, 6, 0],
            [0, 0, 0, 0, 0, 5, 0, 2, 9],
            [6, 0, 0, 0, 0, 0, 0, 8, 0],
            [8, 0, 3, 0, 0, 9, 0, 0, 0],
            [0, 0, 0, 0, 2, 7, 0, 0, 0]
        ], [
            [2, 5, 0, 0, 0, 3, 0, 9, 1],
            [3, 0, 9, 0, 0, 0, 7, 2, 0],
            [0, 0, 1, 0, 0, 6, 3, 0, 0],
            [0, 0, 0, 0, 6, 8, 0, 0, 3],
            [0, 1, 0, 0, 4, 0, 0, 0, 0],
            [6, 0, 3, 0, 0, 0, 0, 5, 0],
            [1, 3, 2, 0, 0, 0, 0, 7, 0],
            [0, 0, 0, 0, 0, 4, 0, 6, 0],
            [7, 6, 4, 0, 1, 0, 0, 0, 0]
        ], [
            [0, 0, 7, 0, 0, 0, 3, 0, 2],
            [2, 0, 0, 0, 0, 5, 0, 1, 0],
            [0, 0, 0, 8, 0, 1, 4, 0, 0],
            [0, 1, 0, 0, 9, 6, 0, 0, 8],
            [7, 6, 0, 0, 0, 0, 0, 4, 9],
            [0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 1, 0, 3, 0, 0, 0],
            [8, 0, 1, 0, 6, 0, 0, 0, 0],
            [0, 0, 0, 7, 0, 0, 0, 6, 3]
        ],
         [
             [0, 0, 0, 0, 0, 0, 0, 0, 6],
             [0, 0, 4, 0, 0, 0, 0, 0, 0],
             [0, 0, 9, 0, 0, 0, 0, 7, 0],
             [1, 0, 0, 9, 0, 0, 3, 0, 0],
             [9, 0, 0, 0, 0, 0, 0, 0, 8],
             [0, 4, 0, 0, 0, 7, 0, 1, 0],
             [0, 0, 3, 0, 0, 0, 2, 0, 1],
             [4, 0, 8, 1, 6, 5, 7, 3, 0],
             [0, 5, 1, 0, 9, 0, 8, 0, 4]
         ],
          [
              [0, 0, 0, 3, 0, 7, 4, 0, 0],
              [9, 0, 0, 0, 0, 4, 0, 0, 8],
              [3, 7, 0, 0, 0, 0, 0, 6, 0],
              [8, 2, 0, 9, 0, 0, 6, 0, 0],
              [0, 0, 1, 2, 0, 0, 9, 0, 4],
              [0, 4, 0, 0, 3, 8, 0, 5, 0],
              [2, 0, 8, 6, 9, 0, 7, 0, 0],
              [0, 9, 0, 0, 0, 0, 0, 0, 0],
              [7, 5, 0, 0, 0, 0, 0, 0, 6]
          ],
          [
              [0, 0, 4, 8, 6, 0, 0, 3, 0],
              [0, 0, 1, 0, 0, 0, 0, 9, 0],
              [8, 0, 0, 0, 0, 9, 0, 6, 0],
              [5, 0, 0, 2, 0, 6, 0, 0, 1],
              [0, 2, 7, 0, 0, 1, 0, 0, 0],
              [0, 0, 0, 0, 4, 3, 0, 0, 6],
              [0, 5, 0, 0, 0, 0, 0, 0, 0],
              [0, 0, 9, 0, 0, 0, 4, 0, 0],
              [0, 0, 0, 4, 0, 0, 0, 1, 5]
          ],
          [
              [0, 0, 0, 8, 0, 5, 0, 1, 3],
              [0, 0, 0, 2, 0, 3, 6, 0, 0],
              [6, 0, 0, 0, 9, 0, 2, 0, 4],
              [0, 0, 0, 0, 0, 0, 0, 0, 5],
              [0, 4, 0, 1, 0, 0, 7, 0, 6],
              [2, 5, 6, 3, 0, 4, 8, 9, 0],
              [5, 9, 0, 0, 0, 7, 1, 0, 2],
              [1, 0, 2, 0, 8, 0, 4, 7, 0],
              [0, 0, 4, 9, 1, 0, 0, 3, 8]
          ]
         ];

function NewGame() {
    $(document).ready(function () {
        $("#popup").fadeOut(0);
        $("#main").slideDown(1000);
        $("#btm").slideDown(1500);

    });
    /*-----Clearing off previous game---------*/
    document.getElementById("restart").disabled = false;
    document.getElementById("restart").style.cursor = "pointer";

    for (i = 0; i < 9; i++)
        for (j = 0; j < 9; j++) {
            {

                document.getElementById(i + "" + j).value = "";
                document.getElementById(i + "" + j).disabled = false;
            }
        }
    /*-------------Adding New Game----------------------*/
    for (i = 0; i < 9; i++)
        for (j = 0; j < 9; j++) {
            {
                if (matrix[g][i][j] != 0) {
                    document.getElementById(i + "" + j).value = document.getElementById(i + "" + j).value + matrix[g][i][j];
                    document.getElementById(i + "" + j).disabled = true;
                }
            }
        }
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (document.getElementById(i + "" + j).disabled == false) {
                document.getElementById(i + "" + j).style.backgroundColor = "bisque";
                document.getElementById(i + "" + j).style.color = "black";
            } else {
                document.getElementById(i + "" + j).style.backgroundColor = "#f4c493";
                document.getElementById(i + "" + j).style.color = "brown";
            }
        }
    }
    g++;
    if (g == 10) {
        g = 0;
    }
}

function Prev(){
    
    for (i = 0; i < 9; i++)
        for (j = 0; j < 9; j++) {
            {

                document.getElementById(i + "" + j).value = "";
                document.getElementById(i + "" + j).disabled = false;
            }
        }
   
    g = g - 2;
    if (g == -1)
        g = 9; 
    if(g==-2)
        g=8;
    for (i = 0; i < 9; i++)
        for (j = 0; j < 9; j++) {
            {
                if (matrix[g][i][j] != 0) {
                    document.getElementById(i + "" + j).value = document.getElementById(i + "" + j).value + matrix[g][i][j];
                    document.getElementById(i + "" + j).disabled = true;
                }
            }
        }
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (document.getElementById(i + "" + j).disabled == false) {
                document.getElementById(i + "" + j).style.backgroundColor = "bisque";
                document.getElementById(i + "" + j).style.color = "black";
            } else {
                document.getElementById(i + "" + j).style.backgroundColor = "#f4c493";
                document.getElementById(i + "" + j).style.color = "brown";
            }
        }
    }
    g++;
    if (g == 10) {
        g = 0;
    }
}

function Restart() {
    /*-----Clearing off previous moves---------*/
    for (i = 0; i < 9; i++)
        for (j = 0; j < 9; j++) {
            {

                document.getElementById(i + "" + j).value = "";
                document.getElementById(i + "" + j).disabled = false;
            }
        }
    /*-------------Restarting Game----------------------*/
    g = g - 1;
    if (g == -1)
        g = 9; /*------(10-1)-------*/
    for (i = 0; i < 9; i++)
        for (j = 0; j < 9; j++) {
            {
                if (matrix[g][i][j] != 0) {
                    document.getElementById(i + "" + j).value = document.getElementById(i + "" + j).value + matrix[g][i][j];
                    document.getElementById(i + "" + j).disabled = true;
                }
            }
        }
    g++;
    if (g == 10) {
        g = 0;
    }
}

function doType(ref, id) {
    
    
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (document.getElementById(i + "" + j).style.backgroundColor == "red")
                document.getElementById(i + "" + j).value = "";
            if (document.getElementById(i + "" + j).disabled == false)
                document.getElementById(i + "" + j).style.backgroundColor = "bisque";
            else
                document.getElementById(i + "" + j).style.backgroundColor = "#f4c493";

        }
    }
    
    
    var con = confirm("Are you sure of your choice ?") ;
    if(con == false){
        document.getElementById(id[0]+""+id[1]).style.backgroundColor = "lightblue" ;
    }
    
    var flag = 0;
    for (i = 0; i < 9; i++) {
        /*----------------------Checking if present in same row-----------------*/
        if (ref.value != 0 && i != id[1]) {
            var x = id[0];
            if (ref.value == document.getElementById(x + "" + i).value) {

                document.getElementById(x + "" + i).style.backgroundColor = "indianred";
                document.getElementById(id).style.backgroundColor = "red";
                flag = 1;
            }
        }
        /*----------------------Checking if present in same column-----------------*/

        if (ref.value != 0 && i != id[0]) {
            var x = id[1];
            if (ref.value == document.getElementById(i + "" + x).value) {
                /*ref.value="";*/
                flag = 1;

                document.getElementById(i + "" + x).style.backgroundColor = "indianred";
                document.getElementById(id).style.backgroundColor = "red";
            }
        }

    }
    /*----------------------Checking if present in same box-----------------*/

    if (ref.value != 0) {
        var rs = parseInt(id[0] / 3) * 3;
        var cs = parseInt(id[1] / 3) * 3;
        for (i = rs; i < rs + 3; i++) {
            for (j = cs; j < cs + 3; j++) {
                if (i != id[0] && j != id[1]) {
                    if (ref.value == document.getElementById(i + "" + j).value) {
                        flag = 1;
                        document.getElementById(i + "" + j).style.backgroundColor = "indianred";
                        document.getElementById(id).style.backgroundColor = "red";
                    }

                }
            }
        }

    }
    

    /*----------------------------Checking if fully solved---------------------------*/
    var check1 = 1;
    var check2 = 1;
    for (i = 0; i < 9; i++) {
        sr = 0;
        sc = 0;
        for (j = 0; j < 9; j++) {
            sr = sr + parseFloat(document.getElementById(i + "" + j).value);
            sc = sc + parseFloat(document.getElementById(j + "" + i).value);
        }
        if (sr != 45) {
            check1 = 0;
            break;
        }
        if (sc != 45) {
            check1 = 0;
            break;
        }
    }
    for (i = 0; i < 9; i += 3) {
        for (j = 0; j < 9; j += 3) {
            sb = 0;
            for (x = i; x < i + 3; x++) {
                for (y = j; y < j + 3; y++) {
                    sb = sb + parseFloat(document.getElementById(x + "" + y).value);
                }
            }
            if (sb != 45) {
                check2 = 0;
                break;
            }
        }
    }
    c = 1;
    if (check1 == 1 && check2 == 1) {
        for (i = 0; i < 9; i++) {
            for (j = 0; j < 9; j++) {
                document.getElementById(i + "" + j).style.backgroundColor = "#352315";
                document.getElementById(i + "" + j).style.color = "white";
                document.getElementById(i + "" + j).disabled = true;
            }
        }
        if (c == 1) {
            alert("CONGRATS!!! YOU DID IT...");
        }
        c++;
    }
}
function doCongrats()
{
    
}
