import { Fighter, performAttack, performAttack2, validateCharacter } from "../src";


describe("Teste na função validateCharacter  personagem com o nome vazio", () => {
  test("Objeto figther com nome vazio", () => {
    const input:Fighter={
      name: "",
      life:1500,
      defense:200,
      strength:600
   }
   const result:boolean=validateCharacter(input)
   expect(result).toBe(false)    
  });
  test("Objeto figther com vida igual  a 0", () => {
    const input:Fighter={
      name: "Ana",
      life:0,
      defense:200,
      strength:600
   }
   const result:boolean=validateCharacter(input)
   expect(result).toBe(false)    
  });
  test("Objeto figther com força igual  a 0", () => {
    const input:Fighter={
      name: "Ana",
      life:1500,
      defense:200,
      strength:0
   }
   const result:boolean=validateCharacter(input)
   expect(result).toBe(false)    
  });
  test("Objeto figther com desesa igual  a 0", () => {
    const input:Fighter={
      name: "Ana",
      life:1500,
      defense:0,
      strength:600
   }
   const result:boolean=validateCharacter(input)
   expect(result).toBe(false)    
  });
  test("Objeto figther com vida menor que 0", () => {
    const input:Fighter={
      name: "Ana",
      life:-1500,
      defense:0,
      strength:600
   }
   const result:boolean=validateCharacter(input)
   expect(result).toBe(false)    
  });
  test("Objeto figther com defesa menor que 0", () => {
    const input:Fighter={
      name: "Ana",
      life:1500,
      defense:-520,
      strength:600
   }
   const result:boolean=validateCharacter(input)
   expect(result).toBe(false)    
  });
  test("Objeto figther com força menor que 0", () => {
    const input:Fighter={
      name: "Ana",
      life:1500,
      defense:520,
      strength:-600
   }
   const result:boolean=validateCharacter(input)
   expect(result).toBe(false)  
  });  
  test("Objeto figther com todas as informações validas", () => {
    const input:Fighter={
      name: "Ana",
      life:1500,
      defense:520,
      strength:600
   }
   const result:boolean=validateCharacter(input)
   expect(result).toBe(true)    
  });

});

describe(" Teste performAttack2 ",()=>{
  test("Teste performAttack2k", () => {
    const validatorMock = jest.fn(() => {
      return true;
    });
  
    const attacker: Fighter = {
      name: "Scorpion",
      life: 1500,
      defense: 200,
      strength: 600,
    };
  
    const defender: Fighter = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };
  
    performAttack2(attacker, defender, validatorMock as any);
  
    expect(defender.life).toEqual(1300);
    expect(validatorMock).toHaveBeenCalled();
    expect(validatorMock).toHaveBeenCalledTimes(2);
    expect(validatorMock).toHaveReturnedTimes(2);
  });
  test("teste invalid fighter ", () => {
    expect.assertions(4);
    const validatorMock = jest.fn(() => {
      return false;
    });

    const attacker: Fighter = {
      name: "Sub zero",
      life: 1500,
      defense: 200,
      strength: -600,
    };

    const defender: Fighter = {
      name: "Kitana",
      life: 1500,
      defense: 400,
      strength: 800,
    };

    try {
      performAttack2(attacker, defender, validatorMock as any);
    } catch (err:any) {
      expect(err.message).toBe("Invalid Fighter");
      expect(validatorMock).toHaveBeenCalled();
      expect(validatorMock).toHaveBeenCalledTimes(1);
      expect(validatorMock).toHaveReturnedTimes(1);
    }
  });
});