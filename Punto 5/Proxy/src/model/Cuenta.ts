class Cuenta {
  private id: number;
  private usuario: string;
  private saldo: number;

  constructor(id: number, usuario: string, saldo: number) {
    this.id = id;
    this.usuario = usuario;
    this.saldo = saldo;
  }

  getId(): number {
    return this.id;
  }

  getUsuario(): string {
    return this.usuario;
  }

  getSaldo(): number {
    return this.saldo;
  }

  setSaldo(saldo: number): void {
    this.saldo = saldo;
  }
}

export default Cuenta;