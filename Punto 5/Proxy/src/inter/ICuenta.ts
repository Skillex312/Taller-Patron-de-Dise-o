interface ICuenta {
  retirar(monto: number): void;
  depositar(monto: number): void;
  mostrarSaldo(): void;
}

export default ICuenta;