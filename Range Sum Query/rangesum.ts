class NumArray {
  private arr: number[];

  constructor(nums: number[]) {
    const m = nums.length;
    this.arr = new Array(m).fill(0);
    this.arr[0] = nums[0];

    for (let i = 1; i < m; i++) {
      this.arr[i] = this.arr[i - 1] + nums[i];
    }
  }

  sumRange(left: number, right: number): number {
    if (left === 0) return this.arr[right];
    return this.arr[right] - this.arr[left - 1];
  }
}

// Input
const commands = ["NumArray", "sumRange", "sumRange", "sumRange"];
const argumentsList: any[] = [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]];

const output: (number | null)[] = [];
let obj: NumArray | null = null;

commands.forEach((command, index) => {
  const args = argumentsList[index];

  if (command === "NumArray") {
    obj = new NumArray(args[0] as number[]);
    output.push(null);
  } else if (command === "sumRange" && obj !== null) {
    const [left, right] = args as [number, number];
    output.push(obj.sumRange(left, right));
  }
});

console.log(output); // [null, 1, -1, -3]
