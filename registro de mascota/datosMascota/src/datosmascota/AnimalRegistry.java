/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Main.java to edit this template
 */
package datosmascota;


import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class AnimalRegistry {

    // registro del animal 
    static class Animal {
        String tipoAnimal;
        String nombre;
        int edad;
        String tipo;
        String habitat;
        String tipoAlimento;

        // Constructor para inicializar un Animal
        public Animal(String nombre, int edad, String tipo, String habitat, String tipoAlimento) {
            this.nombre = nombre;
            this.edad = edad;
            this.tipo = tipo;
            this.habitat = habitat;
            this.tipoAlimento = tipoAlimento;
        }

        // Método para obtener una representación en formato String del Animal
        @Override
        public String toString() {
            return 
                   "tipo de animal" + tipoAnimal + "\n" +
                   "Nombre: " + nombre + "\n" +
                   "Edad: " + edad + "\n" +
                   "Tipo: " + tipo + "\n" +
                   "Hábitat: " + habitat + "\n" +
                   "Tipo de Alimento: " + tipoAlimento + "\n";
        }
    }

    // tipo de animal   

    // tipo de alimentos de los animales 
    private static final String carnivoro = "carnivoro";
    private static final String herbivoro = "herbivoro";
    private static final String omnivoro = "omnivoro";

    public static void main(String[] args) {
        // Lista para almacenar los animales registrados
        List<Animal> animales = new ArrayList<>();
        // leer entradas del usuario
        Scanner scanner = new Scanner(System.in);
        boolean salir = false;

        // Menú del programa
        while (!salir) {
            System.out.println("Menú:");
            System.out.println("1. Registrar el animal");
            System.out.println("2. Mostrar animales registrados");
            System.out.println("3. Salir");
            System.out.print("Seleccione cualquier opción: ");

            int opcion = obtenerEntradaInt(scanner, "Seleccione una opción: ");
            
            // Procesar la opción seleccionada por el usuario
            switch (opcion) {
                case 1:
                    // Registrar un animal si hay menos de 3 animales
                    if (animales.size() < 3) {
                        registrarAnimal(animales, scanner);
                    } else {
                        System.out.println("Ya se han registrado los 3 animales.");
                    }
                    break;
                case 2:
                    // Mostrar todos los animales registrados
                    mostrarAnimales(animales);
                    break;
                case 3:
                    // Salir del programa
                    salir = true;
                    System.out.println("Saliendo del sistema...");
                    break;
                default:
                    // Opción erronia 
                    System.out.println("Opción no válida. Inténtelo de nuevo.");
            }
        }

        // Cerrar el scanner al finalizar
        scanner.close();
    }

    // Método para registrar un nuevo animal
    private static void registrarAnimal(List<Animal> animales, Scanner scanner) {
        // Obtener los detalles del animal del usuario
        String tipoAnimal = obtenerEntradaString(scanner, "Ingrese que animal es: ");
        String nombre = obtenerEntradaString(scanner, "Ingrese el nombre del animal: ");
        int edad = obtenerEntradaInt(scanner, "cual es la edad del animal: ");
        String tipo = obtenerEntradaString(scanner, "Ingrese que tipo de animal es (por ejemplo: mamífero, pajaro, etc.): ");
        String habitat = obtenerEntradaString(scanner, "Ingrese el hábitat del animal: ");
        String tipoAlimento = obtenerTipoAlimento(scanner);

        // registro de nuevo animal y añadirlo a la lista
        animales.add(new Animal(nombre, edad, tipo, habitat, tipoAlimento));
        System.out.println("Animal registrado exitosamente.");
    }

    // Método para obtener una cadena de texto no vacía del usuario
    private static String obtenerEntradaString(Scanner scanner, String mensaje) {
        String entrada;
        do {
            System.out.print(mensaje);
            entrada = scanner.nextLine().trim();
        } while (entrada.isEmpty());  // Repetir hasta que se ingrese un valor no vacío
        return entrada;
    }

    // Método para obtener un número entero del usuario
    private static int obtenerEntradaInt(Scanner scanner, String mensaje) {
        int valor;
        while (true) {
            try {
                System.out.print(mensaje);
                valor = scanner.nextInt();
                scanner.nextLine();  // Limpiar el buffer del scanner
                if (valor < 0) {
                    System.out.println("La edad no puede ser negativa. Inténtelo de nuevo.");
                } else {
                    return valor;
                }
            } catch (InputMismatchException e) {
                System.out.println("Por favor, ingrese un número entero válido.");
                scanner.next();  // Limpiar el buffer en caso de error
            }
        }
    }

    // Método para obtener el tipo de alimento del usuario
    private static String obtenerTipoAlimento(Scanner scanner) {
        String tipoAlimento;
        while (true) {
            System.out.print("Ingrese el tipo de alimento (carnívoro, herbívoro, omnívoro): ");
            tipoAlimento = scanner.nextLine().trim().toLowerCase();
            // Validar que el tipo de alimento sea uno de los valores aceptados
            if (tipoAlimento.equals(carnivoro) || tipoAlimento.equals(herbivoro) || tipoAlimento.equals(omnivoro)) {
                return tipoAlimento;
            } else {
                System.out.println("Tipo de alimento no válido. Inténtelo de nuevo.");
            }
        }
    }

    // Método para mostrar todos los animales registrados
    private static void mostrarAnimales(List<Animal> animales) {
        if (animales.isEmpty()) {
            System.out.println("No hay animales registrados.");
        } else {
            // Imprimir los detalles de cada animal en la lista
            for (Animal animal : animales) {
                System.out.println(animal);
            }
        }
    }
}