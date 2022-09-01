export interface Fighter {
   name: string,
   life: number,
   defense: number,
   strength: number
}

export const validateCharacter = (figther: Fighter): boolean => {

   if (!figther.name || !figther.life || !figther.strength || !figther.defense) {
      return false;
   }

   if (figther.life <= 0 || figther.strength <= 0 || figther.defense <= 0) {
      return false;
   }

   return true;
}
export const performAttack = (attacker: Fighter, defender: Fighter) => {
   if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid Fighter");
   }

   if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
   }
};
export const performAttack2 = (attacker: Fighter, defender: Fighter, validator: (input: Fighter) => boolean
) => {
   if (!validator(attacker) || !validator(defender)) {
      throw new Error("Invalid Fighter");
   }

   if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
   }
};