import ICuenta from "../inter/ICuenta";
import Cuenta from "../model/Cuenta";

class CuentaBancoBImpl implements ICuenta {
  retirar(cuenta: Cuenta, monto: number): void {
    if (cuenta.getSaldo() >= monto) {
      cuenta.setSaldo(cuenta.getSaldo() - monto);
      console.log(`Retiro realizado en Banco B. Nuevo saldo: ${cuenta.getSaldo()}`);
    } else {
      console.log("Saldo insuficiente en Banco B");
    }
  }

  depositar(cuenta: Cuenta, monto: number): void {
    cuenta.setSaldo(cuenta.getSaldo() + monto);
    console.log(`Depósito realizado en Banco B. Nuevo saldo: ${cuenta.getSaldo()}`);
  }

  mostrarSaldo(cuenta: Cuenta): void {
    console.log(`Saldo en Banco B: ${cuenta.getSaldo()}`);
  }
}

export default CuentaBancoBImpl;