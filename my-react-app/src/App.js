import "./App.css";

const list = [
  {
  title: "React",
  url: "https://react.dev/",
  author: "Robin Wieruch",
  num_comments: "3",
  point: "4",
  objectID: "0",
},
{
  title: "Redux",
  url: "https://redux.js.org/",
  author: "Andrew Clark",
  num_comments: "2",
  point: "5",
  objectID: "1",
}
]

function App() {
  const title = "This is Title"
  return (
    <div>
      <h1>{title}</h1>
      <table class="table table-bordered table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>URL</th>
            <th>Author</th>
            <th>Comments</th>
            <th>Points</th>
          </tr>
        </thead>
        <tbody>
        {list.map(function(item){
          return<tr>
            <td>{item.objectID}</td>
            <td>{item.title}</td>
            <td>{item.url}</td>
            <td>{item.author}</td>
            <td>{item.num_comments}</td>
            <td>{item.point}</td>
          </tr>
           })}
        </tbody>
      </table>
      <hr />
      <ul>
      {list.map(function(item){
          return <li>{item.title}</li>;
          return <li>{item.url}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
