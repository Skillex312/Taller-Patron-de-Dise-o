// Interfaz para Tarjetas de Crédito
interface CreditCard {
    calculateInstallments(amount: number, months: number): number;
}


// Clases concretas para cada tipo de tarjeta
class Visa implements CreditCard {
    calculateInstallments(amount: number, months: number): number {
        const interestRate = 0.02; // 2% de interés mensual
        return amount * (1 + interestRate * months) / months;
    }
}


class MasterCard implements CreditCard {
    calculateInstallments(amount: number, months: number): number {
        const interestRate = 0.025; // 2.5% de interés mensual
        return amount * (1 + interestRate * months) / months;
    }
}


// Clase Factory para crear tarjetas de crédito
class CreditCardFactory {
    static createCard(type: string): CreditCard {
        switch (type.toLowerCase()) {
            case "visa":
                return new Visa();
            case "mastercard":
                return new MasterCard();
            default:
                throw new Error("Tipo de tarjeta no soportado");
        }
    }
}


// Cliente: Simulación de compra con cuotas
function simulatePurchase(cardType: string, amount: number, months: number) {
    try {
        const card = CreditCardFactory.createCard(cardType);
        const installment = card.calculateInstallments(amount, months);
        console.log(`Tarjeta: ${cardType}, Cuotas: ${months}, Valor de cada cuota: $${installment.toFixed(2)}`);
    } catch (error) {
        console.error(error.message);
    }
}


// Ejemplo de uso
simulatePurchase("Visa", 1000, 12);
simulatePurchase("MasterCard", 2000, 6);

