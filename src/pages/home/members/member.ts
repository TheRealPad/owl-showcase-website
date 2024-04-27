interface Member {
  image_url: string;
  name: string;
  job: string;
}

const members: Member[] = [
  {
    name: "Sandro SGRO",
    job: "Chef de projet/dev mobile",
    image_url: "/person.png",
  },
  {
    name: "Wassini BOUZIDI",
    job: "Lead backend",
    image_url: "/person.png",
  },
  {
    name: "Bachir Benzaoui",
    job: "Lead security",
    image_url: "/person.png",
  },
  {
    name: "Tao Weijie",
    job: "Dev backend",
    image_url: "/person.png",
  },
  {
    name: "Pierre-Alexandre DELGADO-AREVALO",
    job: "Lead mobile/dev Wear OS",
    image_url: "/person.png",
  },
  {
    name: "Luc SCHMITT",
    job: "Dev mobile",
    image_url: "/person.png",
  },
  {
    name: "Vincent ZHONG",
    job: "Dev devops/dev mobile",
    image_url: "/person.png",
  },
  {
    name: "Titouan LEFEVRE",
    job: "Dev mobile",
    image_url: "/person.png",
  },
  {
    name: "Brice BOUALAVONG",
    job: "Dev devops/dev backend",
    image_url: "/person.png",
  },
  {
    name: "Joël JOKA",
    job: "Dev mobile",
    image_url: "/person.png",
  },
];

export type { Member };
export { members };
