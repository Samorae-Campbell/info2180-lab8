<?php
mysql_connect(
"0.0.0.0",
"samorae101"
);
mysql_select_db("world");


$LOOKUP = $_GET['term'];
$all = $_GET{'all'};
$xml = $_GET{'xml'};

if ($LOOKUP == ""){
        $LOOKUP = "asd";
}

if ($all == "true"){
    $LOOKUP = null;
}
 //echo($LOOKUP);
//$LOOKUP = null;
 
# execute a SQL query on the database
$results = mysql_query("SELECT * FROM countries WHERE name LIKE '%$LOOKUP%';");
//print $results;
# loop through each country

if ($xml != "true"){
while ($row = mysql_fetch_array($results)) {
  ?>
  
  
  
  <li> <?php echo $row["name"]; ?>, ruled by <?php echo $row["head_of_state"]; ?> </li>
  <?php
}
}else{
?>


<countrydata>
<?php 
while ($row = mysql_fetch_array($results)) {
  ?>



        <country>
        
            <name><?php echo $row["name"]; ?></name><br/>
            
            <ruler><?php echo $row["head_of_state"]; ?></ruler>
        
        </country><br/><br/>
        
        

 <?php
}
}
?>
</countrydata>


