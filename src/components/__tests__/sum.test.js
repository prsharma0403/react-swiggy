import { sum } from "../sum";

test("sum function calculate sum of two nunmber",()=>{
const result=sum(4,5)
expect(result).toBe(9);
})