const cats = {
  fluffy: {
    id: "fluffy",
    catName: "Fluffy",
    age: "2 yrs",
    breed: "Persian",
    description:
      "A 2-year-old Persian cat, friendly and playful, ready for a loving home.",
    imageUrl: "/fluffy.jpg",
    isReserved: false,
    isAvailable: true,
    adopterInfo: null,
  },
  skywalker: {
    id: "skywalker",
    catName: "Skywalker",
    age: "6 months",
    breed: "Siamese",
    description:
      "A 6-month-old Siamese who loves cuddles and naps, seeking a caring family.",
    imageUrl: "/skywalker.jpg",
    isReserved: false,
    isAvailable: true,
    adopterInfo: null,
  },
  shadow: {
    id: "shadow",
    catName: "Shadow",
    age: "1 yr",
    breed: "Maine Coon",
    description:
      "A 1-year-old energetic and curious Maine Coon, perfect for an active home.",
    imageUrl: "/shadow.jpg",
    isReserved: false,
    isAvailable: true,
    adopterInfo: null,
  },
  simba: {
    id: "simba",
    catName: "Simba",
    age: "4 yrs",
    breed: "Bengal",
    description:
      "A 4-year-old Bengal who loves to climb and explore, looking for adventure.",
    imageUrl: "/simba.jpg",
    isReserved: false,
    isAvailable: true,
    adopterInfo: null,
  },
  luna: {
    id: "luna",
    catName: "Luna",
    age: "8 months",
    breed: "Ragdoll",
    description:
      "An 8-month-old calm and affectionate Ragdoll, ideal for a cozy home.",
    imageUrl: "/luna.jpg",
    isReserved: false,
    isAvailable: true,
    adopterInfo: null,
  },
  pipi: {
    id: "pipi",
    catName: "Pipi",
    age: "6 yrs",
    breed: "British Shorthair",
    description:
      "A 6-year-old playful and mischievous British Shorthair, full of charm.",
    imageUrl: "/pipi.jpg",
    isReserved: false,
    isAvailable: true,
    adopterInfo: null,
  },
};

function addCat(catData) {
  const { catName, age, breed, description, imageUrl } = catData;
  const id = catName.toLowerCase().replace(/\s+/g, "_");

  if (cats[id]) {
    return false;
  }

  cats[id] = {
    id,
    catName,
    age,
    breed,
    description,
    imageUrl,
    isReserved: false,
    isAvailable: true,
    adopterInfo: null,
  };

  return true;
}

function updateCat(catData) {
  const { id, catName, age, breed, description } = catData;
  if (cats[id]) {
    cats[id].catName = catName;
    cats[id].age = age;
    cats[id].breed = breed;
    cats[id].description = description;
  }
  return true;
}

function deleteCat(catId) {
  delete cats[catId];
  return true;
}

function getAllCats() {
  return Object.values(cats);
}

function getCat(catId) {
  return cats[catId] || null;
}

function reserveCat(catId, adopterInfo) {
  const cat = getCat(catId);
  if (cat && !cat.isReserved) {
    cat.isReserved = true;
    cat.adopterInfo = adopterInfo;
    cat.isAvailable = false;
    return true;
  }
  return false;
}

function unreserveCat(catId) {
  const cat = getCat(catId);
  if (cat && cat.isReserved) {
    cat.isReserved = false;
    cat.adopterInfo = null;
    cat.isAvailable = true;
    return true;
  }
  return false;
}

export default {
  addCat,
  deleteCat,
  getAllCats,
  getCat,
  updateCat,
  reserveCat,
  unreserveCat,
};
