function sumFirsLastArr(nums) {
    let sum = Number(nums[0]) + Number(nums[nums.length - 1]);
    console.log(sum);
    return sum;
}

sumFirsLastArr(['20', '30', '40']);
sumFirsLastArr(['10', '17', '22', '33']);
sumFirsLastArr(['11', '58', '69']);