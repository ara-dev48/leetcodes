// #7
function intReverse(int) {
    if (Math.abs(int) < 10) {
        return int
    }
    if (int < 0) {
        return Number('-' + Number(('' + Math.abs(int)).split('').reverse().join('')))
    }
    else if (int > 0) {
        return Number(('' + Math.abs(int)).split('').reverse().join(''))
    }
}
intReverse(0) // 0
intReverse(10) // 1
intReverse(-21) // -12
intReverse(700) // 7
intReverse(-980) // -89



// #13
function romanToInt(roman) {
    const romanToIntValues = {
        'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
    };
    let int = 0;
    for (let i = 0; i < roman.length; ++i) {
        if (romanToIntValues[roman[i]] < romanToIntValues[roman[i + 1]]) {
            int -= romanToIntValues[roman[i]];
        } else {
            int += romanToIntValues[roman[i]];
        }
    }
    return int;
}
romanToInt('IX')   // 9
romanToInt('XLII') // 42


// #12
function toRoman(int) {
    const romanValues = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];
    let roman = '';
    for (let i = 0; i < romanValues.length; ++i) {
        while (int >= romanValues[i].value) {
            roman += romanValues[i].numeral
            int -= romanValues[i].value
        }
    }
    return roman;
}

toRoman(9) // 'IX'
toRoman(42) // 'XLII'






// #48
function matrixRotate(matrix) {
    let rotated = []
    let inner = []
    for (let j = 0; j < matrix[0].length; ++j) {
        for (let i = matrix.length - 1; i >= 0; --i) {
            inner.push(matrix[i][j])
        }
        rotated.push(inner)
        inner = []
    }
    return rotated
}
matrixRotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) // [[7,4,1],[8,5,2],[9,6,3]]
matrixRotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]) // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]






// #55
function canJump(nums) {
    let cursor = 0
    let hasPassed = false
    while (!hasPassed) {
        if (nums[cursor] == 0) return hasPassed
        cursor = cursor + nums[cursor]
        if (cursor >= nums.length - 1) {
            hasPassed = true
            return hasPassed
        }
    }
}
canJump([2, 3, 1, 1, 4]) // true
canJump([3, 2, 1, 0, 4]) // false






// #67
function addBinary(a, b) {
    if (a.length < b.length) {
        a = '0'.repeat(b.length - a.length) + a
    } else if (a.length > b.length) {
        b = '0'.repeat(a.length - b.length) + b
    }
    let carry = 0;
    let result = '';
    for (let i = a.length - 1; i >= 0; i--) {
        let bitA = +a[i]
        let bitB = +b[i]
        let sum = bitA + bitB + carry
        result = (sum % 2) + result
        carry = Math.floor(sum / 2)
    }
    if (carry) {
        result = '1' + result
    }
    return result
}

addBinary('101', '11') // '1000'
addBinary('1101', '1011') // '11000'







// #88
function mergeSort(nums1, m, nums2, n) {
    nums1 = nums1.splice(0, m)
    nums2 = nums2.splice(0, n)
    nums1 = nums1.concat(nums2)
    nums1.sort((a, b) => a - b)
    return nums1
}
mergeSort([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // [1,2,2,3,5,6]






// #443
function compress(chars) {
    let map = {}
    for (let i = 0; i < chars.length; ++i) {
        if (!(`${chars[i]}` in map)) {
            map[`${chars[i]}`] = 1
        } else {
            map[`${chars[i]}`]++
        }
    }
    chars = []
    for (let key in map) {
        chars.push(key)
        if (map[key] !== 1) {
            chars.push(...map[key] + '')
        }
    }
    return chars
}
compress(["a", "a", "b", "b", "c", "c", "c"]) // ['a', '2', 'b', '2', 'c', '3']
compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]) // ['a', 'b', '1', '2']





// #867
function transpose(matrix) {
    let rows = matrix.length
    let cols = matrix[0].length
    let result = []
    for (let i = 0; i < cols; ++i) {
        result[i] = [];
    }
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}
transpose([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) // [[1,4,7],[2,5,8],[3,6,9]]
transpose([[1, 2, 3], [4, 5, 6]]) // [[1,4],[2,5],[3,6]]






// #1456
function maxVowels(s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let maxCount = 0
    let currentCount = 0
    for (let i = 0; i < k; ++i) {
        if (vowels.has(s[i])) {
            currentCount++
        }
    }
    maxCount = currentCount
    for (let i = k; i < s.length; ++i) {
        if (vowels.has(s[i])) {
            currentCount++
        }
        if (vowels.has(s[i - k])) {
            currentCount--
        }
        maxCount = Math.max(maxCount, currentCount);
    }
    return maxCount;
}
maxVowels("abciiidef", 3) // 3
maxVowels("aeiou", 2) // 2
maxVowels("leetcode", 3)  // 2