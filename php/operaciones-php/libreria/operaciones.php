<?php 
     class Operaciones{
        private $num1;
        private $num2;
        private $suma;
        private $resta;
        public $multiplicacion;
        public $division;
        public function __construct(Numero $num1, Numero $num2){
            $this->num1 = $num1;
            $this->num2 = $num2;
        }
        public function sumar(){
            $this->suma = $this->num1->getValor() + $this->num2->getValor();
            return $this->suma;
        }
        public function restar(){
            $this->resta = $this->num1->getValor() - $this->num2->getValor();
            return $this->resta;
        }
        public function multiplicar(){
            $this->multiplicacion = $this->num1->getValor() * $this->num2->getValor();
            return $this->multiplicacion;
        }
        public function dividir(){
            $this->division = $this->num1->getValor() / $this->num2->getValor();
            return $this->division;
        }
    }
?>