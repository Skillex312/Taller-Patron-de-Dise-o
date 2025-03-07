from abc import ABC, abstractmethod


# Interfaz para los comparadores
class Comparator(ABC):
    @abstractmethod
    def compare(self, a, b):
        pass


# Comparadores concretos
class AscendingComparator(Comparator):
    def compare(self, a, b):
        return a > b  # True si a debe ir después de b (ascendente)


class DescendingComparator(Comparator):
    def compare(self, a, b):
        return a < b  # True si a debe ir después de b (descendente)


# Interfaz para estrategias de ordenación
class SortStrategy(ABC):
    @abstractmethod
    def sort(self, array, comparator):
        pass


# Implementaciones de los algoritmos
class BubbleSort(SortStrategy):
    def sort(self, array, comparator):
        n = len(array)
        for i in range(n):
            for j in range(n - i - 1):
                if comparator.compare(array[j], array[j + 1]):
                    array[j], array[j + 1] = array[j + 1], array[j]


class QuickSort(SortStrategy):
    def sort(self, array, comparator):
        self._quick_sort(array, 0, len(array) - 1, comparator)


    def _quick_sort(self, array, low, high, comparator):
        if low < high:
            pi = self._partition(array, low, high, comparator)
            self._quick_sort(array, low, pi - 1, comparator)
            self._quick_sort(array, pi + 1, high, comparator)


    def _partition(self, array, low, high, comparator):
        pivot = array[high]
        i = low - 1
        for j in range(low, high):
            if comparator.compare(pivot, array[j]):
                i += 1
                array[i], array[j] = array[j], array[i]
        array[i + 1], array[high] = array[high], array[i + 1]
        return i + 1


class InsertSort(SortStrategy):
    def sort(self, array, comparator):
        for i in range(1, len(array)):
            key = array[i]
            j = i - 1
            while j >= 0 and comparator.compare(array[j], key):
                array[j + 1] = array[j]
                j -= 1
            array[j + 1] = key


# Ejemplo de uso
if __name__ == "__main__":
    datos = [3, 1, 4, 1, 5, 9, 2, 6]
    algoritmo = QuickSort()  # Seleccionar algoritmo (BubbleSort, InsertSort)
    orden = DescendingComparator()  # Seleccionar orden (AscendingComparator())


    algoritmo.sort(datos, orden)
    print("Resultado:", datos)  # Output: [9, 6, 5, 4, 3, 2, 1, 1]
