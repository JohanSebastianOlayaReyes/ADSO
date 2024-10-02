<?php
    include('numero.php');
    include('operaciones.php');
    $num1 = new Numero(10);
    $num2 = new Numero(5);
    $operaciones = new Operaciones($num1, $num2);
    $response = [];
    $response['suma'] = $operaciones->sumar();
    $response['resta'] = $operaciones->restar();
    $response['multiplicacion'] = $operaciones->multiplicar();
    $response['division'] = $operaciones->dividir();

    header('Content-Type: application/json');
    echo json_encode($response);
?>