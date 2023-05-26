export const initialState = {
    columns: [
      {
        id: "1",
        listId: "1",
        title: "Books",
        icon: "book",
      },
      {
        id: "2",
        listId: "1",
        title: "Movies",
        icon: "film",
      },
      {
        id: "3",
        listId: "1",
        title: "Framework",
        icon: "code",
      },
      {
        id: "4",
        listId: "2",
        title: "Test",
        icon: "hashtag",
      },
    ],
    cards: [
        {
        id: "1",
        columnId: "1",
        title: "Eloquent JavaScript.",
        isFavourite: false,
        },
      {
        id: "2",
        columnId: "1",
        title: "Interaktywne strony WWW dla każdego.",
        isFavourite: false,
      },
      {
        id: "3",
        columnId: "2",
        title: "React - The complete Guide",
        isFavourite: false,
      },
  
      {
        id: "4",
        columnId: "2",
        title: "The complete JS course",
        isFavourite: false,
      },
      { id: "5", columnId: "3", title: "HTML", isFavourite: false },
      {
        id: "6",
        columnId: "3",
        title: "CSS + SCSS",
        isFavourite: false,
      },
    ],

    lists: [
        {
        id: "1",
        title: "Things to do...",
        description: "Interesting things I want to check out",
        },
        {
        id: "2",
        title: "Test list",
        description: "Lorem Ipsum",
        },
      ],
    

    searchInput: "",
};