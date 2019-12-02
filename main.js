const makeDino = function(species, period, carnivore, extinct=false) {
  return {
    species,
    period,
    carnivore,
    extinct,
  }
}

const makeSingular = function(dino) {
  return newDino = {
    species: dino.species.slice(dino.species.length-2) === 'us'? dino.species.slice(0, dino.species.length-2):dino.species
    ,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
}

const truncateSpecies = function(dino) {
  return newDino = {
    species: dino.species.length>=10 ? dino.species.slice(0, 7)+'...' : dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: dino.extinct,
  }
}

const makeExtinct = function(dino) {
  return newDino = {
    species: dino.species,
    period: dino.period,
    carnivore: dino.carnivore,
    extinct: true,
  }
}

module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct
}