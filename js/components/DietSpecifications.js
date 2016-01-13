"use-strict";

function restrictionsVegetarian() {
    return ['chicken', 'beef', 'pork', 'veal', 'turkey', 'crab', 'meat', 'ribs',
        'rib', 'liver', 'fowl', 'tilapia', 'fish', 'jerky', 'bacon', 'sausage',
        'ham', 'hog', 'kielbasa', 'chorizo', 'rib', 'ribs', 'shrimp', 'prosciutto',
        'loin', 'herring', 'tenderloin', 'salmon', 'brisket', 'geese', 'dog', 'dogs',
        'steak', 'steaks', 'hotdog', 'hotdogs', 'carbonara', 'fish', 'whitefish', 'fillets',
        'filets', 'filet', 'filets', 'beefaroni', 'wings', 'seafood', 'cod',
        'sardines', 'crabmeat', 'clam', 'clams', 'oysters', 'oyster', "chik'n",
        'lobster', 'tuna', 'caviar', 'lumpfish', 'catfish', 'trout',
        'scallop', 'scallops', 'crawfish', 'swordfish', 'sole', 'halibut',
        'pollock', 'squid', 'sturgeon', 'haddock', 'snapper', 'calamari', 'mussels',
        'mackerel', 'lard', 'bear', 'bone', 'buffalo', 'bison', 'caribou', 'goat',
        'horse', 'kangaroo', 'lamb', 'marrow soup','moose', 'mutton', 'opossum',
        'organ meats', 'venison', 'rabbit', 'snake', 'squirrel', 'sweetbreads',
        'tripe', 'turtle', 'duck', 'emu', 'gizzards', 'goose', 'grouse', 'guinea hen',
        'organs', 'ostrich', 'partridge', 'pheasant', 'quail', 'squab', 'pigeon', 'lamb',
        'thighs', 'flounder', 'chops', 'prawn', 'pastrami', 'carne', 'meatball', 'hash',
        'meatloaf', 'pepperoni', 'sparerib', 'spareribs'];
}

function restrictionsVegan() {

    return ['chicken', 'beef', 'pork', 'veal', 'turkey', 'crab', 'meat', 'ribs',
        'rib', 'liver', 'fowl', 'tilapia', 'fish', 'jerky', 'bacon', 'sausage',
        'ham', 'hog', 'kielbasa', 'chorizo', 'rib', 'ribs', 'shrimp', 'prosciutto',
        'loin', 'herring', 'tenderloin', 'salmon', 'brisket', 'goose', 'dogs',
        'steak', 'steaks', 'hotdog', 'hotdogs', 'carbonara', 'fish', 'whitefish', 'fillets',
        'filets', 'filet', 'filets', 'beefaroni', 'wings', 'seafood', 'cod',
        'sardines', 'crabmeat', 'clam', 'clams', 'oysters', 'oyster', "chik'n",
        'lobster', 'gelatin', 'tuna', 'caviar', 'lumpfish', 'catfish', 'trout',
        'scallop', 'scallops', 'crawfish', 'swordfish', 'sole', 'halibut',
        'pollock', 'squid', 'sturgeon', 'haddock', 'snapper', 'calamari', 'mussels', 'mackerel',
        'eggs', 'egg', 'milk', 'mayonnaise', 'mayo', 'lard', 'bone', 'cod liver',
        'dairy', 'egg yolk', 'milk sugar', 'yogurt', 'cheddar', 'cheese', 'bear',
        'feta', 'brie', 'smetana', 'kefir', 'ricotta', 'infant formula',
        'butter', 'buttermilk', 'curds', 'gelato', 'mozzarella', 'dulce de leche',
        'custard', 'gomme', 'ice cream', 'junket', 'khoa', 'labneh', 'paneer',
        'pytia', 'qimiq', 'quark', 'skorup', 'sour cream', 'tarhana', 'viili', 'bone',
        'buffalo', 'bison', 'caribou', 'goat', 'horse', 'kangaroo', 'lamb', 'marrow soup',
        'moose', 'mutton', 'opossum', 'organ meats', 'venison', 'rabbit', 'snake',
        'squirrel', 'sweetbreads', 'tripe', 'turtle', 'duck', 'emu', 'gizzards',
        'goose', 'grouse', 'guinea hen', 'organs', 'ostrich', 'partridge', 'pheasant',
        'quail', 'squab', 'pigeon', 'lamb', 'thighs', 'flounder', 'chops', 'prawn', 'pastrami',
        'carne', 'meatball', 'hash', 'meatloaf', 'pepperoni', 'sparerib', 'spareribs'];
}

