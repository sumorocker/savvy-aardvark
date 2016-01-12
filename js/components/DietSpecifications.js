"use-strict";

function restrictionsVegetarian() {

    return ['chicken', 'beef', 'eggs'];

}

function restrictionsVegan() {

    return ['chicken', 'beef', 'eggs'];

}

function restrictionsPaleo() {

    return ['flour', 'gluten', 'nuts'];

}

export default { restrictionsVegetarian : restrictionsVegetarian,
                 restrictionsVegan : restrictionsVegan,
                 restrictionsPaleo : restrictionsPaleo };