function CalculateWinner(props) {
  const arr = props.arr;

  console.log(arr);

  const lines = [ 
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
        arr[a] && 
        arr[a] === arr[b] && 
        arr[a] === arr[c]) {
      return `${arr[a]} won!`;
    }
  }
  return "Who will win?";
}

export default CalculateWinner;
