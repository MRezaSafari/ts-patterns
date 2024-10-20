interface SortStrategy {
  sort(data: number[]): number[];
}

class BubbleSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Sorting with Bubble Sort");
    return data.sort();
  }
}

class QuickSort implements SortStrategy {
  sort(data: number[]): number[] {
    console.log("Sorting with Quick Sort");
    return data.sort();
  }
}


class Sorter {
    constructor(private strategy: SortStrategy) {}

    sort(data: number[]) : number[] {
        return this.strategy.sort(data);
    }
}

const data = [1,3,2];

const newSorter = new Sorter(new BubbleSort());
newSorter.sort(data)

const newSorter2 = new Sorter(new QuickSort());
newSorter2.sort(data)
