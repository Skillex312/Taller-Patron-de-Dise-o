import Cuenta from "./model/Cuenta";
import CuentaProxy from "./proxy/CuentaProxy";

class App {
  static main(): void {
    const cuenta = new Cuenta(1, "Usuario1", 1000);
    const cuentaProxy = new CuentaProxy();

    console.log("Saldo inicial:");
    cuentaProxy.mostrarSaldo(cuenta);

    console.log("\nRealizando un depósito de 500...");
    cuentaProxy.depositar(cuenta, 500);

    console.log("\nRealizando un retiro de 300...");
    cuentaProxy.retirar(cuenta, 300);

    console.log("\nSaldo final:");
    cuentaProxy.mostrarSaldo(cuenta);
  }
}

App.main();