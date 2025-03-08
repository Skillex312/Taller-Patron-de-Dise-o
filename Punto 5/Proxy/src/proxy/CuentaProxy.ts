import ICuenta from "../inter/ICuenta";
import Cuenta from "../model/Cuenta";
import CuentaBancoAImpl from "../inter/impl/CuentaBancoAImpl";

class CuentaProxy implements ICuenta {
  private cuentaReal: ICuenta = new CuentaBancoAImpl();

  retirar(cuenta: Cuenta, monto: number): void {
    console.log("Verificando seguridad antes del retiro...");
    this.cuentaReal.retirar(cuenta, monto);
  }

  depositar(cuenta: Cuenta, monto: number): void {
    console.log("Verificando seguridad antes del depósito...");
    this.cuentaReal.depositar(cuenta, monto);
  }

  mostrarSaldo(cuenta: Cuenta): void {
    console.log("Accediendo a la cuenta de manera segura...");
    this.cuentaReal.mostrarSaldo(cuenta);
  }
}

export default CuentaProxy;