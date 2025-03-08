import ICuenta from "../inter/ICuenta";
import Cuenta from "../model/Cuenta";

class CuentaBancoAImpl implements ICuenta {
  retirar(cuenta: Cuenta, monto: number): void {
    if (cuenta.getSaldo() >= monto) {
      cuenta.setSaldo(cuenta.getSaldo() - monto);
      console.log(`Retiro exitoso. Nuevo saldo: ${cuenta.getSaldo()}`);
    } else {
      console.log("Saldo insuficiente");
    }
  }

  depositar(cuenta: Cuenta, monto: number): void {
    cuenta.setSaldo(cuenta.getSaldo() + monto);
    console.log(`Depósito exitoso. Nuevo saldo: ${cuenta.getSaldo()}`);
  }

  mostrarSaldo(cuenta: Cuenta): void {
    console.log(`Saldo actual: ${cuenta.getSaldo()}`);
  }
}

export default CuentaBancoAImpl;