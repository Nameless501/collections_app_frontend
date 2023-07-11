import { useCallback } from 'react';

function useSort(isAscending = true) {
    const numberComparator = useCallback(
        (num1: number, num2: number) => {
            return isAscending ? num1 - num2 : num2 - num1;
        },
        [isAscending]
    );

    const stringComparator = useCallback(
        (str1: string, str2: string) => {
            return isAscending
                ? str1.localeCompare(str2)
                : str2.localeCompare(str1);
        },
        [isAscending]
    );

    const booleanComparator = useCallback(
        (bool1: boolean, bool2: boolean) => {
            return isAscending
                ? Number(bool2) - Number(bool1)
                : Number(bool1) - Number(bool2);
        },
        [isAscending]
    );

    const handleSort = useCallback(
        (item1: unknown, item2: unknown): number => {
            if (typeof item1 === 'number' && typeof item2 === 'number') {
                return numberComparator(item1, item2);
            } else if (typeof item1 === 'string' && typeof item2 === 'string') {
                return stringComparator(item1, item2);
            } else if (
                typeof item1 === 'boolean' &&
                typeof item2 === 'boolean'
            ) {
                return booleanComparator(item1, item2);
            }
            return 0;
        },
        [booleanComparator, stringComparator, numberComparator]
    );

    return {
        numberComparator,
        stringComparator,
        booleanComparator,
        handleSort,
    };
}

export default useSort;
