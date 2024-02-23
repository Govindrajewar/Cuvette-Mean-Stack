let student = {
    firstName: 'Raj',
    lastName: 'Kapoor',
    age: 25,
    address: {
        street: 222,
        landmark: 'Near BSNL Office',
        city: 'Malegaon',
        dist: 'Nanded'
    },

    hobbies: ['playing', 'reading', 'cooking'],
    makeTea(){
        // console.log('making Tea for everyone');      // while displaying on console
        return 'making Tea for everyone';               // while displaying on webpage
    }
};


document.getElementById('display').innerText = `Hello, My name is ${student.firstName}. I am ${student.age} years old, I belong from ${student.address.dist} and my hobbies are ${student.hobbies}. I always enjoy while ${student.makeTea()}.`;


document.getElementById('address').innerHTML =
`<p>
Street      : ${student.address.street}<br>
LandMark    : ${student.address.landmark}<br>
City        : ${student.address.city}<br>
District    : ${student.address.dist}<br>
</p>`;

document.getElementById('addressTable').innerHTML =
`
<table>
    <tr>
    <th>Key</th>
    <th>Value</th>
    </tr>
    <tr>
        <td>Street</td><td>${student.address.street}</td>
    </tr>
    <tr>
        <td>Landmark</td><td>${student.address.landmark}</td>
    </tr>
    <tr>
    <td>City</td><td>${student.address.city}</td>
</tr>
<tr>
<td>District</td><td>${student.address.dist}</td>
</tr>
</table>
`
