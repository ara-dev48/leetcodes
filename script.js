// #7
function reverse(int) {
    if (Math.abs(int) < 10) {
        return int
    }
    if (int < 0) {
        let result = Number('-' + Number(('' + Math.abs(int)).split('').reverse().join('')))
        return result >= -Math.pow(2,31)?result:0
    }
    else if (int > 0) {        
        let result = Number(('' + Math.abs(int)).split('').reverse().join(''))
        return result <= Math.pow(2,31)-1?result:0
    }
}
reverse(0) // 0
reverse(10) // 1
reverse(-21) // -12
reverse(700) // 7
reverse(-980) // -89



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
function intToRoman(int) {
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

intToRoman(9) // 'IX'
intToRoman(42) // 'XLII'






// #48
function rotate(matrix) {
    const n = matrix.length;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }

    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
}

rotate([[1, 2, 3], [4, 5, 6], [7, 8, 9]]) // [[7,4,1],[8,5,2],[9,6,3]]
rotate([[5, 1, 9, 11], [2, 4, 8, 10], [13, 3, 6, 7], [15, 14, 12, 16]]) // [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]






// #55
function canJump(nums) {
    let cursor = 0;
    let maxReach = 0;
    let hasPassed = false;

    while (cursor <= maxReach) {
        maxReach = Math.max(maxReach, cursor + nums[cursor]);
        if (maxReach >= nums.length - 1) {
            hasPassed = true;
            return hasPassed;
        }
        cursor++;
    }

    return hasPassed;
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
function merge(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1];
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p2--;
        }
        p--;
    }
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p2--;
        p--;
    }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3) // [1,2,2,3,5,6]






// #443
function compress(chars) {
    let write = 0
    let read = 0
    while (read < chars.length) {
        let char = chars[read];
        let count = 0;
        while (read < chars.length && chars[read] === char) {
            read++;
            count++;
        }
        chars[write] = char;
        write++;
        if (count > 1) {
            for (let c of String(count)) {
                chars[write] = c;
                write++;
            }
        }
    }
    chars.length = write;
    return write;
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