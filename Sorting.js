function bubbleSort(arr) {
    let swaps;
    for (let i = 0; i < arr.length; i++) {
        swaps = 0;
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                swaps++;
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
        if (swaps === 0) return arr;
    }
    return arr;
}


function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;
        let currentSmallest = arr[i];
        for (j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[smallestIndex]) {
                smallestIndex = j;
            }
        }
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = currentSmallest;
    }
    return arr;
}

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let val = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (val < arr[j]) {
                arr[j+1] = arr[j];
                arr[j] = val;
            } else {
                break;
            }
        }
    }
    return arr;
}


function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(arr1, arr2) {
    let mergedArr = [];
    let arr1Index = 0; 
    let arr2Index = 0;
    while (arr1Index < arr1.length && arr2Index < arr2.length) {
        if(arr1[arr1Index] < arr2[arr2Index]) {
            mergedArr.push(arr1[arr1Index]);
            arr1Index++;            
        } else {
            mergedArr.push(arr2[arr2Index]);
            arr2Index++;            
        }
    }

    while (arr1Index < arr1.length) {
        mergedArr.push(arr1[arr1Index]);
        arr1Index++;
    };

    while (arr2Index < arr2.length) {
        mergedArr.push(arr2[arr2Index]);        
        arr2Index++;
    }
    return mergedArr;
}

function pivotSort(arr, startIndex = 0, endIndex = arr.length - 1) {  
    if (startIndex >= endIndex) return arr;
    let pivotIndex = pivot(arr, startIndex, endIndex);    
    pivotSort(arr, startIndex, pivotIndex - 1);
    pivotSort(arr, pivotIndex + 1, endIndex);
    return arr;
    
}

function pivot(arr, startIndex, endIndex) { 
    const pivotElement = arr[startIndex];  
    let pivotIndex = startIndex;  
    for (let i = startIndex + 1; i <= endIndex; i++) {
        if (arr[i] < pivotElement) {
            pivotIndex++;
            let temp = arr[pivotIndex];
            arr[pivotIndex] = arr[i];
            arr[i] = temp;
        }
    }
    arr[startIndex] = arr[pivotIndex];
    arr[pivotIndex] = pivotElement;
    return pivotIndex;   
}


// bubbleSort([1, 2, 3, 4, 8, 7]);
// selectionSort([1, 2, 323, 44, -4, 123, 4, 8, 7]);
// insertionSort([1, 2, 323, 44, -4, 123, 4, 8, 7]);

// merge([3, 5, 6, 77, 289 ,1090], [7, 9, 11, 15]);
// mergeSort([6, 1, 2, 323, 44, -4, 123, 4, 8, 7]);
// pivot([6, 1, 2, 323, 44, -4, 123, 4, 8, 7]);
pivotSort([125, 6, 1, 2, 323, 44, -4, 123, 4, 8, 7]);