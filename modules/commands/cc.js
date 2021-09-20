<?php
$link = array(#####);
$rand = array_rand($link);
$pipi = array(
"data" => $link [$rand],
"author" => "Nguyễn Quốc Vinh"
);
$json = json_encode($pipi);
print($json);
?>