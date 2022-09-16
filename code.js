function edit_row(number)
{
 document.getElementById("edit_btn"+number).style.display="none";
 document.getElementById("save_btn"+number).style.display="block";
	
 var col1=document.getElementById("col1_row"+number);
 var col2=document.getElementById("col2_row"+number);
 var col3=document.getElementById("col3_row"+number);
	
 var col1_data=col1.innerHTML;
 var col2_data=col2.innerHTML;
 var col3_data=col3.innerHTML;
	
 col1.innerHTML="<input type='text' id='col1_text"+number+"' value='"+col1_data+"'>";
 col2.innerHTML="<input type='text' id='col2_text"+number+"' value='"+col2_data+"'>";
 col3.innerHTML="<input type='text' id='col3_text"+number+"' value='"+col3_data+"'>";
}

function save_row(number)
{
 var col1_val=document.getElementById("col1_text"+number).value;
 var col2_val=document.getElementById("col2_text"+number).value;
 var col3_val=document.getElementById("col3_text"+number).value;

 document.getElementById("col1_row"+number).innerHTML=col1_val;
 document.getElementById("col2_row"+number).innerHTML=col2_val;
 document.getElementById("col3_row"+number).innerHTML=col3_val;

 document.getElementById("edit_btn"+number).style.display="block";
 document.getElementById("save_btn"+number).style.display="none";
}

function delete_row(number)
{
 document.getElementById("row"+number+"").outerHTML="";
}

function add_row()
{
 var new_col1=document.getElementById("new_col1").value;
 var new_col2=document.getElementById("new_col2").value;
 var new_col3=document.getElementById("new_col3").value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td class='data' id='col1_row"+table_len+"'>"+new_col1+
 "</td><td class='data' id='col2_row"+table_len+"'>"+new_col2+"</td><td class='data' id='col3_row"+table_len+"'>"+new_col3+
 "</td><td><input type='button' id='edit_btn"+table_len+
 "' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_btn"+table_len+
 "' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_col1").value="";
 document.getElementById("new_col2").value="";
 document.getElementById("new_col3").value="";
}

function add_all()
{
let sum_data=document.getElementsByClassName('data');
var total_sum;
//var table_len=(table.rows.length)
for(let i=0;i<table_len;i++)
{
    total_sum=total_sum+sum_data[i];
}
let div=document.createElement('div');
div.innerHTML=total_sum;
document.appendChild(div);
}