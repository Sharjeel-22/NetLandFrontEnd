import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyQWRkcmVzcyI6IjB4RGYyNmUxMTkxNmFlRTNCRTQ1N0ZjQjk4OTU2MzA0ZDE1ZmMzRTQ3OCIsImlhdCI6MTY1MjUzODI1MiwiZXhwIjoxNjUyNjEwMjUyfQ.Tgv2hrnINVWKgEj9-4bh9suX8MKNVRURO9BQ1gloe2U",
  },
});
