const characterName = 'Per'
const charachterClass = 'Wizard'
const sword = 'Excalibur'
const wand = 'Elder wand'
const strengthLevel = 85
const canCharacterEquiptSword = charachterClass == 'worrior'
const canCharacterEquiptWand = charachterClass == 'Wizard'


if canCharacterEquiptSword && strengthLevel > 70 {
    if (strengthLevel > 90)
    alert('Your class can equip swords')
} else {
    alert('Your cannot use swords unfortunatly')
}






 