function restrictionsPaleo() {

    return ['yogurt', 'cheddar', 'cheese', 'bear','feta', 'brie',
        'smetana', 'kefir', 'ricotta', 'infant formula',
        'butter', 'buttermilk', 'curds', 'gelato', 'mozzarella', 'milk',
        'dairy', 'alcohol', 'beer', 'ale', 'ipa', 'grain', 'seeds', 'cereal',
        'cereals', 'oats', 'oatmeal', 'bread', 'rice', 'potato', 'couscous',
        'pasta', 'wheat', 'bulgar wheat', 'millet', 'sorgum', 'quinoa', 'cornmeal',
        'barley', 'rye', 'pitta', 'focaccia', 'chapatis', 'bagel', 'ciabatta',
        'tortilla', 'tortillas', 'potato', 'potatoes', 'chips', 'gnocci', 'yams',
        'cassava', 'plantain', 'wholegrain', 'whole grain', 'whole grains',
        'white sugar', 'agave syrup', 'corn syrup', 'high-fructose corn syrup',
        'brown sugar', 'molasses', 'molasse', 'maple syrup', 'glucose syrup',
        'tapioca syrup', 'rice bran syrup', 'malt syrup', 'sorghum', 'treacle',
        'panela', 'carob syrup', 'flour', 'legume', 'rice flour', 'corn flour',
        'oatmeal', 'white rice', 'beans', 'bean', 'peas', 'nuts', 'lentils',
        'peanuts', 'chickpeas', 'butternut', 'miso', 'soynuts', 'soynut', 'soybean',
        'aarts', 'amasi', 'dulce de leche', 'custard', 'gomme', 'ice cream', 'junket',
        'khoa', 'labneh', 'paneer', 'pytia', 'qimiq', 'quark', 'skorup', 'sour cream',
        'tarhana', 'viili', 'cracked wheat', 'durum', 'einkorn', 'emmer', 'farina',
        'faro', 'gliadin', 'graham', 'flour', 'kamut', 'matzo', 'semolina', 'spelt',
        'seitan', 'triticale', 'mir', 'bran'];

}

// Ingredients/nutrients to watch for
function warningsVegetarian() {
    return [];
}

function warningsVegan() {
    return ['glycerine', 'lactic acid', 'monoglyceride', 'diglycerides',
        'stearic acid', 'rennet', 'pasta', 'artificial color', 'artificial colors',
        'aspic', 'natural flavor', 'natural source', 'vitamin b12', 'chocolate',
        'cream', 'noodles'];
}

function warningsPaleo() {
    return [];
}

// Nutrients to avoid
function nutrientsVegetarian() {
    return [];
}

function nutrientsVegan() {
    return ['casein', 'collagen', 'keratin', 'gelatin', 'lactose', 'whey', 'albumin',
        'allantoin', 'glutamic acid', 'glycogen', 'isinglass', 'lipase', 'pepsin',
        'squalene', 'taurine', 'vaccenic acid'];
}

function nutrientsPaleo() {
    return ['alcohol', 'sugar alcohol', 'sucrose', 'fructose', 'maltose', 'dextran',
        'saccharose', 'dextrose', 'dextrin', 'maltodextrin', 'casein'];
}

export default {
    restrictionsVegetarian : restrictionsVegetarian,
    restrictionsVegan : restrictionsVegan,
    restrictionsPaleo : restrictionsPaleo,
    warningsVegetarian : warningsVegetarian,
    warningsVegan : warningsVegan,
    warningsPaleo : warningsPaleo,
    nutrientsVegetarian : nutrientsVegetarian,
    nutrientsVegan : nutrientsVegan,
    nutrientsPaleo : nutrientsPaleo
};