//nums1 = [1,2,2,1], nums2 = [2,2]
//[2]
var intersection = function (nums1, nums2) {
    let s = new Set();
    nums2.forEach((item) => {
        if (nums1.includes(item)) {
            s.add(item);
        }
    });
    return Array.from(s);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));