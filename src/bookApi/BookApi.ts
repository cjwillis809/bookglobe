class BookApi {
    public static getAllBooks() {
        return fetch('https://localhost:5001/api/books').then(response => {
          return response.json();
      }).catch(error => {
        return error;
      });
    };

    public static deleteBook(id: number) {
      return fetch('https://localhost:5001/api/books/' + id, { 
        method: "DELETE"
      }).then(response => {
        return response;
    }).catch(error => {
      return error;
    });
  };
}

export default BookApi;