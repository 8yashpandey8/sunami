const featured = [
    {
      title: "Atomic Habits",
      summary: "Learn how tiny habits make big changes in your life.",
    },
    {
      title: "The Alchemist",
      summary: "A journey of a boy discovering his personal legend.",
    }
  ];
  
  const allBooks = [
    ...featured,
    {
      title: "Deep Work",
      summary: "Rules for focused success in a distracted world.",
    },
    {
      title: "Rich Dad Poor Dad",
      summary: "Financial wisdom through two father figures.",
    },
    {
      title: "Ikigai",
      summary: "The Japanese secret to a long and happy life.",
    }
  ];
  
  function renderBooks(data, containerId) {
    const container = document.getElementById(containerId);
    data.forEach(book => {
      const div = document.createElement('div');
      div.className = 'book-card';
      div.innerHTML = `<h3>${book.title}</h3><p>${book.summary}</p>`;
      container.appendChild(div);
    });
  }
  
  renderBooks(featured, 'featured-books');
  renderBooks(allBooks, 'all-books');
  