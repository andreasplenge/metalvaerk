export interface Piece {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  additionalImages: string[];
}

export const siteConfig = {
  tagline: "Handcrafted in Copenhagen",
};

export const pieces: Piece[] = [
  {
    id: "edubora",
    title: "Edubora",
    description: "Wedding rings from 925 sterling silver and 585 gold",
    imageUrl: "/images/edubora.jpg",
    additionalImages: ["/images/edubora-2.jpg"],
  },
  {
    id: "simon",
    title: "Simon",
    description: "Ring handcrafted from 925 sterling silver",
    imageUrl: "/images/simon.jpg",
    additionalImages: [],
  },
  {
    id: "angular",
    title: "Angular",
    description: "Ring handcrafted from recycled 830 silver",
    imageUrl: "/images/angular.png",
    additionalImages: [],
  },
  {
    id: "tacto",
    title: "Tacto",
    description: "Ring handcrafted from 925 sterling silver",
    imageUrl: "/images/tacto.jpg",
    additionalImages: [],
  },
  {
    id: "manifold",
    title: "Manifold",
    description: "Ring handcrafted from recycled 333 gold",
    imageUrl: "/images/manifold.jpg",
    additionalImages: [],
  },
  {
    id: "ruido-blanco",
    title: "Ruido Blanco",
    description: "Ring handcrafted from 925 sterling silver",
    imageUrl: "/images/ruido-blanco.jpg",
    additionalImages: [],
  },
  {
    id: "sulten-ulv",
    title: "Sulten ulv",
    description: 'Ring handcrafted from recycled 830 silver\n"Du må jo være sulten som ulven"',
    imageUrl: "/images/sulten-ulv.jpg",
    additionalImages: [],
  },
  {
    id: "dudu",
    title: "Dudu",
    description: "Wedding ring in 925 sterling silver",
    imageUrl: "/images/dudu.jpg",
    additionalImages: [],
  },
  {
    id: "horizonte",
    title: "Horizonte",
    description: "Ring handcrafted from recycled silver and gold alloy",
    imageUrl: "/images/horizonte.jpg",
    additionalImages: [],
  },
];
