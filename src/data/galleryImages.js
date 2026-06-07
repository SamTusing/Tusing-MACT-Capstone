import natGeoBadge from "../assets/galleries/badges/natgeo.jpg";
import phoneEatsBadge from "../assets/galleries/badges/phoneeatsfirst.jpg";
import sweetToothBadge from "../assets/galleries/badges/sweettooth.jpg";
import americanaBadge from "../assets/galleries/badges/americana.jpg";
import flightyBadge from "../assets/galleries/badges/flighty.jpg";
import howdyBadge from "../assets/galleries/badges/howdy.jpg";
import hikeBadge from "../assets/galleries/badges/takeahike.jpg";
import sportsBadge from "../assets/galleries/badges/goteamgosports.jpg";

const natGeo = Object.values(
  import.meta.glob("../assets/galleries/natgeo/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const phoneEats = Object.values(
  import.meta.glob("../assets/galleries/phoneeatsfirst/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const sweetTooth = Object.values(
  import.meta.glob("../assets/galleries/sweettooth/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const americana = Object.values(
  import.meta.glob("../assets/galleries/americana/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const flighty = Object.values(
  import.meta.glob("../assets/galleries/flighty/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const sports = Object.values(
  import.meta.glob("../assets/galleries/goteamgosports/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const hike = Object.values(
  import.meta.glob("../assets/galleries/takeahike/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

const howdy = Object.values(
  import.meta.glob("../assets/galleries/howdy/*.{jpg,jpeg,png,webp}", {
    eager: true,
    import: "default",
  })
);

export const galleryCategories = {
  natGeo: {
    title: "Nat Geo",
    badge: natGeoBadge,
    images: natGeo,
  },

  phoneEats: {
    title: "Phone Eats First",
    badge: phoneEatsBadge,
    images: phoneEats,
  },

  sweetTooth: {
    title: "Sweet Tooth",
    badge: sweetToothBadge,
    images: sweetTooth,
  },

  americana: {
    title: "Americana",
    badge: americanaBadge,
    images: americana,
  },

  flighty: {
    title: "Flighty",
    badge: flightyBadge,
    images: flighty,
  },

  howdy: {
    title: "Howdy",
    badge: howdyBadge,
    images: howdy,
  },

  takeaHike: {
    title: "Take a Hike",
    badge: hikeBadge,
    images: hike,
  },

  goTeam: {
    title: "Go Team Go Sports",
    badge: sportsBadge,
    images: sports,
  },
};