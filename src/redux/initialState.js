export const initialState = {
    columns: [
      {
        id: 1,
        listId: 1,
        title: "Books",
        icon: "book",
      },
      {
        id: 2,
        title: "Movies",
        icon: "film",
      },
      {
        id: 3,
        title: "Framework",
        icon: "code",
      },
    ],
    cards: [
      { id: 1, columnId: 1, title: "Eloquent JavaScript." },
      {
        id: 2,
        columnId: 1,
        title: "Interaktywne strony WWW dla każdego.",
      },
  
      { id: 3, columnId: 2, title: "React - The complete Guide" },
      {
        id: 4,
        columnId: 2,
        title: "The complete JS course",
      },
      { id: 5, columnId: 3, title: "HTML" },
      {
        id: 6,
        columnId: 3,
        title: "CSS + SCSS",
      },
    ],

    lists: [
        {
          id: 1,
          title: "Things to do...",
          description: "Interesting things I want to check out",
        },
        {
          id: 2,
          title: "Test list",
          description: "Lorem Ipsum",
        },
      ],
    

    searchInput: "",
};