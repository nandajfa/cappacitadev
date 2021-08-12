const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function pares(array)
// {
//     let n_par = []
//         for (let i = 0; i < array.length; i++)
//         {
//             if (array[i] % 2 == 0)
//             {
//                     n_par.push(array[i])
//             }
//         }
//         return n_par
// }

function pares(array)
{
    return array.filter(num => num % 2 == 0)
}

console.log(pares(number))