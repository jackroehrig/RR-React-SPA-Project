const users = [
  {
    userName: "tinksFirstUser",
    password: "password123",
    posts: [
      {
        content: "This is my first Tinker post!",
        date: new Date("December 28, 2021"),
      },
      {
        content: "This is my second Tinker post!",
        date: new Date("December 29, 2021"),
      },
    ],
    id: 1,
  },
  {
    userName: "thinkingNtinking",
    password: "iLoveTink123",
    posts: [
      {
        content: "Hello World!",
        date: new Date("January 4, 2022"),
      },
      {
        content: "What new stuff do you guys think Tink should add",
        date: new Date("January 10, 2022"),
      },
    ],
    id: 2,
  },
  {
    userName: "tinker_sports",
    password: "iLikeSport567",
    posts: [
      {
        content: "First sports account on Tinker!",
        date: new Date("December 30, 2021"),
      },
      {
        content: "Aaron Rodgers Choked :(",
        date: new Date("January 24, 2022"),
      },
    ],
    id: 3,
  },
];

export default users;
