import React from 'react';

class List extends React.Component {
    // constructor(props) {
    //   super(props);
    // }

    // Higher Order Function
    render() {
        // Map
        const fruits = ['mangga', 'aple', 'delima', 'nanas'];
        const fruit = fruits.map((f, index) => <li key={index}>{f}</li>);

        // Filter
        const numbers = [1, 3, 5, 9, 2, 10];
        const number = numbers.filter((n) => n < 6);
        const num = number.map((n) => <li key={n.toString()}>{n}</li>);
        // Reduce
        const total = numbers.reduce((value, acc) => value + acc);

        return (
            <div>
                <h1>Hallo</h1>
                <ul>
                    {fruit}
                </ul>
                <ul>
                    {num}
                </ul>
                <p>Total = {total}</p>
            </div>
        )
    }
}

export default List;