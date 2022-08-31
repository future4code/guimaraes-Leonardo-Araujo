import { performPurchase } from "../src";

describe("Teste na função performPurchase", () => {
  test("Retorna true para saldo maior  ao valor da compra", () => {
    const result= performPurchase({nome:"Leomardo",saldo:500.99},200)
    expect(result).not.toBe(undefined);
  });
  test("Retorna true para saldo igual  ao valor da compra", () => {
    const user={nome:"Leomardo",saldo:500.99}
    const result= performPurchase(user,500.99)
    
    expect(result).toEqual({
      ...user,
      saldo: 0
    })
  });
  test("Retorna true para saldo menor  ao valor da compra", () => {
    const result= performPurchase({nome:"Leomardo",saldo:500.99},2000.99)
    expect(result).toBe(undefined);
  });

  

  
});

